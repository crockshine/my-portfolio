'use client';

import { Dialog, DialogContent } from '@/components/core';
import { cn } from '@/shared/lib';
import type { BaseModal } from '@/shared/store';
import { observer } from 'mobx-react-lite';
import { FC, useEffect, useImperativeHandle, useState } from 'react';
import s from './FadeModalWrapper.module.css';

export const FadeModalWrapper: FC<{
  modal: BaseModal & { showPrimaryGradient?: boolean; className?: string };
  onClose: (id: string) => void;
}> = observer(({ modal, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose(modal.id);
  };

  useImperativeHandle(modal.ref, () => ({
    handleClose,
  }));

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(state) => {
        if (!state) handleClose();
        setIsOpen(state);
      }}
    >
      <DialogContent
        className={cn(
          'w-max max-w-[90vw] p-0 bg-transparent shadow-none',
          modal.className,
        )}
      >
        <div className={s.container}>{modal.content}</div>
      </DialogContent>
    </Dialog>
  );
});
