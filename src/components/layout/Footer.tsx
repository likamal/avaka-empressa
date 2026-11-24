import React from 'react';
import { ASSETS, DEMO_CONTACTS, INSTITUTIONAL } from '../../lib/avakaData';
import { NAV_CATEGORIES, RoutePath } from '../../lib/routes';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: RoutePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-[#003B00] bg-[#030403] text-[#c7d7cc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#003B00]/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-block"
              aria-label="Avaka Corporation — Voltar à página inicial"
            >
              <img
                src={ASSETS.logo}
                alt="Avaka Corporation"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-base font-medium text-white max-w-sm leading-relaxed">
              “{INSTITUTIONAL.sloganAlternative}”
            </p>
            <p className="text-xs text-[#8ea595] leading-relaxed max-w-sm">
              Fundada em 1916 em Whitechapel, Londres, com raízes brasileiras desde 1951. Da custódia física à proteção digital de infraestruturas críticas.
            </p>
            <div className="pt-2 space-y-1 font-technical text-xs text-[#7c9484]">
              <p>E-mail demonstrativo: {DEMO_CONTACTS.email}</p>
              <p>Telefone ilustrativo: {DEMO_CONTACTS.phone}</p>
              <p>Instagram demonstrativo: {DEMO_CONTACTS.instagram}</p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {NAV_CATEGORIES.map((category) => (
              <div key={category.id}>
                <h3 className="font-technical text-xs uppercase tracking-widest text-[#00FF41] mb-4">
                  {category.label}
                </h3>
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item.path}>
                      <a
                        href={item.path}
                        onClick={(e) => handleNav(e, item.path)}
                        className="text-xs text-[#9eb2a5] hover:text-[#00FF41] transition-colors leading-snug block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-[#7c9484]">
          <p className="max-w-3xl leading-relaxed">
            {INSTITUTIONAL.educationalNotice}
          </p>
          <div className="font-technical shrink-0 text-[#9eb2a5]">
            AVAKA CORPORATION · 1916–2026
          </div>
        </div>
      </div>
    </footer>
  );
};
