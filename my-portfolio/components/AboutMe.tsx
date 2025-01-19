import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <h2>About Me</h2>
      <p>
        Hello! I'm [Your Name], a passionate [Your Profession] with a keen interest in [Your Interests].
        I specialize in [Your Specialties] and I'm always eager to take on new challenges and push the boundaries of what's possible.
      </p>
      <p>
        With [X] years of experience in the industry, I've developed a deep understanding of [Key Skills/Technologies],
        allowing me to create innovative solutions that drive results.
      </p>
    </section>
  )
}

