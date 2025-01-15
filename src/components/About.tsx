import { useEffect, useRef } from 'react'
import styles from './About.module.css'

const icons = {
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  certificate: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  ),
  handshake: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
      <path d="M12 5.5v13"></path>
    </svg>
  )
}

export function About() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (textRef.current) observer.observe(textRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.about} id="about">
      <div className={styles.background}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent} ref={textRef}>
            <h2>About Care2 Training Consultancy</h2>
            <div className={styles.text}>
              <p>
                With over a decade of experience, Care2 Training Consultancy has been a trusted
                partner for thousands of individuals pursuing their international dreams.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <div className={styles.iconWrapper}>
                    {icons.globe}
                  </div>
                  <span>Global Network</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.iconWrapper}>
                    {icons.certificate}
                  </div>
                  <span>Certified Experts</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.iconWrapper}>
                    {icons.handshake}
                  </div>
                  <span>Personalized Support</span>
                </div>
              </div>
              <p>
                Our team of certified consultants brings expertise in visa processing,
                educational counseling, and career development, ensuring a smooth transition
                to your desired destination.
              </p>
            </div>
            <button className={styles.learnMore}>
              Discover Our Story
              <span className={styles.arrow}>→</span>
            </button>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://cdn.pixabay.com/photo/2017/08/07/18/27/businessman-2606502_640.jpg"
                alt="Professional consultant meeting"
                className={styles.aboutImage}
              />
              <div className={styles.experienceCard}>
                <span className={styles.years}>10+</span>
                <span className={styles.text}>Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 