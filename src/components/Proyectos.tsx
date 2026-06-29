import Placeholder from './Placeholder';

const otrosProyectos = [
  {
    title: 'Pravia CRM — CalOES (CALSIC)',
    desc:
      'CRM inteligente de ciberseguridad que automatizó ~60% de los flujos de incidentes, con Power Apps, Dataverse, Power Automate, Power Pages, ArcGIS y Azure OpenAI. Diseñé el CI/CD con Azure DevOps y GitHub Actions.',
    tag: 'Power Platform'
  },
  {
    title: 'Bochón × ESPN — IA en vivo',
    desc:
      'IA aplicada a transmisiones deportivas en vivo: estadísticas para los espectadores en menos de 2 segundos, al aire junto a los locutores.',
    tag: 'Realtime AI · Media'
  },
  {
    title: 'CCHCS AI Assistant',
    desc:
      'Asistente médico con Azure OpenAI, Azure AI Search, React.js (frontend) y Python (backend).',
    tag: 'GenAI · Full Stack'
  },
  {
    title: "Agent & AI Realtime — Governor's Office",
    desc:
      'Iniciativa de agente conversacional en tiempo real para la Office of Land Use & Climate Innovation. Contrato adjudicado.',
    tag: 'Realtime AI'
  },
  {
    title: 'Santa Barbara County — POC',
    desc:
      'Prueba de concepto con Copilot Studio, ArcGIS, Azure Functions y Python. Powered by Microsoft — contrato adjudicado.',
    tag: 'Copilot Studio'
  }
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="sec">
      <div className="wrap">
        <div
          className="flex items-center justify-between flex-wrap gap-4 reveal"
          style={{ marginBottom: 48 }}
        >
          <div>
            <div className="eyebrow mb-4">Proyectos</div>
            <h2 className="h2">Trabajo seleccionado</h2>
          </div>
          <p className="muted" style={{ maxWidth: 340, margin: 0 }}>
            GenAI, Azure AI y Power Platform para el sector público de EE. UU.
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <article className="card flex flex-col reveal" style={{ padding: 26 }}>
            <Placeholder
              label="Captura de Benie / CalHR"
              style={{ width: '100%', height: 188, marginBottom: 22 }}
            />
            <div className="tag" style={{ marginBottom: 12 }}>
              GenAI · Azure OpenAI · Sector público
            </div>
            <h3 className="h2" style={{ fontSize: 28, marginBottom: 10 }}>
              Benie the Bot — CalHR
            </h3>
            <p className="muted" style={{ margin: '0 0 12px' }}>
              El primer chatbot de IA del sector público de California, sobre Azure AI
              Search, Azure OpenAI y Copilot Studio. Resuelve más del 80% de las
              consultas sin intervención humana.
            </p>
            <a
              href="https://benefits.calhr.ca.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="lk"
            >
              benefits.calhr.ca.gov ↗
            </a>
            <div className="flex gap-[10px] flex-wrap" style={{ marginTop: 'auto', paddingTop: 22 }}>
              <span className="metric">80% auto-resuelto</span>
              <span className="metric">Azure OpenAI</span>
              <span className="metric">En producción</span>
            </div>
          </article>

          <article className="card flex flex-col reveal" style={{ padding: 26, transitionDelay: '100ms' }}>
            <Placeholder
              label="Foto del TrepCamp NYC"
              src="/NYC.JPEG"
              style={{ width: '100%', height: 188, marginBottom: 22 }}
            />
            <div className="tag" style={{ marginBottom: 12 }}>
              Entrepreneurship · Recognition
            </div>
            <h3 className="h2" style={{ fontSize: 28, marginBottom: 10 }}>
              TrepCamp — Nueva York
            </h3>
            <p className="muted" style={{ margin: 0 }}>
              Seleccionado entre 14,000 candidatos como 1 de 11 para una experiencia
              empresarial en NYC. Mentoría de CEOs, empresarios y profesores de
              Stanford, Harvard y Manhattan College.
            </p>
            <div className="flex gap-[10px] flex-wrap" style={{ marginTop: 'auto', paddingTop: 22 }}>
              <span className="metric">1 / 11</span>
              <span className="metric">14,000 candidatos</span>
              <span className="metric">2024</span>
            </div>
          </article>
        </div>

        <div style={{ marginTop: 48 }}>
          <div className="tag" style={{ marginBottom: 8 }}>
            Más proyectos de sector público · Innovation Advisory
          </div>
          {otrosProyectos.map((p, i) => (
            <div
              key={p.title}
              className="flex justify-between items-baseline gap-6 reveal"
              style={{ padding: '22px 4px', borderTop: '1px solid #E5E0D4', transitionDelay: `${i * 60}ms` }}
            >
              <div>
                <div className="serif" style={{ fontSize: 20 }}>
                  {p.title}
                </div>
                <div className="muted" style={{ fontSize: 14, marginTop: 4 }}>
                  {p.desc}
                </div>
              </div>
              <span className="tag hidesm">{p.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
