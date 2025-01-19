import AboutMe from './components/AboutMe'
import PhilosophyStatement from './components/PhilosophyStatement'
import CareerSummary from './components/CareerSummary'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Kimberlee Haldane</h1>
      <AboutMe />
      <PhilosophyStatement />
      <CareerSummary />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

