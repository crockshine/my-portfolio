// типы ref
import type { ReactNode, RefObject } from 'react';

export interface BaseChildrenMethods {
  handleClose: () => void;
}

// общий тип существующей модалки в приложении
export interface BaseModal {
  id: string;
  ref: RefObject<BaseChildrenMethods>;
  onCloseFn?: (id: string) => void;
  content: ReactNode;
  type: 'fade' | 'bsm';
}

// пропсы для открытия модалки
export type ModalOpenProps<Modal extends BaseModal> = Omit<Modal, 'ref'>;

// имплементирующий интерфейс контекста модалок (и стора)
export interface ModalContext<Modal extends BaseModal, OpenProps> {
  modals: Modal[];
  open: (props: OpenProps) => void;
  close: (id: string) => void;
  closeAll?: () => void;
}
