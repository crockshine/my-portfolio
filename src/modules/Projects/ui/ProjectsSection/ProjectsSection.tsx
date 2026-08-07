import React from 'react';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projectsList } from '../../data/projectsList';
import styles from './ProjectsSection.module.css';

export const ProjectsSection = () => {
  return (
    <div className={styles.project_page}>
      {projectsList.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          videoUrl={project.videoUrl}
          links={project.links}
        />
      ))}
    </div>
  );
};
