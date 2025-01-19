import styles from './CareerSummary.module.css'

export default function CareerSummary() {
  return (
    <section className={styles.careerSummary}>
      <h2>Career Summary</h2>
      <ul>
        <li>
          <h3>[Current Job Title]</h3>
          <p>[Company], [Start Year] - Present</p>
          <p>Brief description of your role and key achievements.</p>
        </li>
        <li>
          <h3>[Previous Job Title]</h3>
          <p>[Previous Company], [Start Year] - [End Year]</p>
          <p>Brief description of your role and key achievements.</p>
        </li>
        {/* Add more career items as needed */}
      </ul>
    </section>
  )
}

