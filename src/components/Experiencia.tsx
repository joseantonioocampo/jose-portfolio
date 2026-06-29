type Exp = {
  range: string;
  title: string;
  company: string;
  meta: string;
  body: string;
};

const items: Exp[] = [
  {
    range: '2026 — Hoy',
    title: 'AI Engineer · Advisory Associate',
    company: 'PwC Acceleration Centers',
    meta: 'CDMX · Híbrido',
    body:
      'AI Engineer en CT&I, construyendo soluciones de inteligencia artificial a escala global y colaborando con equipos en Shanghái y Asia dentro de una de las Big Four.'
  },
  {
    range: '2025 — Hoy',
    title: 'CEO & Co-Founder',
    company: 'JOYU',
    meta: 'Cuernavaca',
    body:
      'Mi propia empresa: manufactura de MDF, llevando producto, operación y visión de negocio de cero a mercado.'
  },
  {
    range: '2026 — Hoy',
    title: 'Profesor de Cátedra',
    company: 'Universidad Tecmilenio',
    meta: 'Cuernavaca',
    body:
      'Comparto con la siguiente generación lo aprendido en IA, tecnología y emprendimiento.'
  },
  {
    range: '2023 — 2025',
    title: 'Director of Development Applications',
    company: 'Innovation Advisory Consulting',
    meta: 'Power Platform · Azure AI · LLMs',
    body:
      'De AI & Power Platform Developer (Sacramento, CA) a Director de Desarrollo: definí estrategia técnica y lideré el primer chatbot de IA del sector público en CalHR, el CRM Pravia para CalOES, el asistente de IA del CCHCS y la iniciativa Agent & AI Realtime para la Governor\'s Office.'
  },
  {
    range: '2021 — 2023',
    title: 'Developer',
    company: 'Digital NAO',
    meta: 'Monterrey',
    body:
      'Proyectos de innovación y automatización en TI: generación de certificados, chatbots y mejoras de producto para elevar la eficiencia.'
  }
];

const capacidades = [
  {
    label: 'IA & GenAI',
    chips: ['Azure OpenAI', 'Azure AI Search', 'Copilot Studio', 'LLMs · Agentes', 'Visión computarizada']
  },
  {
    label: 'Microsoft Power Platform',
    chips: ['Power Apps', 'Power Automate', 'Power Pages', 'Dataverse', 'Power BI']
  },
  {
    label: 'Full Stack & Cloud',
    chips: ['React.js', 'Python', 'Azure Functions', 'Azure DevOps', 'GitHub Actions']
  }
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4 reveal">Experiencia</div>
        <h2 className="h2 reveal" style={{ marginBottom: 48 }}>
          Dónde he construido
        </h2>
        <div style={{ maxWidth: 840 }}>
          {items.map((e, i) => (
            <div
              key={e.title + e.company}
              className="card app-reveal"
              style={{ padding: '26px 28px', marginBottom: 14, transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex justify-between flex-wrap gap-3" style={{ alignItems: 'baseline' }}>
                <div>
                  <span className="tag">{e.range}</span>
                  <h3 className="serif" style={{ fontSize: 23, margin: '8px 0 2px' }}>
                    {e.title}
                  </h3>
                  <div className="acc" style={{ fontWeight: 600 }}>
                    {e.company}
                  </div>
                </div>
                <span className="metric hidesm">{e.meta}</span>
              </div>
              <p className="muted" style={{ margin: '14px 0 0' }}>
                {e.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <div className="tag reveal" style={{ marginBottom: 18 }}>
            Capacidades
          </div>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
          >
            {capacidades.map((c, i) => (
              <div key={c.label} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="serif" style={{ fontSize: 18, marginBottom: 12 }}>
                  {c.label}
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  {c.chips.map((ch) => (
                    <span key={ch} className="chip">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
