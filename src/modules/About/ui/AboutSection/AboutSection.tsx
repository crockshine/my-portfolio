import styles from './AboutSection.module.css';
import React from 'react';

export const AboutSection = () => {
  return (
    <div className={styles.about_page}>
      <div className={styles.empty_block}></div>

      <div className={styles.text_block}>
        <h3>
          Привет) Я frontend разработчик с опытом создания{' '}
          <span>адаптивных</span> и <span>производительных</span>{' '}
          веб-приложений, сайтов. Участвовал в разработке как индивидуальных,
          так и командных проектов,
        </h3>
        <h3>
          Кроме работы, я активно участвую в <span>хакатонах</span> и знакомлюсь
          с новыми технологиями.
        </h3>
        <h3>
          Умею грамотно <span>организовывать структуру </span> приложений,
          работать с API и создавать удобный UX/UI.
        </h3>
      </div>
    </div>
  );
};
