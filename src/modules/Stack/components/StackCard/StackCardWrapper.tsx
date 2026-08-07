'use client';
import type { IStack } from '@/domains';
import { cn } from '@/shared/lib';
import React, {
  type CSSProperties,
  type FC,
  type PropsWithChildren,
} from 'react';
import { useOpenStackCardModal } from '../../hooks/useOpenStackCardModal';
import styles from './StackCard.module.css';

export const StackCardWrapper: FC<IStack & PropsWithChildren> = ({
  children,
  ...card
}) => {
  const { openStackCardModal } = useOpenStackCardModal();

  return (
    <button
      style={{ '--shadow-color': card.shadowColor } as CSSProperties}
      className={cn(styles.stack_card)}
      onClick={() => openStackCardModal(card)}
    >
      {children}
    </button>
  );
};
