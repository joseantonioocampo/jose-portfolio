export default function Contacto() {
  return (
    <section id="contacto" className="sec">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <div className="eyebrow mb-4">Contacto</div>
          <h2 className="h1" style={{ fontSize: 'clamp(34px, 4.6vw, 56px)' }}>
            ¿Construimos algo <span className="serif ital acc">juntos?</span>
          </h2>
          <p className="lead" style={{ margin: '18px auto 0' }}>
            Estoy abierto a colaboraciones en IA, producto y emprendimiento. La vida es
            un acto de valentía — a veces solo se necesita un salto de fe.
          </p>
          <div
            className="flex justify-center gap-3 flex-wrap"
            style={{ marginTop: 30 }}
          >
            <a href="mailto:joseantonioocampo.cv@gmail.com" className="btn btnp">
              joseantonioocampo.cv@gmail.com
            </a>
            <a href="tel:+527721021168" className="btn btng">
              +52 772 102 1168
            </a>
            <a
              href="https://www.linkedin.com/in/jose-antonio-ocampo-cervantes-21661b1bb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btng"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
