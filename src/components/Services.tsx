import { useEffect, useRef } from 'react'
import styles from './Services.module.css'

const services = [
  {
    title: 'Student Visa Assistance',
    description: 'Expert guidance through the entire student visa process, from documentation to interview preparation.',
    icon: '🎓',
    gradient: 'blue'
  },
  {
    title: 'Work Abroad Programs',
    description: 'Connect with international employers and get support for work visas and relocation.',
    icon: '💼',
    gradient: 'green'
  },
  {
    title: 'Study Abroad Counseling',
    description: 'Personalized counseling to help you choose the right university and program abroad.',
    icon: '🌍',
    gradient: 'purple'
  }
]

export function Services() {
  const cardsRef = useRef<HTMLDivElement>(null)

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

    const cards = cardsRef.current?.children
    if (cards) {
      Array.from(cards).forEach((card) => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.grid} ref={cardsRef}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${styles.card} ${styles[service.gradient]}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className={styles.learnMore}>
                Learn More
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 