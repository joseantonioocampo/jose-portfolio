type Row = { year: string; tag: string; title: string; body: string };

const rows: Row[] = [
  {
    year: '2001',
    tag: 'Una vida normal',
    title: 'Donde empezó todo',
    body:
      'Nací el 21 de junio de 2001 en una familia que construyó su casa desde cero: mi papá carpintero, mi mamá ama de casa y mi hermana, hoy licenciada. Era tímido pero firme, y desde que tengo memoria subía al taller de mi papá a aprender el oficio. Aunque hubo carencias, nunca nos desunieron: mi madre nos dio educación y mi padre, el amor por aprender.'
  },
  {
    year: '2011',
    tag: 'Curiosidad',
    title: 'La chispa de un LED',
    body:
      'A los 10 años me mostraron un circuito con un LED que encendía y apagaba. Ese momento despertó en mí una enorme curiosidad por la innovación: empecé a construir mis propios robots y los objetos que imaginaba, sin referentes profesionales en mi familia. En la secundaria, a pesar del acoso y las burlas, seguí siendo de los más aplicados del salón —y di mi primer pitch a una directora de innovación, que quedó encantada.'
  },
  {
    year: '2017',
    tag: 'Contra la corriente',
    title: 'No me detuve',
    body:
      'En la preparatoria mi papá enfermó y tuve que darme de baja para ayudar en casa. Con un ingreso familiar de apenas $10,000 para cuatro personas, estudiar en una universidad como Tecmilenio parecía inalcanzable. Busqué informes de todas formas; sabía que el camino existía, aunque aún no supiera cómo.'
  },
  {
    year: '2018',
    tag: 'Salto de fe',
    title: 'Sonemos',
    body:
      'Una beca del 90% y la orquesta Sonemos —que daba educación musical gratuita y hasta prestaba los instrumentos— lo hicieron posible. Estudiaba la prepa en línea mientras me presentaba en teatros regionales, estatales e internacionales. Pasé de aprendiz a principal de mi sección, con formación directa de Arturo Márquez, ganador de varios Latin Grammy. Toqué en Los Pinos y el Festival Cervantino, y representé a México ante 12 países con Iberorquestas Juveniles.'
  },
  {
    year: '2020',
    tag: 'Propósito',
    title: 'Sin límites ni fronteras',
    body:
      'Así confirmé que no existían límites ni fronteras, solo la oportunidad de crear tu propio destino. Recibí una beca del 100% en Tecmilenio para estudiar Ingeniería en Mecatrónica. Ese año desarrollé un árbol de madera con Arduino y software —el proyecto que marcó un parteaguas— y me despedí de la orquesta que me dio esperanza en los momentos más solitarios.'
  },
  {
    year: '2021',
    tag: 'Oportunidad',
    title: 'La decisión que lo cambió todo',
    body:
      'Desde el primer día en Tecmilenio descubrí lo que realmente me apasiona. Participé en hackathones con segundos lugares y, a los seis meses, Carlos —CEO de Innovation Advisory— me contactó. Hice un internship en LX Lab y, ante la disyuntiva entre crecer en un equipo o postularme como embajador Tecmilenio, mi mamá me dio el consejo que lo definió todo.'
  },
  {
    year: '2021 — 2025',
    tag: 'Creer en ti',
    title: 'InnAdvisory',
    body:
      'Lo que empezó como un correo y un Arduino se convirtió en una firma internacional. Entré como PowerApps Developer y lancé Benie the Bot para CalHR, el primer chatbot de IA del sector público de California, capaz de resolver más del 80% de las consultas sin intervención humana. Llegaron CalOES —un CRM que automatizó el 60% de los flujos de incidentes—, el asistente médico del CCHCS, e incluso IA en vivo para ESPN con Bochín. Como Director de Desarrollo implanté Scrum y un pipeline CI/CD en Azure DevOps, con pilotos en Hawái, un contrato con Land & Climate Innovation e inversión de Microsoft rumbo a Santa Bárbara.'
  },
  {
    year: '2024',
    tag: 'Nueva York · Inspirar',
    title: '1 de 11 entre 14,000',
    body:
      'En abril me postulé a una beca especial. En mayo llegó la llamada: de 14,000 candidatos, fui uno de los 11 seleccionados para una experiencia empresarial en Nueva York. Llamé enseguida a mi mamá, a mi papá y a mi hermana —nadie en mi familia lo había logrado. En el TrepCamp aprendí de CEOs y profesores de Stanford, Harvard y Manhattan College. Cambió por completo mi forma de pensar y de actuar.'
  },
  {
    year: '2026',
    tag: 'Hoy',
    title: 'Apenas el comienzo',
    body:
      'Soy AI Engineer en PwC Acceleration Centers, profesor de cátedra en Tecmilenio, fundé JOYU y curso la Maestría en Business Analytics en EGADE Business School. Colaboro con equipos en Shanghái y Asia. Cada caída se volvió aprendizaje, cada duda fortaleza —y esto apenas comienza.'
  }
];

const dedicatorias = [
  { para: 'mamá', texto: 'por ser mi primer refugio y caminar a mi lado sin soltarme jamás.' },
  { para: 'papá', texto: 'por enseñarme, con tu ejemplo, que el trabajo con amor forja grandeza.' },
  { para: 'hermana', texto: 'por recordarme que el respeto es un acto de amor y una forma de valentía.' },
  { para: 'Yuri', texto: 'por mostrarme que la vida también se celebra en los espacios simples.' }
];

export default function Historia() {
  return (
    <section id="historia" className="sec">
      <div className="wrap">
        <div className="eyebrow mb-4 reveal">Mi historia</div>
        <h2 className="h2 reveal" style={{ maxWidth: 680, marginBottom: 14 }}>
          No existían límites ni fronteras,{' '}
          <span className="serif ital acc">solo la oportunidad de crear tu propio destino.</span>
        </h2>
        <p className="lead reveal" style={{ marginBottom: 56 }}>
          De un taller de carpintería en Cuernavaca a la IA del sector público de Estados Unidos.
          Un recorrido de curiosidad, esfuerzo silencioso y saltos de fe.
        </p>

        <div style={{ maxWidth: 780 }}>
          {rows.map((r, i) => (
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
            «Toda la vida vas a trabajar, pero solo una vez dirás que fuiste embajador.»
          </blockquote>
          <figcaption className="tag" style={{ marginTop: 16 }}>
            — Mi mamá
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
          <div className="eyebrow mb-4">Salto de fe</div>
          <p
            className="serif"
            style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', lineHeight: 1.45, margin: '0 0 20px', color: '#28261F' }}
          >
            La vida es un acto de valentía. Se trata de tomar riesgos conscientes, mirar al
            horizonte con determinación y atreverse a construir tus propias oportunidades,
            incluso cuando el terreno es incierto. A veces, solo se necesita eso:{' '}
            <span className="ital acc">un salto de fe.</span>
          </p>
          <p className="muted" style={{ maxWidth: 640, margin: '0 auto' }}>
            La verdadera transformación no ocurre en los sueños, sino en las decisiones que tomas
            cuando nadie está mirando: en el esfuerzo silencioso, en la perseverancia diaria, en el
            fuego interior que te empuja a seguir cuando el mundo parece detenerse.
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
          {dedicatorias.map((d) => (
            <p key={d.para} className="muted" style={{ margin: 0, fontSize: 15 }}>
              <span className="acc serif ital" style={{ fontSize: 17 }}>
                Gracias, {d.para},
              </span>{' '}
              {d.texto}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
