import { useLang } from '../i18n';
import { content } from '../content';

export default function Educacion() {
  const { lang } = useLang();
  const c = content[lang].educacion;
  return (
    <section id="educacion" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4 reveal">{c.eyebrow}</div>
        <h2 className="h2 reveal" style={{ marginBottom: 48 }}>
          {c.h2}
        </h2>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <div className="card reveal" style={{ padding: 28 }}>
            <span className="tag">{c.card1.tag}</span>
            <h3 className="serif" style={{ fontSize: 23, margin: '10px 0 4px' }}>
              {c.card1.title}
            </h3>
            <div className="acc" style={{ fontWeight: 600, marginBottom: 10 }}>
              {c.card1.school}
            </div>
            <p className="muted" style={{ margin: 0 }}>
              {c.card1.body}
            </p>
          </div>
          <div className="card reveal" style={{ padding: 28, transitionDelay: '90ms' }}>
            <span className="tag">{c.card2.tag}</span>
            <h3 className="serif" style={{ fontSize: 23, margin: '10px 0 4px' }}>
              {c.card2.title}
            </h3>
            <div className="acc" style={{ fontWeight: 600, marginBottom: 10 }}>
              {c.card2.school}
            </div>
            <p className="muted" style={{ margin: 0 }}>
              {c.card2.body}
            </p>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 44 }}>
          <div className="flex items-center gap-3" style={{ marginBottom: 14 }}>
            <span className="tag">{c.certsTag}</span>
            <span className="metric">{c.certsCount}</span>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {c.certificados.map((cert) => (
              <span key={cert} className="chip">
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 36 }}>
          <div className="tag" style={{ marginBottom: 14 }}>
            {c.idiomasTag}
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {c.idiomas.map((idioma) => (
              <span key={idioma} className="chip">
                {idioma}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
