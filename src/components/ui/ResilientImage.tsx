import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface ResilientImageProps {
  src?: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  className?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  caption,
  aspectClass = 'aspect-video',
  className = '',
}) => {
  const [failed, setFailed] = useState(!src);

  return (
    <figure className={`w-full ${className}`}>
      <div
        className={`relative w-full overflow-hidden border border-[#003B00] bg-[#050505] ${aspectClass}`}
      >
        {!failed && src ? (
          <>
            <img
              src={src}
              alt={alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setFailed(true)}
              className="w-full h-full object-cover transition-transform duration-500 ease-out"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20"
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="w-full h-full cyber-grid flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#020804] via-black to-[#090202]">
            <Shield className="w-8 h-8 text-[#00FF41]/70 mb-3" strokeWidth={1.5} />
            <p className="font-technical text-xs text-[#00FF41]/80 uppercase tracking-widest">
              {alt}
            </p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 font-technical text-xs text-[#8aa392] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
