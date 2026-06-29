import Placeholder from './Placeholder';

type GaleriaItem = { id: string; label: string; caption: string; src?: string };

const items: GaleriaItem[] = [
  { id: 'discurso', label: 'Discurso de graduación', caption: 'Valedictorian · Discurso de graduación', src: '/discurso.jpg' },
  { id: 'nyc', label: 'TrepCamp · Nueva York', caption: 'TrepCamp NYC · 2024', src: '/NYC.JPEG' },
  { id: 'orquesta', label: 'Orquesta · Auditorio Nacional', caption: 'Iberorquestas · Auditorio Nacional', src: '/Iberorquestas.jpg' },
  { id: 'equipo', label: 'Innovation Advisory', caption: 'Innovation Advisory · Equipo', src: '/equipo.jpg' },
  { id: 'met', label: 'Nueva York · The Met', caption: 'Nueva York · The Met', src: '/met-nyc.jpg' },
  { id: 'valedictorian', label: 'Graduación · Valedictorian', caption: 'Valedictorian · Tecmilenio', src: '/foto-2.jpg' },
  { id: 'lideres', label: 'Líderes estudiantiles', caption: 'Líderes · Enactus México', src: '/lideres.jpg' },
  { id: 'reconocimiento', label: 'Reconocimiento', caption: 'Reconocimiento · Emprendimiento', src: '/reconocimiento.jpg' },
  { id: 'hackathon', label: 'Hackathon IA', caption: 'Hackathon · Inteligencia Artificial', src: '/foto-3.jpg' }
];

export default function Galeria() {
  return (
    <section id="galeria" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4 reveal">Galería</div>
        <h2 className="h2 reveal" style={{ marginBottom: 14 }}>
          Momentos del camino
        </h2>
        <p className="lead reveal" style={{ marginBottom: 48 }}>
          Del escenario al código: los momentos que han marcado el camino —
          orquesta, graduación, Nueva York y el trabajo con equipos internacionales.
        </p>
        <div
          className="grid gap-[18px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {items.map((g, i) => (
            <div key={g.id} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="gphoto" style={{ height: 220 }}>
                <Placeholder
                  label={g.label}
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
