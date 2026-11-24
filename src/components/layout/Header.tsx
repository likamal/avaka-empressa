import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ASSETS } from '../../lib/avakaData';
import { NAV_CATEGORIES, RoutePath } from '../../lib/routes';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>('empresa');
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpenMenuId(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenuId(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const handleLinkClick = (path: RoutePath) => {
    setOpenMenuId(null);
    setMobileOpen(false);
    onNavigate(path);
  };

  const openDropdown = (id: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenuId(id);
  };

  const scheduleCloseDropdown = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenMenuId(null);
    }, 140);
  };

  const activeCategory = NAV_CATEGORIES.find((c) => c.id === openMenuId);

  return (
    <>
      {/* Fixed Floating Top Hub */}
      <div
        ref={wrapperRef}
        className="fixed top-3 sm:top-4 inset-x-3 sm:inset-x-6 lg:inset-x-8 z-50 pointer-events-none"
      >
        <header className="max-w-[1320px] mx-auto bg-black/88 backdrop-blur-md border border-[#003B00] shadow-[0_14px_40px_rgba(0,0,0,0.85)] pointer-events-auto">
          <div className="px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4 lg:gap-8">
            {/* Zone 1: Original Brand Logo */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
              }}
              className="flex items-center shrink-0 focus-visible:outline-[#00FF41]"
              aria-label="Avaka Corporation — Página Inicial"
            >
              <img
                src={ASSETS.logo}
                alt="Avaka Corporation"
                className="h-7 sm:h-9 w-auto object-contain select-none"
              />
            </a>

            {/* Zone 2: Single-line Primary Navigation Links */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-6"
            >
              {NAV_CATEGORIES.map((category) => {
                const isActiveSection = category.items.some((i) => i.path === currentPath);
                const isOpen = openMenuId === category.id;
                return (
                  <div
                    key={category.id}
                    className="relative"
                    onMouseEnter={() => openDropdown(category.id)}
                    onMouseLeave={scheduleCloseDropdown}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenMenuId(isOpen ? null : category.id)}
                      className={`inline-flex items-center gap-1.5 py-2 font-technical text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer border-b ${
                        isActiveSection || isOpen
                          ? 'text-[#00FF41] border-[#00FF41]'
                          : 'text-[#cde0d3] border-transparent hover:text-[#00FF41]'
                      }`}
                    >
                      <span>{category.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleLinkClick('/contato/consultoria')}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider hover:bg-[#33ff66] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Solicitar Consultoria
              </button>

              <button
                type="button"
                aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={mobileOpen}
                aria-controls="avaka-mobile-drawer"
                onClick={() => setMobileOpen((p) => !p)}
                className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 border border-[#003B00] bg-black/80 flex items-center justify-center text-[#00FF41] hover:border-[#00FF41] transition-colors cursor-pointer"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Desktop Mega Dropdown Panel (floating cleanly inside fixed hub wrapper) */}
          {activeCategory && (
            <div
              onMouseEnter={() => openDropdown(activeCategory.id)}
              onMouseLeave={scheduleCloseDropdown}
              className="hidden lg:block border-t border-[#003B00] bg-[#030504]/98"
            >
              <div className="px-8 py-8 grid grid-cols-12 gap-8">
                <div className="col-span-4 pr-6 border-r border-[#003B00]/80 flex flex-col justify-between">
                  <div>
                    <span className="font-technical text-xs uppercase tracking-widest text-[#ff1717]">
                      Divisão Institucional
                    </span>
                    <h2 className="text-2xl font-semibold text-white mt-2 mb-3">
                      {activeCategory.label}
                    </h2>
                    <p className="text-sm text-[#9eb2a5] leading-relaxed">
                      Explore as páginas técnicas e institucionais dedicadas a esta frente da Avaka Corporation.
                    </p>
                  </div>
                  <div className="pt-6 font-technical text-xs text-[#698371]">
                    Desde 1916 · Whitechapel → São Paulo
                  </div>
                </div>

                <div className="col-span-8 grid grid-cols-2 gap-3">
                  {activeCategory.items.map((item) => {
                    const isCurrent = currentPath === item.path;
                    return (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.path);
                        }}
                        className={`p-4 border transition-colors block ${
                          isCurrent
                            ? 'border-[#00FF41] bg-[#07140a]'
                            : 'border-[#003B00]/80 bg-black/60 hover:border-[#00FF41]/70 hover:bg-[#050c07]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-medium text-sm text-white">
                            {item.label}
                          </span>
                          {isCurrent && (
                            <span className="h-1.5 w-1.5 bg-[#00FF41]" aria-hidden="true" />
                          )}
                        </div>
                        <p className="text-xs text-[#95aa9c] leading-relaxed">
                          {item.description}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Mobile Full-Screen Navigation Drawer (rendered outside backdrop-blur parent so fixed inset-0 never collapses) */}
      {mobileOpen && (
        <div
          id="avaka-mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação móvel"
          className="lg:hidden fixed inset-0 z-40 bg-black/96 backdrop-blur-md pt-24 pb-12 px-4 overflow-y-auto"
        >
          <div className="max-w-lg mx-auto space-y-2.5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
              }}
              className={`block px-4 py-3.5 border font-technical text-xs uppercase tracking-wider ${
                currentPath === '/'
                  ? 'border-[#00FF41] text-[#00FF41] bg-[#071209]'
                  : 'border-[#003B00] bg-[#050505] text-white'
              }`}
            >
              Home
            </a>

            {NAV_CATEGORIES.map((category) => {
              const expanded = mobileExpanded === category.id;
              return (
                <div key={category.id} className="border border-[#003B00] bg-[#050505]">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileExpanded(expanded ? null : category.id)}
                    className="w-full px-4 py-3.5 flex items-center justify-between font-technical text-xs uppercase tracking-wider text-white cursor-pointer"
                  >
                    <span>{category.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00FF41] transition-transform ${
                        expanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expanded && (
                    <div className="border-t border-[#003B00]/80 bg-black p-2 space-y-1">
                      {category.items.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.path);
                          }}
                          className={`block px-3 py-3 text-sm transition-colors ${
                            currentPath === item.path
                              ? 'text-[#00FF41] bg-[#071209]'
                              : 'text-[#c7d7cc] hover:text-[#00FF41]'
                          }`}
                        >
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-[#7d9585] mt-0.5">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-3">
              <button
                type="button"
                onClick={() => handleLinkClick('/contato/consultoria')}
                className="w-full py-3.5 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Solicitar Consultoria
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
