'use client';
import type { IProject } from '@/domains';
import Image from 'next/image';
import React, { type FC, type PropsWithChildren } from 'react';
import { useOpenVideoPlayerModal } from '../../hooks/useOpenVideoPlayerModal';
import { RotatePlayText } from '../RotatePlayText/RotatePlayText';
import styles from './ProjectCard.module.css';

export const ProjectCardWrapper: FC<IProject & PropsWithChildren> = ({
  imageUrl,
  videoUrl,
  children,
}) => {
  const { openVideoModal } = useOpenVideoPlayerModal();
  return (
    <div className={styles.project_card}>
      <button
        className={styles.image_block}
        onClick={() => openVideoModal({ videoUrl })}
      >
        <Image
          src={`/${imageUrl}.webp`}
          width={728}
          height={381}
          alt={'project'}
        />
        <RotatePlayText />
      </button>
      {children}
    </div>
  );
};
