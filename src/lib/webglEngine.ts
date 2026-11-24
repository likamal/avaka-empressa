export type LandscapePreset =
  | 'emerald-ridge'
  | 'aviation-vector'
  | 'maritime-sonar'
  | 'obsidian-matrix'
  | 'amber-vault';

interface RenderJob {
  canvas: HTMLCanvasElement;
  preset: LandscapePreset;
  speed: number;
  hoverIntensity: number;
  timeOffset: number;
}

const PRESET_IDS: Record<LandscapePreset, number> = {
  'emerald-ridge': 0,
  'aviation-vector': 1,
  'maritime-sonar': 2,
  'obsidian-matrix': 3,
  'amber-vault': 4,
};

const VERTEX_SHADER_SRC = `#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAGMENT_SHADER_SRC = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform float u_time;
uniform vec2 u_res;
uniform int u_preset;
uniform float u_hover;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = rot * p * 2.05;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = v_uv;
  float aspect = u_res.x / max(1.0, u_res.y);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  vec3 green = vec3(0.0, 1.0, 0.255);
  vec3 deepGreen = vec3(0.0, 0.23, 0.04);
  vec3 redAccent = vec3(1.0, 0.09, 0.09);
  vec3 col = vec3(0.01, 0.014, 0.012);

  float t = u_time * (0.35 + u_hover * 0.45);

  if (u_preset == 0) {
    // Emerald ridge cyber topography
    float horizon = 0.52;
    float y = uv.y;
    for (int i = 0; i < 7; i++) {
      float fi = float(i);
      float z = 0.12 + fi * 0.09;
      float n = fbm(vec2(p.x * (1.8 + fi * 0.35) + t * (0.12 + fi * 0.03), fi * 3.1));
      float ridge = horizon - fi * 0.055 + (n - 0.5) * 0.18;
      float line = exp(-abs(y - ridge) * (130.0 - fi * 8.0));
      float fill = smoothstep(ridge + 0.004, ridge - 0.012, y);
      col = mix(col, deepGreen * (0.28 + 0.06 * fi), fill * 0.45);
      col += green * line * (0.32 + u_hover * 0.35);
      if (i == 2) {
        float redPulse = exp(-abs(p.x - sin(t * 0.7) * 0.45) * 8.0) * line;
        col += redAccent * redPulse * 0.9;
      }
    }
  } else if (u_preset == 1) {
    // Aviation vector: perspective flight corridors & trajectory arcs
    vec2 g = p * vec2(1.4, 2.2);
    float arc1 = exp(-abs(length(p - vec2(-0.35, -0.35)) - (0.55 + 0.03 * sin(t))) * 65.0);
    float arc2 = exp(-abs(length(p - vec2(0.4, -0.45)) - (0.72 + 0.03 * cos(t * 0.8))) * 55.0);
    float scan = exp(-abs(p.y - (fract(t * 0.2) - 0.5)) * 45.0);
    float gridX = smoothstep(0.96, 1.0, cos(g.x * 18.0));
    float gridY = smoothstep(0.96, 1.0, cos(g.y * 18.0 - t * 2.0));
    col += deepGreen * (gridX + gridY) * 0.35;
    col += green * (arc1 * 0.85 + scan * 0.25) * (0.65 + u_hover * 0.5);
    col += redAccent * arc2 * 0.65;
  } else if (u_preset == 2) {
    // Maritime sonar & oceanic bathymetry waves
    float wave = 0.0;
    for (int i = 0; i < 6; i++) {
      float fi = float(i);
      float w = sin(p.x * (4.0 + fi) + t * (0.8 + fi * 0.15) + fbm(p * 2.0 + fi) * 2.5);
      float yLine = (fi - 2.5) * 0.12 + w * 0.045;
      wave += exp(-abs(p.y - yLine) * 80.0);
    }
    float ping = exp(-abs(length(p) - fract(t * 0.28) * 1.1) * 42.0) * (1.0 - fract(t * 0.28));
    col += deepGreen * 0.35;
    col += green * wave * (0.35 + u_hover * 0.35);
    col += green * ping * 0.85;
    col += redAccent * exp(-length(p) * 16.0) * 0.7;
  } else if (u_preset == 3) {
    // Obsidian matrix / structural lattice
    vec2 cell = fract(p * 8.0 + vec2(0.0, t * 0.25)) - 0.5;
    vec2 id = floor(p * 8.0 + vec2(0.0, t * 0.25));
    float rnd = hash(id);
    float box = max(abs(cell.x), abs(cell.y));
    float edge = smoothstep(0.44, 0.48, box);
    float activeCell = step(0.86 - u_hover * 0.12, fract(rnd + floor(t * 1.5) * 0.13));
    col += deepGreen * edge * 0.45;
    col += green * activeCell * smoothstep(0.35, 0.1, box) * 0.45;
    if (rnd > 0.96) {
      col += redAccent * smoothstep(0.35, 0.05, box) * 0.55;
    }
  } else {
    // Amber / Vault architectural monoliths & gold-emerald data strata
    float n = fbm(p * 2.4 + vec2(t * 0.08, -t * 0.04));
    float strata = smoothstep(0.45, 0.55, fract(n * 8.0));
    float vert = smoothstep(0.95, 1.0, cos(p.x * 24.0));
    col += deepGreen * strata * 0.45;
    col += green * vert * (0.22 + u_hover * 0.35);
    col += vec3(0.65, 0.42, 0.08) * exp(-abs(n - 0.52) * 18.0) * 0.32;
    col += redAccent * exp(-abs(p.y + 0.18) * 65.0) * 0.4;
  }

  // Subtle vignette
  float vig = smoothstep(1.25, 0.25, length(p));
  col *= vig;

  outColor = vec4(col, 1.0);
}`;

class SharedWebGL2LandscapePool {
  private offscreen: HTMLCanvasElement | null = null;
  private gl: WebGL2RenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private vao: WebGLVertexArrayObject | null = null;
  private jobs = new Map<HTMLCanvasElement, RenderJob>();
  private rafId: number | null = null;
  private startTime = performance.now();
  private supported = true;

  private ensureContext(): boolean {
    if (!this.supported) return false;
    if (this.gl && this.program) return true;
    if (typeof document === 'undefined') return false;

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      powerPreference: 'low-power',
    });

    if (!gl) {
      this.supported = false;
      return false;
    }

    const vs = this.compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
    const fs = this.compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);
    if (!vs || !fs) {
      this.supported = false;
      return false;
    }

    const program = gl.createProgram();
    if (!program) {
      this.supported = false;
      return false;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      this.supported = false;
      return false;
    }

    const vao = gl.createVertexArray();
    const buf = gl.createBuffer();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    this.offscreen = canvas;
    this.gl = gl;
    this.program = program;
    this.vao = vao;
    return true;
  }

  private compileShader(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader | null {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  public register(
    canvas: HTMLCanvasElement,
    preset: LandscapePreset,
    speed = 1,
    timeOffset = 0
  ): boolean {
    if (!this.ensureContext()) return false;
    this.jobs.set(canvas, {
      canvas,
      preset,
      speed,
      hoverIntensity: 0,
      timeOffset,
    });
    this.startLoop();
    return true;
  }

  public updateHover(canvas: HTMLCanvasElement, hoverIntensity: number) {
    const job = this.jobs.get(canvas);
    if (job) {
      job.hoverIntensity = hoverIntensity;
    }
  }

  public unregister(canvas: HTMLCanvasElement) {
    this.jobs.delete(canvas);
    if (this.jobs.size === 0 && this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private startLoop() {
    if (this.rafId !== null) return;
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tick = () => {
      this.renderAll(reducedMotion);
      if (this.jobs.size > 0 && !reducedMotion) {
        this.rafId = requestAnimationFrame(tick);
      } else {
        this.rafId = null;
      }
    };

    if (reducedMotion) {
      this.renderAll(true);
    } else {
      this.rafId = requestAnimationFrame(tick);
    }
  }

  private renderAll(reducedMotion: boolean) {
    const gl = this.gl;
    const program = this.program;
    const offscreen = this.offscreen;
    if (!gl || !program || !offscreen) return;

    const elapsed = reducedMotion ? 1.5 : (performance.now() - this.startTime) * 0.001;
    gl.useProgram(program);
    gl.bindVertexArray(this.vao);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_res');
    const uPreset = gl.getUniformLocation(program, 'u_preset');
    const uHover = gl.getUniformLocation(program, 'u_hover');

    for (const job of this.jobs.values()) {
      const rect = job.canvas.getBoundingClientRect();
      // Skip offscreen elements for performance
      if (rect.bottom < -120 || rect.top > window.innerHeight + 120 || rect.width === 0) {
        continue;
      }

      const targetW = Math.min(512, Math.max(240, Math.floor(rect.width * 0.75)));
      const targetH = Math.min(340, Math.max(160, Math.floor(rect.height * 0.75)));

      if (offscreen.width !== targetW || offscreen.height !== targetH) {
        offscreen.width = targetW;
        offscreen.height = targetH;
      }
      if (job.canvas.width !== targetW || job.canvas.height !== targetH) {
        job.canvas.width = targetW;
        job.canvas.height = targetH;
      }

      gl.viewport(0, 0, targetW, targetH);
      gl.uniform1f(uTime, elapsed * job.speed + job.timeOffset);
      gl.uniform2f(uRes, targetW, targetH);
      gl.uniform1i(uPreset, PRESET_IDS[job.preset]);
      gl.uniform1f(uHover, job.hoverIntensity);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      const ctx2d = job.canvas.getContext('2d');
      if (ctx2d) {
        ctx2d.drawImage(offscreen, 0, 0, targetW, targetH);
      }
    }
  }
}

export const sharedLandscapePool = new SharedWebGL2LandscapePool();
