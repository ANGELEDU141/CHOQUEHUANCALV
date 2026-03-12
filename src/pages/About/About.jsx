import styles from './About.module.css'

const values = [
  {
    title: 'Cuidado real',
    description: 'Tratamos cada prenda como si fuera nuestra.',
  },
  {
    title: 'Tiempo bien usado',
    description: 'Recojo y entrega para que ganes horas libres.',
  },
  {
    title: 'Confianza local',
    description: 'Equipo cercano y presencia en Santa Anita.',
  },
]

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Sobre nosotros</p>
              <h1>Quienes somos</h1>
              <p className={styles.lead}>
                Lavanderia Choquehuanca es una empresa familiar con procesos
                modernos de limpieza, control de calidad y un trato cercano.
              </p>
            </div>
            <div className={styles.heroPanel}>
              <h3>Nuestra mision</h3>
              <p>
                Cuidar tu ropa con detalle y brindarte un servicio confiable,
                rapido y humano.
              </p>
              <div className={styles.heroBadge}>Desde Santa Anita</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyCard}>
              <h2>Una historia de confianza</h2>
              <p>
                Iniciamos atendiendo a familias del distrito y hoy trabajamos con
                hogares, negocios y empresas locales. Nuestra prioridad es la
                tranquilidad de cada cliente.
              </p>
            </div>
            <div className={styles.storyCardAlt}>
              <p>
                Crecemos con procesos mas responsables, control de manchas y un
                equipo que revisa cada prenda antes de entregar.
              </p>
              <p className={styles.storyHighlight}>
                Cada pedido pasa por una inspeccion final.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Nuestros valores</h2>
            <p>Lo que nos diferencia en cada servicio.</p>
          </div>
          <div className={styles.cardGrid}>
            {values.map((value) => (
              <article className={styles.card} key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
