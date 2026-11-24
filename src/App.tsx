import { useCallback, useEffect, useState } from 'react';
import { isValidRoute, ROUTE_META, RoutePath } from './lib/routes';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import {
  HistoriaLegacyPage,
  InstitucionalPage,
  LiderancaGovernancaPage,
  MissaoVisaoValoresPage,
} from './pages/EmpresaPages';
import { SolucoesPage } from './pages/SolucoesPage';
import {
  CentroOperacoesSocPage,
  SedeCorporativaPage,
  SerraAmbarPage,
} from './pages/InfraestruturaPage';
import {
  AmeacasEmergentesPage,
  AnalisesSegurancaPage,
  PesquisaTecnologiaPage,
  RelatoriosPublicacoesPage,
} from './pages/IntelligencePage';
import {
  CanaisAtendimentoPage,
  ContatoInstitucionalPage,
  SolicitarConsultoriaPage,
} from './pages/ContatoPage';

function getInitialRoute(): RoutePath {
  if (typeof window === 'undefined') return '/';
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  return isValidRoute(pathname) ? pathname : '/';
}

export function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(getInitialRoute);

  const navigate = useCallback((path: RoutePath) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const next = window.location.pathname.replace(/\/+$/, '') || '/';
      setCurrentPath(isValidRoute(next) ? next : '/');
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = ROUTE_META[currentPath] ?? ROUTE_META['/'];
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    }
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigate} />;
      case '/empresa/historia':
        return <HistoriaLegacyPage onNavigate={navigate} />;
      case '/empresa/institucional':
        return <InstitucionalPage onNavigate={navigate} />;
      case '/empresa/missao-visao-valores':
        return <MissaoVisaoValoresPage onNavigate={navigate} />;
      case '/empresa/lideranca-governanca':
        return <LiderancaGovernancaPage onNavigate={navigate} />;
      case '/solucoes/cybersecurity-corporativa':
        return <SolucoesPage slug="cybersecurity-corporativa" onNavigate={navigate} />;
      case '/solucoes/aviation-security':
        return <SolucoesPage slug="aviation-security" onNavigate={navigate} />;
      case '/solucoes/maritime-security':
        return <SolucoesPage slug="maritime-security" onNavigate={navigate} />;
      case '/solucoes/data-infrastructure':
        return <SolucoesPage slug="data-infrastructure" onNavigate={navigate} />;
      case '/solucoes/incident-response-soc':
        return <SolucoesPage slug="incident-response-soc" onNavigate={navigate} />;
      case '/infraestrutura/serra-de-ambar':
        return <SerraAmbarPage onNavigate={navigate} />;
      case '/infraestrutura/sede-corporativa':
        return <SedeCorporativaPage onNavigate={navigate} />;
      case '/infraestrutura/centro-operacoes-soc':
        return <CentroOperacoesSocPage onNavigate={navigate} />;
      case '/intelligence/relatorios-publicacoes':
        return <RelatoriosPublicacoesPage onNavigate={navigate} />;
      case '/intelligence/ameacas-emergentes':
        return <AmeacasEmergentesPage onNavigate={navigate} />;
      case '/intelligence/analises-seguranca':
        return <AnalisesSegurancaPage onNavigate={navigate} />;
      case '/intelligence/pesquisa-tecnologia':
        return <PesquisaTecnologiaPage onNavigate={navigate} />;
      case '/contato/institucional':
        return <ContatoInstitucionalPage onNavigate={navigate} />;
      case '/contato/consultoria':
        return <SolicitarConsultoriaPage onNavigate={navigate} />;
      case '/contato/canais':
        return <CanaisAtendimentoPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-[#e6efe8]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00FF41] focus:text-black focus:font-technical focus:text-xs"
      >
        Pular para o conteúdo principal
      </a>

      <Header currentPath={currentPath} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
