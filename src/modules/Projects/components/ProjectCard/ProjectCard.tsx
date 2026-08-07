'use client';
import { Accordion, LinkBadge } from '@/components/ui';
import type { IProject } from '@/domains';
import React, { type FC } from 'react';
import styles from './ProjectCard.module.css';
import { ProjectCardWrapper } from './ProjectCardWrapper';

export const ProjectCard: FC<IProject> = ({ ...card }) => {
  const { title, links, description } = card;
  return (
    <ProjectCardWrapper {...card}>
      <div className={styles.description}>
        <h2>{title}</h2>
        <div className={styles.links_container}>
          {links?.map((link, idx) => (
            <LinkBadge
              key={idx}
              link={link.link}
              title={link.title}
              color={link.color}
            />
          ))}
        </div>

        <div className={'flex-1'} />
        <Accordion description={description} />
      </div>
    </ProjectCardWrapper>
  );
};
