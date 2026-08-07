import { createRef } from 'react';
import { makeAutoObservable, observable } from 'mobx';
import type {
  BaseChildrenMethods,
  BaseModal,
  ModalContext,
  ModalOpenProps,
} from './modal.types';

export class ModalStore<Modal extends BaseModal> implements ModalContext<
  Modal,
  ModalOpenProps<Modal>
> {
  modals: Modal[] = [];

  constructor() {
    makeAutoObservable(this, {
      modals: observable.ref,
    });
  }

  // добавляем в DOM
  open = <T extends ModalOpenProps<Modal>>(props: T) => {
    if (this.getModalById(props.id)) return;

    const childRef = createRef<BaseChildrenMethods>();

    this.modals = [
      ...this.modals,
      {
        ...props,
        ref: childRef,
      },
    ] as Modal[];
  };

  // тригерим  handleCLose
  close = (id: string) => {
    const modal = this.getModalById(id);
    modal?.ref.current?.handleClose();
  };

  // тригерим  handleCLose у всех
  closeAll = () => {
    this.modals.forEach((m) => m.ref.current?.handleClose());
  };

  getModalById = (id: string) => {
    return this.modals.find((m) => m.id === id);
  };

  // очистка из Dom , тригер колбека перед удалением
  cleanUpModal = (id: string) => {
    const modal = this.getModalById(id);
    modal?.onCloseFn?.(id);

    this.modals = this.modals.filter((m) => m.id !== id);
  };

  get fadeModals() {
    return this.modals.filter((m) => m.type === 'fade');
  }

  get bsmModals() {
    return this.modals.filter((m) => m.type === 'bsm');
  }
}

export const modalStore = new ModalStore();
