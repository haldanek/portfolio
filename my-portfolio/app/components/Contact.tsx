'use client'

import { useState } from 'react'
import styles from './components-css/Contact.module.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email using a server action or API route
    console.log('Sending email:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
    alert('Message sent successfully!')
  }

  return (
    <section className={styles.contact}>
      <h2>Let&apos;s Connect!</h2>
      <div className={styles.contactContent}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
            LinkedIn Profile
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

