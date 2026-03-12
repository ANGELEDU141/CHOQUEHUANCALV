import styles from './Services.module.css'

const services = [
  {
    name: 'Lavado y planchado',
    description: 'Prendas impecables, suaves y listas para usar.',
    price: 'Desde S/ 6.00',
    image: '/service-lavado.svg',
  },
  {
    name: 'Tintoreria',
    description: 'Tratamiento profesional para telas delicadas.',
    price: 'Desde S/ 12.00',
    image: '/service-tintoreria.svg',
  },
  {
    name: 'Edredones y voluminosos',
    description: 'Higiene profunda con secado cuidadoso.',
    price: 'Desde S/ 25.00',
    image: '/service-edredon.svg',
  },
  {
    name: 'Ropa de trabajo',
    description: 'Lavado industrial para uniformes y prendas de negocio.',
    price: 'Cotizacion personalizada',
    image: '/service-trabajo.svg',
  },
]

export default function Services() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Catalogo de servicios</p>
              <h1>Servicios pensados para cada tipo de prenda</h1>
              <p className={styles.lead}>
                Cada servicio incluye control de calidad, cuidado especializado y
                atencion cercana. Elige lo que necesitas y coordinamos el recojo.
              </p>
            </div>
            <div className={styles.heroPanel}>
              <h3>Beneficios principales</h3>
              <ul>
                <li>Recojo y entrega programada</li>
                <li>Procesos seguros con insumos confiables</li>
                <li>Seguimiento por WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {services.map((service) => (
              <article className={styles.card} key={service.name}>
                <div className={styles.imageWrap}>
                  <img src={service.image} alt={service.name} />
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className={styles.priceRow}>
                  <span>{service.price}</span>
                  <button className={styles.linkButton}>Solicitar</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
