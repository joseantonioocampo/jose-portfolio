import Placeholder from './Placeholder';

export default function Hero() {
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
          <div className="eyebrow mb-4 animate-rise">
            AI Engineer · GenAI &amp; Azure AI · PwC
          </div>
          <h1 className="h1 animate-rise" style={{ animationDelay: '.17s' }}>
            Construyo sistemas de IA que{' '}
            <span className="serif ital shimmer">resuelven problemas reales.</span>
          </h1>
          <p
            className="lead mt-4 animate-rise"
            style={{ marginBottom: 28, animationDelay: '.28s' }}
          >
            Soy José Antonio Ocampo — Ingeniero en Mecatrónica y AI Engineer en PwC
            Acceleration Centers. Especializado en GenAI, Azure AI y Microsoft Power
            Platform, con implementaciones de gran escala para el sector público de
            Estados Unidos. Colaboro con equipos en Shanghái y Asia. Cuernavaca, México.
          </p>
          <div
            className="flex items-center gap-3 flex-wrap animate-rise"
            style={{ marginBottom: 30, animationDelay: '.39s' }}
          >
            <a href="#proyectos" className="btn btnp">
              Ver proyectos
            </a>
            <a href="#historia" className="btn btng">
              Mi historia
            </a>
          </div>
          <div className="flex flex-wrap gap-[10px] animate-rise" style={{ animationDelay: '.5s' }}>
            <span className="chip">
              <span className="acc">★</span> AI Engineer @ PwC
            </span>
            <span className="chip">
              <span className="acc">★</span> CEO &amp; Co-Founder · JOYU
            </span>
            <span className="chip">
              <span className="acc">★</span> Maestría · EGADE Business School
            </span>
          </div>
        </div>
        <div className="animate-rise" style={{ position: 'relative', zIndex: 1, animationDelay: '.28s' }}>
          <Placeholder
            label="Foto profesional"
            src="/profesional.png"
            alt="José Antonio Ocampo"
            style={{ width: '100%', height: 460, borderRadius: 16 }}
          />
          <div className="tag" style={{ marginTop: 14, textAlign: 'center' }}>
            Cuernavaca, México · 2026
          </div>
        </div>
      </div>
    </header>
  );
}
