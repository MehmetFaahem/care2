import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isDrawerOpen && !(event.target as HTMLElement).closest(`.${styles.drawer}`)) {
        closeDrawer();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDrawerOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">Care2</a>
        </div>
        <div className={styles.menu}>
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className={styles.menuButton} onClick={toggleDrawer}>
            ☰
          </button>
        </div>
      </div>
      {isDrawerOpen && (
        <div className={styles.drawer}>
          <div className={styles.drawerHeader}>
            <button className={styles.closeButton} onClick={closeDrawer}>
              <CloseIcon />
            </button>
          </div>
          <ul>
            <li><a href="#about" onClick={closeDrawer}>About</a></li>
            <li><a href="#services" onClick={closeDrawer}>Services</a></li>
            <li><a href="#contact" onClick={closeDrawer}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
} 