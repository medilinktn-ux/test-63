import React from 'react';
import { Input as ShadcnInput } from '@shadcn/ui';

interface InputProps {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  size,
  variant,
  disabled,
  fullWidth,
}) => {
  return (
    <ShadcnInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
    />
  );
};

export default Input;
