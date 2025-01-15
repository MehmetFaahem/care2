import { useState, FormEvent, useEffect, useRef } from 'react'
import styles from './ContactForm.module.css'

type FormData = {
  name: string
  email: string
  service: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  service: '',
  message: ''
}

const services = [
  'Student Visa',
  'Work Visa',
  'Study Abroad',
  'Career Counseling',
  'Immigration Services'
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const formRef = useRef<HTMLDivElement>(null)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormData(initialFormData)
      setSubmitStatus('success')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (err) {
      console.error('Form submission error:', err)
      setSubmitStatus('error')
    }
  }

  const isSubmitting = submitStatus === 'loading'

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.background}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
      <div className="container">
        <div className={styles.content} ref={formRef}>
          <div className={styles.info}>
            <h2>Get in Touch</h2>
            <p className={styles.subtitle}>
              Ready to start your international journey? Contact us today for a free
              consultation with our expert team.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Business Street, City, Country</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 234 567 890</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email Us</h4>
                  <p>contact@care2consultancy.com</p>
                </div>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder=" "
                disabled={isSubmitting}
              />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder=" "
                disabled={isSubmitting}
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className={styles.formGroup}>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
                disabled={isSubmitting}
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder=" "
                rows={4}
                disabled={isSubmitting}
              />
              <label htmlFor="message">Your Message</label>
            </div>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className={styles.spinner}></span>
              ) : (
                'Send Message'
              )}
            </button>

            {submitStatus === 'success' && (
              <div className={`${styles.statusMessage} ${styles.success}`}>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={`${styles.statusMessage} ${styles.error}`}>
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
} 