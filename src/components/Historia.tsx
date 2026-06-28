type Row = { year: string; title: string; body: string };

const rows: Row[] = [
  {
    year: '2011',
    title: 'Curiosidad',
    body:
      'A los 10 años me mostraron un circuito con un LED que encendía y apagaba. Esa chispa despertó mi obsesión por crear: empecé a construir mis propios robots en el taller de mi papá, sin referentes, solo con ganas de aprender.'
  },
  {
    year: '2018',
    title: 'Salto de fe',
    body:
      'Una beca del 90% y la orquesta Sonemos lo hicieron posible. Tuve formación directa de Arturo Márquez —ganador de varios Latin Grammy— y representé a México con Iberorquestas Juveniles ante 12 países.'
  },
  {
    year: '2020',
    title: 'Propósito',
    body:
      'Beca del 100% en Tecmilenio para estudiar Ingeniería en Mecatrónica, Robótica y Electrónica. Desarrollé un árbol de madera con Arduino y software — el proyecto que marcó un parteaguas en mi camino profesional.'
  },
  {
    year: '2021',
    title: 'Primeros pasos',
    body:
      'Entré como Developer en Digital NAO (Monterrey): automaticé la generación de certificados, construí chatbots y mejoré productos digitales para elevar la eficiencia operativa.'
  },
  {
    year: '2023',
    title: 'Sector público',
    body:
      'En Innovation Advisory Consulting pasé de AI & Power Platform Developer en Sacramento a Director de Desarrollo. Lancé Benie the Bot, el primer chatbot de IA del sector público de California, sobre tecnologías Microsoft.'
  },
  {
    year: '2024',
    title: 'Reconocimiento',
    body:
      'Me gradué como Valedictorian de Ingeniería en Mecatrónica. Ese año fui 1 de 11 entre 14,000 para el TrepCamp en Nueva York, con mentoría de CEOs y profesores de Stanford, Harvard y Manhattan College.'
  },
  {
    year: '2026',
    title: 'Hoy',
    body:
      'Soy AI Engineer en PwC Acceleration Centers, profesor de cátedra en Tecmilenio, fundé JOYU y curso la Maestría en Business Analytics en EGADE Business School. Colaboro con equipos en Shanghái y Asia.'
  }
];

export default function Historia() {
  return (
    <section id="historia" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4">Mi historia</div>
        <h2 className="h2" style={{ maxWidth: 680, marginBottom: 14 }}>
          No existían límites ni fronteras,{' '}
          <span className="serif ital acc">solo la oportunidad de crear tu propio destino.</span>
        </h2>
        <p className="lead" style={{ marginBottom: 56 }}>
          Un recorrido de curiosidad, esfuerzo silencioso y saltos de fe.
        </p>
        <div style={{ maxWidth: 780 }}>
          {rows.map((r, i) => (
            <div
              key={r.year}
              className="grid"
              style={{ gridTemplateColumns: '88px 1fr', gap: 26 }}
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
                  padding: i === rows.length - 1 ? '0 0 0 30px' : '0 0 44px 30px',
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
                <h3 className="serif" style={{ fontSize: 23, margin: '0 0 7px' }}>
                  {r.title}
                </h3>
                <p className="muted" style={{ margin: 0 }}>
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
