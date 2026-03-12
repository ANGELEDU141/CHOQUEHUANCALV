import styles from './Contact.module.css'

const locations = [
  {
    title: 'Sede Santa Anita - Gran Chimu',
    address: 'Gran Chimu 106, Santa Anita 15009',
  },
  {
    title: 'Sede Santa Anita - 7 de Junio',
    address: 'Av. 7 de Junio 267 A, Santa Anita 15008',
  },
  {
    title: 'Nueva sede La Molina',
    address: 'Av. La Molina 1234, La Molina 15026',
  },
]

export default function Contact() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Contacto</p>
              <h1>Estamos listos para atenderte</h1>
              <p className={styles.lead}>
                Comunicate con nosotros para coordinar tu recojo o resolver
                cualquier duda.
              </p>
            </div>
            <div className={styles.heroPanel}>
              <h3>Informacion general</h3>
              <p>Telefono: 999 999 999</p>
              <p>Horario: Lun - Sab 8:00 a 20:00</p>
              <a className={styles.ctaButton} href="https://wa.me/51999999999">
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.locations}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Direcciones</h2>
            <p>Elige la sede mas cercana.</p>
          </div>
          <div className={styles.grid}>
            {locations.map((location) => (
              <article className={styles.card} key={location.title}>
                <h3>{location.title}</h3>
                <p>{location.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
