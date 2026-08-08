import { ColorBends, Footer } from '@/components/ui';
import { AboutSection } from '@/modules/About';
import { HeroSection } from '@/modules/Hero';
import { ProjectsSection } from '@/modules/Projects';
import { StackSection } from '@/modules/Stack/ui';
import { cn } from '@/shared/lib';
import React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className={styles.page_list}>
        <div className={'relative flex flex-col gap-[5vw]'}>
          <div className={styles.section_wrapper}>
            <h1>// обо мне</h1>
            <AboutSection />
          </div>

          <div className={cn(styles.section_wrapper, 'relative z-20')}>
            <h1>// навыки</h1>
            <StackSection />
          </div>

          <div
            className={
              'absolute top-0 left-0 z-10 w-screen h-[100%] opacity-20'
            }
          >
            <div className={styles.bg_gradient} />
            <ColorBends
              className={'z-0'}
              colors={['#fff', '#71eaff', '#ffffff']}
              rotation={110}
              speed={0.5}
              scale={0.7}
              frequency={1.1}
              warpStrength={1}
              mouseInfluence={0}
              noise={0.15}
              parallax={0.5}
              iterations={3}
              intensity={0.7}
              bandWidth={4}
              transparent
              autoRotate={0}
            />
          </div>
        </div>

        <div className={styles.section_wrapper}>
          <h1>// проекты</h1>
          <ProjectsSection />
        </div>
      </div>

      <Footer />
    </>
  );
}
