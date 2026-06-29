import Placeholder from './Placeholder';
import { useLang } from '../i18n';
import { content } from '../content';

export default function Galeria() {
  const { lang } = useLang();
  const c = content[lang].galeria;
  return (
    <section id="galeria" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4 reveal">{c.eyebrow}</div>
        <h2 className="h2 reveal" style={{ marginBottom: 14 }}>
          {c.h2}
        </h2>
        <p className="lead reveal" style={{ marginBottom: 48 }}>
          {c.lead}
        </p>
        <div
          className="grid gap-[18px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {c.items.map((g, i) => (
            <div key={g.id} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="gphoto" style={{ height: 220 }}>
                <Placeholder
                  label={g.caption}
                  src={g.src}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div
                className="muted"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  marginTop: 10
                }}
              >
                {g.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
