import Placeholder from './Placeholder';
import { useLang } from '../i18n';
import { content } from '../content';

export default function Hero() {
  const { lang } = useLang();
  const c = content[lang].hero;
  return (
    <header
      id="top"
      className="wrap"
      style={{ position: 'relative', paddingTop: 88, paddingBottom: 104, overflow: 'hidden' }}
    >
      <div className="aura" />
      <div
        className="grid items-center gap-14"
        style={{ gridTemplateColumns: '1.12fr .88fr', position: 'relative' }}
      >
        <div>
          <div className="eyebrow mb-4 animate-rise">{c.eyebrow}</div>
          <h1 className="h1 animate-rise" style={{ animationDelay: '.17s' }}>
            {c.h1a}
            <span className="serif ital shimmer">{c.h1b}</span>
          </h1>
          <p
            className="lead mt-4 animate-rise"
            style={{ marginBottom: 28, animationDelay: '.28s' }}
          >
            {c.lead}
          </p>
          <div
            className="flex items-center gap-3 flex-wrap animate-rise"
            style={{ marginBottom: 30, animationDelay: '.39s' }}
          >
            <a href="#proyectos" className="btn btnp">
              {c.ctaPrimary}
            </a>
            <a href="#historia" className="btn btng">
              {c.ctaSecondary}
            </a>
          </div>
          <div className="flex flex-wrap gap-[10px] animate-rise" style={{ animationDelay: '.5s' }}>
            {c.chips.map((chip) => (
              <span key={chip} className="chip">
                <span className="acc">★</span> {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="animate-rise" style={{ position: 'relative', zIndex: 1, animationDelay: '.28s' }}>
          <Placeholder
            label={c.photoAlt}
            src="/profesional.png"
            alt={c.photoAlt}
            style={{ width: '100%', height: 460, borderRadius: 16 }}
          />
          <div className="tag" style={{ marginTop: 14, textAlign: 'center' }}>
            {c.location}
          </div>
        </div>
      </div>
    </header>
  );
}
