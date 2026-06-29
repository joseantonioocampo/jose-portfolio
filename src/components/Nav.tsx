import { useScrollSpy } from '../hooks/useScrollSpy';

const links = [
  { href: '#historia', label: 'Historia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#educacion', label: 'Educación' },
  { href: '#logros', label: 'Logros' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' }
];

export default function Nav() {
  const active = useScrollSpy(links.map((l) => l.href.slice(1)));
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`navlink${active === l.href.slice(1) ? ' active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contacto" className="btn btnp btnsm">
          Hablemos
        </a>
      </div>
    </nav>
  );
}
