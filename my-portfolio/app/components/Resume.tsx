import Link from 'next/link'
import styles from './components-css/Resume.module.css'

export default function Resume() {
  return (
    <section className={styles.resume}>
      <h2>Resume</h2>
      <div className={styles.buttons}>
        <Link href="/resume.pdf" target="_blank" className={styles.button}>
          View Resume
        </Link>
        <Link href="/my-portfolio/public/Haldane_K_Resume_CD_2025 copy.pages.pdf" download className={styles.button}>
          Download Resume
        </Link>
      </div>
    </section>
  )
}

