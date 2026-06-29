import CountUp from './CountUp';
import { useLang } from '../i18n';
import { content } from '../content';

export default function Logros() {
  const { lang } = useLang();
  const c = content[lang].logros;
  return (
    <section id="logros" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4 reveal">{c.eyebrow}</div>
        <h2 className="h2 reveal" style={{ marginBottom: 48 }}>
          {c.h2}
        </h2>
        <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {c.stats.map((s, i) => (
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
            {c.reconocimientosTag}
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {c.reconocimientos.map((r) => (
              <span key={r} className="chip">
                <span className="acc">★</span> {r}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 36 }}>
          <div className="tag" style={{ marginBottom: 14 }}>
            {c.prensaTag}
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {c.prensa.map((p) => (
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
