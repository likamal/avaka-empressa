import React, { useEffect, useRef, useState } from 'react';

interface PrismHeroCanvasProps {
  className?: string;
}

const PRISM_VS = `#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const PRISM_FS = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 outColor;

uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_pulse;
uniform float u_mode;

mat2 rot2(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

// Signed distance to a regular triangular prism (extruded equilateral triangle)
float sdTriPrism(vec3 p, vec2 h) {
  vec3 q = abs(p);
  return max(q.z - h.y, max(q.x * 0.866025 + p.y * 0.5, -p.y) - h.x * 0.5);
}

// Signed distance to an octahedral core inside the prism
float sdOctahedron(vec3 p, float s) {
  p = abs(p);
  return (p.x + p.y + p.z - s) * 0.57735027;
}

vec2 mapScene(vec3 p, float t, vec2 m, float mode) {
  vec3 q = p;
  q.xz *= rot2(t * 0.42 + m.x * 0.95 + mode * 1.047);
  q.yz *= rot2(0.28 + sin(t * 0.31) * 0.14 - m.y * 0.65);
  q.xy *= rot2(sin(t * 0.22) * 0.12);

  float outerPrism = sdTriPrism(q, vec2(1.42, 1.55)) - 0.025;

  vec3 qc = q;
  qc.xz *= rot2(-t * 0.75);
  float innerCore = sdOctahedron(qc, 0.52 + 0.05 * sin(t * 1.8));

  if (innerCore < outerPrism) {
    return vec2(innerCore, 2.0);
  }
  return vec2(outerPrism, 1.0);
}

vec3 calcNormal(vec3 p, float t, vec2 m, float mode) {
  vec2 e = vec2(0.002, 0.0);
  return normalize(vec3(
    mapScene(p + e.xyy, t, m, mode).x - mapScene(p - e.xyy, t, m, mode).x,
    mapScene(p + e.yxy, t, m, mode).x - mapScene(p - e.yxy, t, m, mode).x,
    mapScene(p + e.yyx, t, m, mode).x - mapScene(p - e.yyx, t, m, mode).x
  ));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);

  // Subtle camera offset on desktop so text on left breathes
  vec2 camShift = u_res.x > 900.0 ? vec2(-0.28, 0.0) : vec2(0.0, -0.04);
  vec2 p2 = uv + camShift;

  vec3 ro = vec3(u_mouse.x * 0.35, 0.22 + u_mouse.y * 0.25, 4.35);
  vec3 rd = normalize(vec3(p2, -1.65));

  vec3 green = vec3(0.0, 1.0, 0.255);
  vec3 emerald = vec3(0.0, 0.62, 0.18);
  vec3 redBrand = vec3(1.0, 0.09, 0.09);

  // Background deep obsidian + subtle refractive light blades
  vec3 col = vec3(0.0, 0.006, 0.003);

  // Volumetric refractive light beams radiating from prism center
  float angle = atan(p2.y, p2.x);
  float beam1 = exp(-abs(sin(angle * 3.0 + u_time * 0.35 + u_mouse.x * 2.0)) * 9.0);
  float beam2 = exp(-abs(cos(angle * 2.0 - u_time * 0.25 + u_mouse.y * 1.5)) * 12.0);
  float radial = exp(-length(p2) * 1.35);

  col += emerald * beam1 * radial * (0.28 + u_pulse * 0.45);
  col += redBrand * beam2 * radial * (0.09 + u_pulse * 0.22);

  // Distant perspective ground plane grid
  if (rd.y < -0.02) {
    float tFloor = (-1.75 - ro.y) / rd.y;
    if (tFloor > 0.0 && tFloor < 28.0) {
      vec3 fp = ro + rd * tFloor;
      vec2 grid = abs(fract(fp.xz * 0.65 - 0.5) - 0.5) / fwidth(fp.xz * 0.65);
      float line = 1.0 - min(min(grid.x, grid.y), 1.0);
      float fade = exp(-tFloor * 0.14);
      col += vec3(0.0, 0.38, 0.1) * line * fade * 0.35;
    }
  }

  // Raymarch glass prism & internal geometric core
  float dist = 0.0;
  float hitId = 0.0;
  float edgeGlow = 0.0;
  float redEdgeGlow = 0.0;

  for (int i = 0; i < 64; i++) {
    vec3 pos = ro + rd * dist;
    vec2 res = mapScene(pos, u_time, u_mouse, u_mode);
    float d = res.x;

    // Accumulate optical glow near prism facets
    edgeGlow += exp(-abs(d) * 14.0) * 0.028;
    if (res.y > 1.5) {
      redEdgeGlow += exp(-abs(d) * 18.0) * 0.045;
    }

    if (d < 0.0025) {
      hitId = res.y;
      break;
    }
    dist += max(abs(d) * 0.72, 0.015);
    if (dist > 10.0) break;
  }

  if (hitId > 0.5) {
    vec3 hitPos = ro + rd * dist;
    vec3 n = calcNormal(hitPos, u_time, u_mouse, u_mode);
    vec3 v = -rd;

    float fresnel = pow(1.0 - max(dot(n, v), 0.0), 3.2);
    vec3 lightDir1 = normalize(vec3(1.5 + u_mouse.x, 2.0, 2.2));
    vec3 lightDir2 = normalize(vec3(-2.0, -1.0 + u_mouse.y, 1.4));

    vec3 h1 = normalize(lightDir1 + v);
    float spec1 = pow(max(dot(n, h1), 0.0), 48.0);
    vec3 h2 = normalize(lightDir2 + v);
    float spec2 = pow(max(dot(n, h2), 0.0), 32.0);

    // Chromatic dispersion inside glass facets
    vec3 refrR = refract(rd, n, 0.88);
    vec3 refrG = refract(rd, n, 0.92);
    vec3 refrB = refract(rd, n, 0.96);

    float caustics = sin(refrG.x * 9.0 + u_time) * cos(refrG.y * 9.0 - u_time * 0.7);
    float dispersion = clamp(caustics * 0.5 + 0.5, 0.0, 1.0);

    vec3 glassTint = mix(vec3(0.01, 0.08, 0.03), green * 0.42, dispersion);
    // Subtle red geometric dispersion on secondary reflection
    vec3 redBlade = redBrand * pow(max(0.0, refrR.x - refrB.x + 0.35), 2.5) * 0.32;

    if (hitId > 1.5) {
      // Inner geometric core: sharp red facet highlight
      col += redBrand * (0.45 + fresnel * 0.85) + vec3(1.0, 0.75, 0.75) * spec1 * 0.5;
    } else {
      col = mix(col, glassTint + redBlade, 0.62);
      col += green * fresnel * (0.95 + u_pulse * 0.65);
      col += vec3(0.82, 1.0, 0.88) * spec1 * 0.85;
      col += redBrand * spec2 * 0.45;

      // Internal wireframe facet trace
      float facetLine = smoothstep(0.04, 0.0, abs(dot(n, vec3(0.0, 1.0, 0.0)) - 0.5));
      col += green * facetLine * 0.22;
    }
  }

  col += green * edgeGlow * (0.55 + u_pulse * 0.85);
  col += redBrand * redEdgeGlow * (0.45 + u_pulse * 0.6);

  // Interactive click ring shockwave
  if (u_pulse > 0.01) {
    float ringR = (1.0 - u_pulse) * 1.35;
    float ring = exp(-abs(length(p2) - ringR) * 32.0) * u_pulse;
    col += green * ring * 0.65;
    col += redBrand * ring * 0.25;
  }

  // Tone mapping
  col = col / (col + vec3(0.85));
  outColor = vec4(col, 1.0);
}`;

export const PrismHeroCanvas: React.FC<PrismHeroCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fallback, setFallback] = useState(false);

  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const pulseRef = useRef(0);
  const modeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance',
    });

    if (!gl) {
      setFallback(true);
      return;
    }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const vs = compile(gl.VERTEX_SHADER, PRISM_VS);
    const fs = compile(gl.FRAGMENT_SHADER, PRISM_FS);
    if (!vs || !fs) {
      setFallback(true);
      return;
    }

    const prog = gl.createProgram();
    if (!prog) {
      setFallback(true);
      return;
    }
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setFallback(true);
      return;
    }

    const vao = gl.createVertexArray();
    const vbo = gl.createBuffer();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uPulse = gl.getUniformLocation(prog, 'u_pulse');
    const uMode = gl.getUniformLocation(prog, 'u_mode');

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = performance.now();
    let rafId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(320, Math.floor(rect.width * dpr));
      const h = Math.max(240, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * 0.06;
      mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * 0.06;
      pulseRef.current *= 0.94;

      const t = reducedMotion ? 1.2 : (performance.now() - start) * 0.001;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(prog);
      gl.bindVertexArray(vao);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseCurrent.current.x, mouseCurrent.current.y);
      gl.uniform1f(uPulse, pulseRef.current);
      gl.uniform1f(uMode, modeRef.current);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      if (!reducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(vbo);
      gl.deleteVertexArray(vao);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouseTarget.current = { x: nx, y: ny };
  };

  const handleClick = () => {
    pulseRef.current = 1.0;
    modeRef.current = (modeRef.current + 1) % 6;
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onClick={handleClick}
      className={`relative w-full h-full cursor-crosshair select-none ${className}`}
      role="img"
      aria-label="Prisma tridimensional interativo em WebGL2 representando refração de sinais da Avaka Corporation"
    >
      {!fallback ? (
        <canvas ref={canvasRef} className="w-full h-full block" />
      ) : (
        <div
          className="w-full h-full cyber-grid"
          style={{
            background:
              'radial-gradient(circle at 68% 48%, rgba(0, 255, 65, 0.22), rgba(255, 23, 23, 0.08) 35%, #000000 72%)',
          }}
        />
      )}
    </div>
  );
};
