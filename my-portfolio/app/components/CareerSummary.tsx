import styles from './components-css/CareerSummary.module.css'

export default function CareerSummary() {
  return (
    <section className={styles.careerSummary}>
      <h2>Career Summary</h2>
      <p>
        Former experienced instructional leader with a passion for fostering
        inclusive and innovative environments, now transitioning to a career in
        software engineering and technical writing. Skilled in leveraging
        data-driven, analytical approaches, coupled with strong critical
        thinking and effective communication skills, to drive impactful results.
        Seeking to apply a blend of instructional design expertise and technical
        acumen to build accessible, user-focused software products. Driven by a
        commitment to usability, I aim to leverage my design skills in
        developing solutions that are both functional and intuitive, enhancing
        user experience through thoughtful, well-designed software.
      </p>
      <ul>
        <li>
          <h3>Current: Technical Writer Intern</h3>
          <li>
            8 week internship as a Technical Writer: revamped onboarding
            documentation, created a template to document database components,
            was also able to work on technical tickets{' '}
          </li>
          <li>
            Completed over 800 hours of education and application in a Java
            Full-stack bootcamp
          </li>
        </li>
        <li>
          <h3>Previous: Instructional Leader</h3>
          <li>
            Proven track record of improving student engagement and expanding
            support through differentiation
          </li>
          <li>
            Experienced in working with cross-functional and cross-curricula
            teams in diverse environments
          </li>
          <li>
            Over 12 years of experience in instructional leadership, exceeding
            grade-level expectations, increasing standardized assessment scores
            and improving literacy skills
          </li>
        </li>
        {/* Add more career items as needed */}
      </ul>
    </section>
  );
}

