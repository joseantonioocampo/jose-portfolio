const stats = [
  { num: '$1.5', suffix: 'M', label: 'Inversión aprox. de Microsoft en InnAdvisory' },
  { num: '80', suffix: '%', label: 'Consultas resueltas por Benie sin humanos' },
  { num: '11', suffix: '/14K', label: 'Seleccionado para el TrepCamp en Nueva York' },
  { num: '16', suffix: '', label: 'Certificaciones profesionales (AWS, Microsoft…)' }
];

const reconocimientos = [
  'Valedictorian · Ing. Mecatrónica',
  'Halcón de Oro en Arte y Cultura · Tecmilenio',
  '2.º lugar · Be Preneur Challenge (Finalista Nacional)',
  'Iberorquestas Juveniles · 1 de 11 representantes de México'
];

const prensa = [
  'Tecmilenio — IA y emprendimiento',
  'LinkedIn — De Cuernavaca a Nueva York',
  'PLAYERS of Life',
  'Conecta · Tec de Monterrey'
];

export default function Logros() {
  return (
    <section id="logros" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4">Logros</div>
        <h2 className="h2" style={{ marginBottom: 48 }}>
          Hitos que valieron la pena
        </h2>
        <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                padding: '30px 22px',
                border: '1px solid #E5E0D4',
                borderRadius: 14,
                background: '#FBFAF4'
              }}
            >
              <div
                className="serif"
                style={{
                  fontSize: 'clamp(38px, 4.4vw, 56px)',
                  lineHeight: 1,
                  color: '#28261F'
                }}
              >
                <em className="acc" style={{ fontStyle: 'normal' }}>
                  {s.num}
                </em>
                {s.suffix}
              </div>
              <div className="muted" style={{ fontSize: 14, marginTop: 12, lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 44 }}>
          <div className="tag" style={{ marginBottom: 14 }}>
            Reconocimientos
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {reconocimientos.map((r) => (
              <span key={r} className="chip">
                <span className="acc">★</span> {r}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}>
          <div className="tag" style={{ marginBottom: 14 }}>
            En prensa
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {prensa.map((p) => (
              <span key={p} className="chip">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
