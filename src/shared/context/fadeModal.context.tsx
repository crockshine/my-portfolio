'use client';

import { FadeModalWrapper } from '@/components/ui/FadeModal';
import { observer } from 'mobx-react-lite';
import { createContext, type ReactNode, useContext } from 'react';
import {
  type BaseModal,
  type ModalContext,
  type ModalOpenProps,
  ModalStore,
} from '../store';

type OpenProps = Omit<ModalOpenProps<BaseModal>, 'type'> & {
  showPrimaryGradient?: boolean;
  className?: string;
};

const Context = createContext<ModalContext<BaseModal, OpenProps> | null>(null);

export const FadeModalContextProvider = observer(
  ({
    children,
    modalStore,
  }: {
    children: ReactNode;
    modalStore: ModalStore<BaseModal & { showPrimaryGradient?: boolean }>;
  }) => {
    const {
      open: openBase,
      fadeModals,
      closeAll,
      cleanUpModal: cleanUpBase,
    } = modalStore;

    const open = (props: OpenProps) => {
      openBase({ ...props, type: 'fade' });
    };

    return (
      <Context.Provider
        value={{ open, modals: fadeModals, close: cleanUpBase, closeAll }}
      >
        {children}

        {fadeModals.map((modal) => (
          <FadeModalWrapper
            key={modal.id}
            modal={modal}
            onClose={cleanUpBase}
          />
        ))}
      </Context.Provider>
    );
  },
);

export const useFadeModal = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error('useFadeModal must be used within FadeModalProvider');
  return context;
};
