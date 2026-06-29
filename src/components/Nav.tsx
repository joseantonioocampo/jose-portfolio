import { useScrollSpy } from '../hooks/useScrollSpy';
import { useLang } from '../i18n';
import { content } from '../content';

export default function Nav() {
  const { lang, setLang } = useLang();
  const c = content[lang];
  const active = useScrollSpy(c.nav.links.map((l) => l.href.slice(1)));

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(242,240,232,.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E5E0D4'
      }}
    >
      <div className="wrap flex items-center justify-between" style={{ height: 68 }}>
        <a href="#top" className="flex items-center gap-[10px]">
          <span className="dot" />
          <span className="serif" style={{ fontSize: 19, fontWeight: 500 }}>
            José A. Ocampo
          </span>
        </a>
        <div className="flex items-center gap-6 hidesm">
          {c.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`navlink${active === l.href.slice(1) ? ' active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="langtoggle" role="group" aria-label="Language">
            <button
              type="button"
              className={`langopt${lang === 'es' ? ' active' : ''}`}
              aria-pressed={lang === 'es'}
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <button
              type="button"
              className={`langopt${lang === 'en' ? ' active' : ''}`}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <a href="#contacto" className="btn btnp btnsm">
            {c.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
