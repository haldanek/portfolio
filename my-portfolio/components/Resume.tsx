import Link from 'next/link'
import styles from './Resume.module.css'

export default function Resume() {
  return (
    <section className={styles.resume}>
      <h2>Resume</h2>
      <div className={styles.buttons}>
        <Link href="/resume.pdf" target="_blank" className={styles.button}>
          View Resume
        </Link>
        <Link href="/resume.pdf" download className={styles.button}>
          Download Resume
        </Link>
      </div>
    </section>
  )
}

