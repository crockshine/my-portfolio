import React from 'react';
import { StackCard } from '../../components/StackCard';
import { stackList } from '../../data/stackList';
import styles from './StackSection.module.css';
import { ColorBends } from '@/components/ui';

export const StackSection = () => {
  return (
    <>
      <div className={styles.stack_page}>
        {stackList.map((card, index) => (
          <StackCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};
