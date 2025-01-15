import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

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

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.content}>
          <h1 ref={titleRef} className={styles.title}>
            <span className={styles.highlight}>Your Gateway</span> to
            <br />
            Global Opportunities
          </h1>
          <p className={styles.subtitle}>
            Expert guidance for studying, working, and living abroad. Let us help you turn your
            international dreams into reality.
          </p>
          <div className={styles.ctas}>
            <button className={`${styles.cta} ${styles.primary}`}>
              Get Free Consultation
            </button>
            <button className={`${styles.cta} ${styles.secondary}`}>
              Learn More
            </button>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.number}>1000+</span>
            <span className={styles.label}>Success Stories</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>50+</span>
            <span className={styles.label}>Countries</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>95%</span>
            <span className={styles.label}>Success Rate</span>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </section>
  )
} 