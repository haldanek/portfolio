import styles from './components-css/PhilosophyStatement.module.css'

export default function PhilosophyStatement() {
  return (
    <section className={styles.philosophyStatement}>
      <h2>My Philosophy</h2>
      <blockquote>
        As a Software Engineer and Technical Writer, I believe in creating
        user-focused solutions through clarity, collaboration, and continuous
        improvement. My approach to engineering prioritizes intuitive,
        accessible designs, while my writing ensures complex concepts are easy
        to understand. I value teamwork and embrace challenges as opportunities
        to learn and grow. By combining technical expertise with effective
        communication, I aim to bridge the gap between innovation and usability,
        delivering impactful, inclusive solutions that empower people and drive
        progress.
      </blockquote>
    </section>
  );
}

