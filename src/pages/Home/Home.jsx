import styles from './Home.module.css'

const highlights = [
  'Recojo y entrega en 24-48h',
  'Cuidado premium para tus prendas',
  'Atencion rapida en Santa Anita',
]

const steps = [
  {
    title: 'Agenda tu recojo',
    description: 'Elige horario, direccion y tipo de servicio.',
  },
  {
    title: 'Lavamos con detalle',
    description: 'Procesos controlados, insumos seguros y control de calidad.',
  },
  {
    title: 'Entrega puntual',
    description: 'Recibe tu ropa doblada o colgada en tu puerta.',
  },
]

const locations = [
  {
    name: 'Santa Anita - Gran Chimu',
    address: 'Gran Chimu 106, Santa Anita 15009',
    status: 'Sede principal',
  },
  {
    name: 'Santa Anita - 7 de Junio',
    address: 'Av. 7 de Junio 267 A, Santa Anita 15008',
    status: 'Sede operativa',
  },
  {
    name: 'La Molina',
    address: 'Av. La Molina 1234, La Molina 15026',
    status: 'Proxima apertura',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Lavanderia en Lima Este</p>
              <h1>Reinventar el futuro de la lavanderia y el lavado al seco</h1>
              <p className={styles.lead}>
                Recogemos, lavamos y entregamos tus prendas en la puerta de tu
                casa. Rapidez, cuidado y atencion cercana para hogares y
                negocios.
              </p>
              <div className={styles.heroActions}>
                <button className={styles.primaryButton}>
                  Programa tu recojo
                </button>
                <button className={styles.outlineButton}>Ver servicios</button>
              </div>
              <div className={styles.highlights}>
                {highlights.map((item) => (
                  <div className={styles.highlightItem} key={item}>
                    <span />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroImage} aria-hidden="true" />
              <div className={styles.heroCard}>
                <h2>Tu ropa, como nueva</h2>
                <p>
                  Separacion por color, tratamiento delicado y entrega puntual
                  en Santa Anita y La Molina.
                </p>
                <div className={styles.heroBadges}>
                  <span>24-48h</span>
                  <span>Atencion local</span>
                  <span>Garantia total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.strip}>
        <div className={styles.container}>
          <div className={styles.stripGrid}>
            <p>Servicio profesional</p>
            <p>Recoleccion segura</p>
            <p>Prendas cuidadas</p>
            <p>Equipo cercano</p>
          </div>
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Como funciona</h2>
            <p>Un proceso simple, rapido y transparente.</p>
          </div>
          <div className={styles.cardGrid}>
            {steps.map((step) => (
              <article className={styles.card} key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutPanel}>
              <h3>Somos una lavanderia familiar</h3>
              <p>
                Cuidamos prendas de uso diario y ropa especial con procesos
                responsables. Cada pedido se revisa con detalle para asegurar
                resultados constantes.
              </p>
              <button className={styles.outlineButton}>Conoce mas</button>
            </div>
            <div className={styles.aboutStats}>
              <div>
                <h4>2</h4>
                <p>Sedes activas</p>
              </div>
              <div>
                <h4>1</h4>
                <p>Nueva sede en camino</p>
              </div>
              <div>
                <h4>98%</h4>
                <p>Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.locations}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Nuestras sedes</h2>
            <p>Estamos creciendo para estar mas cerca de ti.</p>
          </div>
          <div className={styles.cardGrid}>
            {locations.map((location) => (
              <article className={styles.locationCard} key={location.name}>
                <span>{location.status}</span>
                <h3>{location.name}</h3>
                <p>{location.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div>
              <h2>No dejes que las tareas domesticas definan tu dia</h2>
              <p>
                Agenda hoy y recibe tu ropa limpia y lista para usar en tiempo
                record.
              </p>
            </div>
            <button className={styles.primaryButton}>Agenda ahora</button>
          </div>
        </div>
      </section>
    </div>
  )
}
