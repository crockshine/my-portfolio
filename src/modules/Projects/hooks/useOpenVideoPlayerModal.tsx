'use client';
import { MODAL_IDS } from '@/shared/constants';
import { useFadeModal } from '@/shared/context';
import {
  VideoPlayerModal,
  VideoPlayerModalProps,
} from '../ui/VideoPlayerModal/VideoPlayerModal';

export const useOpenVideoPlayerModal = () => {
  const { open } = useFadeModal();
  const openVideoModal = (props: VideoPlayerModalProps) => {
    open({
      id: MODAL_IDS.VIDEO,
      content: <VideoPlayerModal {...props} />,
    });
  };
  return { openVideoModal };
};
