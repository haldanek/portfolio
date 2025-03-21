import styles from './components-css/Resume.module.css';

export default function Resume() {
  return (
    <section className={styles.resume}>
      <h2>Resume</h2>
      <div>
        {/* Embed PDF */}
       <object
         className={styles.pdf}
         data='/my-portfolio/public/Haldane-Resume-25D.pdf'
         type='application/pdf'
         width='100%'
         height='600'
         aria-label="Kimberlee Haldane's Resume in PDF format"
       >
         <p>
           You can{' '}
           <a href='/my-portfolio/public/Haldane-Resume-25D.pdf' download>
             download the resume
           </a>{' '}
           to view it.
         </p>
       </object>

        {/* Download Link */}
        <a
          href='/my-portfolio/public/Haldane-Resume-25D.pdf'
          download
          className={styles.button}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
