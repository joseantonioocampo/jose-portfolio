import Placeholder from './Placeholder';
import { useLang } from '../i18n';
import { content } from '../content';

export default function Proyectos() {
  const { lang } = useLang();
  const c = content[lang].proyectos;
  return (
    <section id="proyectos" className="sec">
      <div className="wrap">
        <div
          className="flex items-center justify-between flex-wrap gap-4 reveal"
          style={{ marginBottom: 48 }}
        >
          <div>
            <div className="eyebrow mb-4">{c.eyebrow}</div>
            <h2 className="h2">{c.h2}</h2>
          </div>
          <p className="muted" style={{ maxWidth: 340, margin: 0 }}>
            {c.intro}
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <article className="card flex flex-col app-reveal" style={{ padding: 26 }}>
            <Placeholder
              label={c.benie.photoAlt}
              style={{ width: '100%', height: 188, marginBottom: 22 }}
            />
            <div className="tag" style={{ marginBottom: 12 }}>
              {c.benie.tag}
            </div>
            <h3 className="h2" style={{ fontSize: 28, marginBottom: 10 }}>
              {c.benie.title}
            </h3>
            <p className="muted" style={{ margin: '0 0 12px' }}>
              {c.benie.body}
            </p>
            <a
              href="https://benefits.calhr.ca.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="lk"
            >
              {c.benie.link}
            </a>
            <div className="flex gap-[10px] flex-wrap" style={{ marginTop: 'auto', paddingTop: 22 }}>
              {c.benie.metrics.map((m) => (
                <span key={m} className="metric">
                  {m}
                </span>
              ))}
            </div>
          </article>

          <article className="card flex flex-col app-reveal" style={{ padding: 26, transitionDelay: '120ms' }}>
            <Placeholder
              label={c.trep.photoAlt}
              src="/NYC.JPEG"
              style={{ width: '100%', height: 188, marginBottom: 22 }}
            />
            <div className="tag" style={{ marginBottom: 12 }}>
              {c.trep.tag}
            </div>
            <h3 className="h2" style={{ fontSize: 28, marginBottom: 10 }}>
              {c.trep.title}
            </h3>
            <p className="muted" style={{ margin: 0 }}>
              {c.trep.body}
            </p>
            <div className="flex gap-[10px] flex-wrap" style={{ marginTop: 'auto', paddingTop: 22 }}>
              {c.trep.metrics.map((m) => (
                <span key={m} className="metric">
                  {m}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div style={{ marginTop: 48 }}>
          <div className="tag" style={{ marginBottom: 8 }}>
            {c.otrosTag}
          </div>
          {c.otros.map((p, i) => (
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
