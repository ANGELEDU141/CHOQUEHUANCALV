import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton.jsx'

export default function Layout() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.navInner}>
            <div className={styles.logoWrap}>
              <img
                className={styles.logo}
                src="/logo.png"
                alt="Lavanderia Choquehuanca"
              />
              <div>
                <p className={styles.brand}>Lavanderia Choquehuanca</p>
                <p className={styles.tagline}>Lavado y cuidado profesional</p>
              </div>
            </div>
            <nav className={styles.links}>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/servicios"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Servicios
              </NavLink>
              <NavLink
                to="/quienes-somos"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Quienes somos
              </NavLink>
              <NavLink
                to="/contacto"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Contacto
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <p className={styles.footerBrand}>Lavanderia Choquehuanca</p>
              <p className={styles.footerText}>
                Servicio profesional de lavanderia, planchado y tintoreria para
                hogares y negocios en Santa Anita y La Molina.
              </p>
            </div>
            <div>
              <p className={styles.footerTitle}>Sedes</p>
              <p>Gran Chimu 106, Santa Anita 15009</p>
              <p>Av. 7 de Junio 267 A, Santa Anita 15008</p>
              <p>Av. La Molina 1234, La Molina 15026</p>
            </div>
            <div>
              <p className={styles.footerTitle}>Contacto</p>
              <p>Telefono: 999 999 999</p>
              <p>Horario: Lun - Sab 8:00 a 20:00</p>
              <p>WhatsApp disponible</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>(c) 2026 Lavanderia Choquehuanca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
