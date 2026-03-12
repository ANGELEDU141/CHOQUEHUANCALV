import styles from './WhatsAppButton.module.css'

const WHATSAPP_URL = 'https://wa.me/51999999999'

export default function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      WhatsApp
    </a>
  )
}
