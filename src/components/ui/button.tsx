import React from 'react';
import { Button as ShadcnButton } from '@shadcn/ui';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, size, onClick, disabled, children }) => {
  return (
    <ShadcnButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;
