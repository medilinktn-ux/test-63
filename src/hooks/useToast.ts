import { useState, useEffect } from 'react';
import { Toast, ToastTitle, ToastMessage } from '@shadcn/ui';

const useToast = () => {
  const [toast, setToast] = useState({
    open: false,
    title: '',
    message: '',
    type: 'success',
  });

  const showToast = (title: string, message: string, type: 'success' | 'error' | 'warning' = 'success') => {
    setToast({ open: true, title, message, type });
  };

  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  useEffect(() => {
    if (toast.open) {
      const timer = setTimeout(handleClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.open]);

  return {
    toast,
    showToast,
    handleClose,
  };
};

export default useToast;
