import Link from 'next/link'
import styles from './page.module.css'

// This is a mock function to simulate fetching project data
function getProjectData(id: string) {
  const projects = [
    { id: '1', title: 'Project 1', description: 'Detailed description of Project 1', link: 'https://project1.example.com' },
    { id: '2', title: 'Project 2', description: 'Detailed description of Project 2', link: 'https://project2.example.com' },
    { id: '3', title: 'Project 3', description: 'Detailed description of Project 3', link: 'https://project3.example.com' },
  ]
  return projects.find(project => project.id === id)
}

export default function Project({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className={styles.project}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
        View Project
      </a>
      <Link href="/" className={styles.backLink}>Back to Portfolio</Link>
    </div>
  )
}

