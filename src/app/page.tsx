import { AboutSection } from '@/modules/About';
import { HeroSection } from '@/modules/Hero';
import { ProjectsSection } from '@/modules/Projects';
import { StackSection } from '@/modules/Stack/ui';
import React from 'react';
import { Footer } from '../components/ui';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className={styles.page_list}>
        <h1>// обо мне</h1>
        <AboutSection />

        <h1>// я знаю</h1>
        <StackSection />

        <h1>// мои проекты</h1>
        <ProjectsSection />
      </div>
      <Footer />
    </>
  );
}
