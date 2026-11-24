import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, AlertCircle } from 'lucide-react';
import { DEMO_CONTACTS, INSTITUTIONAL } from '../lib/avakaData';
import { RoutePath } from '../lib/routes';
import { PageBanner } from '../components/layout/PageBanner';

interface ContatoPageProps {
  onNavigate: (path: RoutePath) => void;
}

/* ============================================================================
   1. CONTATO INSTITUCIONAL
============================================================================ */
export const ContatoInstitucionalPage: React.FC<ContatoPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Contato"
        title="Contato Institucional"
        subtitle="Localizações conceituais da Sede Corporativa e do Complexo Tecnológico Serra de Âmbar no universo narrativo da Avaka."
        preset="obsidian-matrix"
        notice="Todos os endereços e canais abaixo são dados fictícios e demonstrativos."
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#003B00] bg-[#050505] p-8 space-y-4">
            <div className="flex items-center gap-2 font-technical text-xs uppercase tracking-widest text-[#00FF41]">
              <MapPin className="w-4 h-4 text-[#ff1717]" />
              <span>Sede Administrativa Conceitual</span>
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Distrito Empresarial Horizonte Verde
            </h2>
            <p className="text-sm text-[#c7d7cc] leading-relaxed">
              São Paulo, SP — Brasil. Abriga a diretoria executiva, pesquisa e desenvolvimento, engenharia de software e salas de treinamento.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('/infraestrutura/sede-corporativa')}
              className="font-technical text-xs text-[#00FF41] uppercase tracking-wider hover:underline cursor-pointer"
            >
              Conhecer a Sede Corporativa →
            </button>
          </div>

          <div className="border border-[#003B00] bg-[#050505] p-8 space-y-4">
            <div className="flex items-center gap-2 font-technical text-xs uppercase tracking-widest text-[#00FF41]">
              <MapPin className="w-4 h-4 text-[#ff1717]" />
              <span>Campus de Dados Conceitual</span>
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Complexo Tecnológico Serra de Âmbar
            </h2>
            <p className="text-sm text-[#c7d7cc] leading-relaxed">
              Santa Aurora do Vale, SP — Brasil. Estrutura fictícia de data centers redundantes, subestações elétricas e custódia digital.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('/infraestrutura/serra-de-ambar')}
              className="font-technical text-xs text-[#00FF41] uppercase tracking-wider hover:underline cursor-pointer"
            >
              Conhecer Serra de Âmbar →
            </button>
          </div>
        </div>

        <div className="border border-[#003B00] bg-[#050505] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Deseja simular uma solicitação de avaliação técnica?
            </h3>
            <p className="text-sm text-[#9eb2a5]">
              Utilize nosso formulário demonstrativo com validação em tempo real.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/contato/consultoria')}
            className="px-6 py-3 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider hover:bg-[#33ff66] transition-colors shrink-0 cursor-pointer"
          >
            Ir para Solicitar Consultoria
          </button>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   2. SOLICITAR CONSULTORIA (FORMULÁRIO VISUAL VALIDADO SEM ENVIO REAL)
============================================================================ */
export const SolicitarConsultoriaPage: React.FC<ContatoPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [segment, setSegment] = useState('Cybersecurity Corporativa');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Informe um nome válido para a simulação.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail em formato válido.';
    }
    if (subject.trim().length < 3) {
      nextErrors.subject = 'Informe o assunto técnico desejado.';
    }
    if (message.trim().length < 10) {
      nextErrors.message = 'Descreva brevemente o contexto (mínimo de 10 caracteres).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Contato"
        title="Solicitar Consultoria"
        subtitle="Formulário demonstrativo de triagem para arquitetura defensiva, auditoria técnica e proteção de infraestruturas críticas."
        preset="emerald-ridge"
        notice="Demonstração visual sem envio para servidor externo: nenhum dado pessoal é transmitido ou armazenado."
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#003B00] bg-[#050505] p-7 space-y-4">
              <span className="font-technical text-xs uppercase tracking-widest text-[#00FF41]">
                Escopo Personalizado
              </span>
              <h2 className="text-2xl font-semibold text-white">
                Atendimento Técnico Sob Medida
              </h2>
              <p className="text-sm text-[#c7d7cc] leading-relaxed">
                Cada ambiente corporativo, aeroportuário, portuário ou de custódia possui dependências próprias. Por diretriz do projeto, não há planos fechados nem tabelas comerciais.
              </p>
              <p className="text-xs font-technical text-[#8ea595] pt-3 border-t border-[#003B00]">
                {INSTITUTIONAL.educationalNotice}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 border border-[#003B00] bg-[#050505] p-7 sm:p-10">
            {submitted ? (
              <div className="py-10 space-y-5">
                <div className="flex items-center gap-3 text-[#00FF41]">
                  <CheckCircle2 className="w-7 h-7" />
                  <h3 className="text-2xl font-semibold text-white">
                    Validação Visual Concluída (Demonstração)
                  </h3>
                </div>
                <p className="text-sm text-[#c7d7cc] leading-relaxed">
                  Os campos foram validados localmente na interface. Como este portal é um projeto conceitual/educacional sem servidor de atendimento ativo, nenhuma mensagem foi enviada externamente.
                </p>
                <div className="border border-[#003B00] bg-black p-4 font-technical text-xs text-[#9fb5a6] space-y-1">
                  <p>Segmento selecionado: {segment}</p>
                  <p>Assunto informado: {subject}</p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 border border-[#00FF41] text-[#00FF41] font-technical text-xs uppercase tracking-wider hover:bg-[#00FF41] hover:text-black transition-colors cursor-pointer"
                >
                  Realizar Nova Simulação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="avaka-name" className="block font-technical text-xs uppercase text-[#00FF41] mb-2">
                      Nome Completo
                    </label>
                    <input
                      id="avaka-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex.: Mariana Silva"
                      className="w-full px-4 py-3 bg-black border border-[#003B00] text-white text-sm focus:border-[#00FF41] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#ff4d4d]">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="avaka-email" className="block font-technical text-xs uppercase text-[#00FF41] mb-2">
                      E-mail Corporativo
                    </label>
                    <input
                      id="avaka-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@organizacao.example"
                      className="w-full px-4 py-3 bg-black border border-[#003B00] text-white text-sm focus:border-[#00FF41] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#ff4d4d]">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="avaka-segment" className="block font-technical text-xs uppercase text-[#00FF41] mb-2">
                      Frente de Atuação
                    </label>
                    <select
                      id="avaka-segment"
                      value={segment}
                      onChange={(e) => setSegment(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-[#003B00] text-white text-sm focus:border-[#00FF41] focus:outline-none"
                    >
                      <option>Cybersecurity Corporativa</option>
                      <option>Aviation Security</option>
                      <option>Maritime Security</option>
                      <option>Data Infrastructure</option>
                      <option>Incident Response & SOC</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="avaka-subject" className="block font-technical text-xs uppercase text-[#00FF41] mb-2">
                      Assunto
                    </label>
                    <input
                      id="avaka-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Ex.: Avaliação de segmentação"
                      className="w-full px-4 py-3 bg-black border border-[#003B00] text-white text-sm focus:border-[#00FF41] focus:outline-none"
                    />
                    {errors.subject && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#ff4d4d]">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="avaka-message" className="block font-technical text-xs uppercase text-[#00FF41] mb-2">
                    Contexto Técnico
                  </label>
                  <textarea
                    id="avaka-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva o cenário conceitual ou infraestrutura a ser avaliada..."
                    className="w-full px-4 py-3 bg-black border border-[#003B00] text-white text-sm focus:border-[#00FF41] focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#ff4d4d]">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#00FF41] text-black font-technical text-xs font-semibold uppercase tracking-wider hover:bg-[#33ff66] transition-colors cursor-pointer"
                >
                  Validar Solicitação Demonstrativa
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   3. CANAIS DE ATENDIMENTO (DIRETÓRIO DEMONSTRATIVO .EXAMPLE)
============================================================================ */
export const CanaisAtendimentoPage: React.FC<ContatoPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black text-[#e6efe8]">
      <PageBanner
        section="Contato"
        title="Canais de Atendimento"
        subtitle="Canais ilustrativos constantes no dossiê conceitual da Avaka Corporation. O domínio .example é reservado para demonstração e não representa atendimento ativo."
        preset="maritime-sonar"
        onNavigate={onNavigate}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Mail,
              label: 'E-mail Ilustrativo',
              value: DEMO_CONTACTS.email,
              note: 'Domínio reservado .example (não ativo)',
            },
            {
              icon: Phone,
              label: 'Telefone Ilustrativo',
              value: DEMO_CONTACTS.phone,
              note: 'Ramal simbólico alusivo a 1916 (não ativo)',
            },
            {
              icon: MapPin,
              label: 'Portal Conceitual',
              value: DEMO_CONTACTS.website,
              note: 'Endereço demonstrativo do dossiê',
            },
            {
              icon: MapPin,
              label: 'Perfil Demonstrativo',
              value: DEMO_CONTACTS.instagram,
              note: 'Identificador visual do projeto',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="border border-[#003B00] bg-[#050505] p-6 space-y-3">
                <Icon className="w-5 h-5 text-[#00FF41]" />
                <span className="font-technical text-xs uppercase text-[#8ea595] block">
                  {item.label}
                </span>
                <p className="text-base font-medium text-white break-all">{item.value}</p>
                <p className="text-xs text-[#7c9484]">{item.note}</p>
              </div>
            );
          })}
        </div>

        <div className="border border-[#003B00] bg-[#050505] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#b7c9bd] max-w-2xl">
            {INSTITUTIONAL.educationalNotice}
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/contato/consultoria')}
            className="px-5 py-2.5 border border-[#00FF41] text-[#00FF41] font-technical text-xs uppercase tracking-wider hover:bg-[#00FF41] hover:text-black transition-colors shrink-0 cursor-pointer"
          >
            Testar Formulário Demonstrativo
          </button>
        </div>
      </div>
    </div>
  );
};
