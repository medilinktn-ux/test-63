import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      type: {
        text: 'text-slate-500',
        email: 'text-slate-500',
        password: 'text-slate-500',
      },
      size: {
        sm: 'h-8 py-1 px-2 text-sm',
        md: 'h-10 py-2 px-3 text-base',
        lg: 'h-12 py-3 px-4 text-lg',
      },
      state: {
        error: 'border-red-500 ring-red-500',
        success: 'border-green-500 ring-green-500',
      },
    },
    defaultVariants: {
      type: 'text',
      size: 'md',
      state: 'default',
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'> & VariantProps<typeof inputVariants>>(
  ({ className, type, size, state, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ type, size, state }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
export { Input };