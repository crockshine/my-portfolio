'use client';
import React, { type FC } from 'react';
import styles from './VideoPlayerModal.module.css';

export type VideoPlayerModalProps = {
  videoUrl: string;
};

export const VideoPlayerModal: FC<VideoPlayerModalProps> = ({ videoUrl }) => {
  return (
    <div className={styles.dialog_content}>
      <div className={styles.video}>
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          allowFullScreen
          allow="clipboard-write; autoplay"
        ></iframe>
      </div>
      <div className={styles.fallback}>
        <h2>Пожалуйста, подождите.</h2> <h2>Видео загружается...</h2>
      </div>
    </div>
  );
};
