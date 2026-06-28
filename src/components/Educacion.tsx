const certificados = [
  'AWS · AI Use Cases',
  'AWS · ML & AI Fundamentals',
  'Microsoft Power Platform App Maker Associate',
  'Lean Six Sigma Green Belt',
  'Six Sigma Yellow Belt',
  'EF SET English · B2',
  'Google · Project Initiation',
  'Java · LinkedIn'
];

export default function Educacion() {
  return (
    <section id="educacion" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4">Educación</div>
        <h2 className="h2" style={{ marginBottom: 48 }}>
          Formación
        </h2>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <div className="card" style={{ padding: 28 }}>
            <span className="tag">2026 — Actualidad</span>
            <h3 className="serif" style={{ fontSize: 23, margin: '10px 0 4px' }}>
              Maestría en Business Analytics
            </h3>
            <div className="acc" style={{ fontWeight: 600, marginBottom: 10 }}>
              EGADE Business School · Tec de Monterrey
            </div>
            <p className="muted" style={{ margin: 0 }}>
              Negocio + datos: del modelo analítico a la decisión de alto impacto.
            </p>
          </div>
          <div className="card" style={{ padding: 28 }}>
            <span className="tag">2020 — 2024</span>
            <h3 className="serif" style={{ fontSize: 23, margin: '10px 0 4px' }}>
              Ing. en Mecatrónica, Robótica y Electrónica
            </h3>
            <div className="acc" style={{ fontWeight: 600, marginBottom: 10 }}>
              Universidad Tecmilenio
            </div>
            <p className="muted" style={{ margin: 0 }}>
              Valedictorian · Lean Six Sigma Green Belt · Becario por propósito (2.ª
              generación) · Enactus México.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 44 }}>
          <div className="flex items-center gap-3" style={{ marginBottom: 14 }}>
            <span className="tag">Certificaciones</span>
            <span className="metric">16 en total</span>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {certificados.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}>
          <div className="tag" style={{ marginBottom: 14 }}>
            Idiomas
          </div>
          <div className="flex flex-wrap gap-[10px]">
            <span className="chip">Español · Nativo</span>
            <span className="chip">Inglés · Competencia profesional (B2)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
