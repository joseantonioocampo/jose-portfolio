import { useLang } from '../i18n';
import { content } from '../content';

export default function Experiencia() {
  const { lang } = useLang();
  const c = content[lang].experiencia;
  return (
    <section id="experiencia" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4 reveal">{c.eyebrow}</div>
        <h2 className="h2 reveal" style={{ marginBottom: 48 }}>
          {c.h2}
        </h2>
        <div style={{ maxWidth: 840 }}>
          {c.items.map((e, i) => (
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
            {c.capacidadesTag}
          </div>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
          >
            {c.capacidades.map((cap, i) => (
              <div key={cap.label} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="serif" style={{ fontSize: 18, marginBottom: 12 }}>
                  {cap.label}
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  {cap.chips.map((ch) => (
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
