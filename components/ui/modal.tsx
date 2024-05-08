import React, { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Contact } from '../Form/Contact';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='dialog-z h-[500px] !max-w-full md:!w-[1000px] !w-[95%] overflow-x-hidden bg-dialog-image bg-center bg-no-repeat bg-cover rounded-md'>
        {/* Dialogue form */}
        <div className='md:pt-10 pt-4 md:pb-[70px] pb-12'>
          <h3 className='md:text-[66px] text-2xl md:leading-[58px] leading-5 text-white font-bold text-center'>
            Get in touch!
          </h3>
          <p className='md:text-[22px] text-[13px] text-center text-white font-normal mt-3 mb-8'>
            Have something to ask us? We’d love to hear about it!
          </p>
          <div className='md:w-[520px] w-[90%] mx-auto grid flex-1 gap-2'>
            <Contact />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
