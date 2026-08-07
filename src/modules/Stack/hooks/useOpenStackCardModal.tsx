'use client';
import { MODAL_IDS } from '@/shared/constants';
import { useFadeModal } from '@/shared/context';
import {
  StackCardModal,
  type StackCardModalProps,
} from '../ui/StackCardModal/StackCardModal';

export const useOpenStackCardModal = () => {
  const { open } = useFadeModal();
  const openStackCardModal = (props: StackCardModalProps) => {
    open({
      id: MODAL_IDS.STACK_CARD,
      content: <StackCardModal {...props} />,
    });
  };
  return { openStackCardModal };
};
