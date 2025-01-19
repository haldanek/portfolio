import Link from 'next/link'
import styles from './Projects.module.css'

export default function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Short description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Short description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Short description of Project 3' },
  ]

  return (
    <section className={styles.projects}>
      <h2>Projects & Work Samples</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

