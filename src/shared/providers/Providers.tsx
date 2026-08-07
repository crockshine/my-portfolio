import { FC, type PropsWithChildren } from 'react';
import { FadeModalProvider } from './FadeModalProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <FadeModalProvider>{children}</FadeModalProvider>;
};
