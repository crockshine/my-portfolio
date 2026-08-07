import type { IStack } from '@/domains';
import Image from 'next/image';
import React, { type FC } from 'react';
import styles from './StackCard.module.css';
import { StackCardWrapper } from './StackCardWrapper';

export const StackCard: FC<IStack> = ({ ...card }) => {
  const { imageUrl, title } = card;
  return (
    <StackCardWrapper {...card}>
      <div className={styles.info}>
        <div className={styles.img_block}>
          <Image
            src={`/${imageUrl}.webp`}
            width={110}
            height={100}
            alt={title}
          />
        </div>
        <h3>{title}</h3>
      </div>
    </StackCardWrapper>
  );
};
