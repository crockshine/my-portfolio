'use client';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>Михаил Королев. @crockshine</h3>
      <h3>{new Date().getFullYear()}</h3>
    </div>
  );
};
