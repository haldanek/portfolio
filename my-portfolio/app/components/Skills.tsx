import styles from './components-css/Skills.module.css'

export default function Skills() {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python',
    'SQL', 'Git', 'Agile Methodologies', 'UI/UX Design',
    'RESTful APIs', 'GraphQL', 'Docker', 'AWS'
  ]

  return (
    <section className={styles.skills}>
      <h2>Skills &amp; Abilities</h2>
      <ul className={styles.skillList}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

