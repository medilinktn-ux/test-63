import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@shadcn/ui';

interface DialogProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const openDialog = (title: string, content: string) => {
    setTitle(title);
    setContent(content);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const DialogComponent = () => {
    if (!isOpen) return null;

    return (
      <Dialog
        open={isOpen}
        onClose={closeDialog}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return { openDialog, DialogComponent };
};

export default useDialog;
