'use client';
import Image from 'next/image';
import React, { type CSSProperties, type FC } from 'react';
import styles from './StackCardModal.module.css';
import { DialogDescription, DialogTitle } from '@/components/core';

export type StackCardModalProps = {
  imageUrl: string;
  title?: string;
  description?: string;
  imageStyle?: CSSProperties;
};

export const StackCardModal: FC<StackCardModalProps> = ({
  imageStyle,
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className={styles.dialog_content}>
      <div className={styles.image_block}>
        <Image
          src={`/${imageUrl}.webp`}
          width={100}
          height={110}
          alt={'stack logo'}
          style={imageStyle}
        />
      </div>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </div>
  );
};
