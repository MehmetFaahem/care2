import { useEffect, useRef, useState } from 'react'
import styles from './WhyChooseUs.module.css'

const reasons = [
  {
    title: 'Expert Consultants',
    description: 'Our team consists of certified professionals with years of experience in international education and visa processing.',
    icon: '👨‍💼',
    delay: 0,
    image: 'https://cdn.pixabay.com/photo/2017/08/07/18/27/businessman-2606502_640.jpg'
  },
  {
    title: 'Personalized Approach',
    description: 'We create customized solutions tailored to your specific needs, ensuring the best path for your international journey.',
    icon: '🎯',
    delay: 0.2,
    image: 'https://cdn.pixabay.com/photo/2017/05/31/17/46/medicine-2361046_640.jpg'
  },
  {
    title: 'High Success Rate',
    description: 'With our comprehensive support and expertise, we maintain a 95% visa approval rate for our clients.',
    icon: '📈',
    delay: 0.4,
    image: 'https://cdn.pixabay.com/photo/2016/02/29/15/02/doctor-1228629_640.jpg'
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated team provides round-the-clock assistance throughout your application process and beyond.',
    icon: '🌍',
    delay: 0.6,
    image: 'https://cdn.pixabay.com/photo/2016/04/19/14/31/lab-1338729_640.jpg'
  }
]

export function WhyChooseUs() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Add visible class immediately to show content
    if (contentRef.current) {
      contentRef.current.classList.add(styles.visible)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reasons = entry.target.querySelectorAll(`.${styles.reason}`)
            reasons.forEach((reason, index) => {
              setTimeout(() => {
                reason.classList.add(styles.visible)
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      className={styles.whyChooseUs} 
      id="why-choose-us"
      role="region" 
      aria-labelledby="why-choose-us-title"
    >
      <div className={styles.background}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
      <div className="container">
        <div className={styles.content} ref={contentRef}>
          <h2 id="why-choose-us-title" className={styles.title}>
            Why Choose <span className={styles.highlight}>Care2</span>
          </h2>
          <p className={styles.subtitle}>
            We're committed to making your international dreams a reality through expert guidance
            and dedicated support.
          </p>
          <div className={styles.grid}>
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={styles.reason}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div 
                  className={styles.reasonImage}
                  style={{ backgroundImage: `url(${reason.image})` }}
                />
                <div className={styles.reasonContent}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{reason.icon}</span>
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                  <div className={styles.shine}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 