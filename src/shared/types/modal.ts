import { IStack } from '../../domains/stack.interface';
import { IVideoPlayer } from '../../domains/video.interface';

export enum ModalList {
  NONE = 'none',
  STACK = 'stack',
  VIDEO = 'video',
}

export type ModalDataMap = {
  [ModalList.NONE]: null;
  [ModalList.STACK]: IStack;
  [ModalList.VIDEO]: IVideoPlayer;
};
