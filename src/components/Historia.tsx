import { useLang } from '../i18n';
import { content } from '../content';

export default function Historia() {
  const { lang } = useLang();
  const c = content[lang].historia;
  return (
    <section id="historia" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4 reveal">{c.eyebrow}</div>
        <h2 className="h2 reveal" style={{ maxWidth: 680, marginBottom: 14 }}>
          {c.h2a}
          <span className="serif ital acc">{c.h2b}</span>
        </h2>
        <p className="lead reveal" style={{ marginBottom: 56 }}>
          {c.lead}
        </p>

        <div style={{ maxWidth: 780 }}>
          {c.rows.map((r, i) => (
            <div
              key={r.year + r.title}
              className="grid reveal"
              style={{ gridTemplateColumns: '88px 1fr', gap: 26, transitionDelay: `${i * 50}ms` }}
            >
              <div
                className="acc"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  paddingTop: 3
                }}
              >
                {r.year}
              </div>
              <div
                style={{
                  borderLeft: '1px solid #E2DDD0',
                  padding: i === c.rows.length - 1 ? '0 0 0 30px' : '0 0 44px 30px',
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: -5,
                    top: 6,
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    background: 'var(--acc)'
                  }}
                />
                <div className="eyebrow" style={{ marginBottom: 6 }}>
                  {r.tag}
                </div>
                <h3 className="serif" style={{ fontSize: 23, margin: '0 0 9px' }}>
                  {r.title}
                </h3>
                <p className="muted" style={{ margin: 0 }}>
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <figure
          className="reveal"
          style={{
            maxWidth: 780,
            margin: '56px 0 0',
            paddingLeft: 28,
            borderLeft: '3px solid var(--acc)'
          }}
        >
          <blockquote
            className="serif ital"
            style={{
              fontSize: 'clamp(22px, 2.7vw, 31px)',
              lineHeight: 1.32,
              margin: 0,
              color: '#28261F'
            }}
          >
            {c.quote}
          </blockquote>
          <figcaption className="tag" style={{ marginTop: 16 }}>
            {c.quoteAuthor}
          </figcaption>
        </figure>

        <div
          className="reveal"
          style={{
            maxWidth: 820,
            margin: '72px auto 0',
            textAlign: 'center'
          }}
        >
          <div className="eyebrow mb-4">{c.saltoEyebrow}</div>
          <p
            className="serif"
            style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', lineHeight: 1.45, margin: '0 0 20px', color: '#28261F' }}
          >
            {c.manifesto1a}
            <span className="ital acc">{c.manifesto1b}</span>
          </p>
          <p className="muted" style={{ maxWidth: 640, margin: '0 auto' }}>
            {c.manifesto2}
          </p>
        </div>

        <div
          className="reveal"
          style={{
            maxWidth: 720,
            margin: '48px auto 0',
            display: 'grid',
            gap: 14
          }}
        >
          {c.dedicatorias.map((d) => (
            <p key={d.para} className="muted" style={{ margin: 0, fontSize: 15 }}>
              <span className="acc serif ital" style={{ fontSize: 17 }}>
                {c.thanks}, {d.para},
              </span>{' '}
              {d.texto}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
