import CountUp from './CountUp';

type Stat = { value: number; prefix?: string; decimals?: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 1.5, prefix: '$', decimals: 1, suffix: 'M', label: 'Inversión aprox. de Microsoft en InnAdvisory' },
  { value: 80, suffix: '%', label: 'Consultas resueltas por Benie sin humanos' },
  { value: 11, suffix: '/14K', label: 'Seleccionado para el TrepCamp en Nueva York' },
  { value: 16, suffix: '', label: 'Certificaciones profesionales (AWS, Microsoft…)' }
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
        <div className="eyebrow mb-4 reveal">Logros</div>
        <h2 className="h2 reveal" style={{ marginBottom: 48 }}>
          Hitos que valieron la pena
        </h2>
        <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal"
              style={{
                padding: '30px 22px',
                border: '1px solid #E5E0D4',
                borderRadius: 14,
                background: '#FBFAF4',
                transitionDelay: `${i * 80}ms`
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
                  <CountUp value={s.value} prefix={s.prefix} decimals={s.decimals} />
                </em>
                {s.suffix}
              </div>
              <div className="muted" style={{ fontSize: 14, marginTop: 12, lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 44 }}>
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

        <div className="reveal" style={{ marginTop: 36 }}>
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
