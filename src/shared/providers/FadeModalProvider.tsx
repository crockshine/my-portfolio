'use client';
import { FC, type PropsWithChildren } from 'react';
import { FadeModalContextProvider } from '../context';
import { modalStore } from '../store';

export const FadeModalProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FadeModalContextProvider modalStore={modalStore}>
      {children}
    </FadeModalContextProvider>
  );
};
