import styles from './components-css/PhilosophyStatement.module.css'

export default function PhilosophyStatement() {
  return (
    <section className={styles.philosophyStatement}>
      <h2>My Philosophy</h2>
      <blockquote>
        I believe in [Your Core Belief]. My approach to work is [Your Approach],
        and I strive to [Your Goals]. Every project is an opportunity to learn,
        grow, and create something meaningful.
      </blockquote>
    </section>
  )
}

