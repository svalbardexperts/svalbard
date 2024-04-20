import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-drop-shadow',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 !rounded-md ',
        outline:
          'text-primaryText text-[22px] font-medium border-solid border-[3px] border-primaryText flex items-center justify-between hover:bg-[#D1D9F466] ',
        primary:
          'py-2 pr-2 pl-9 flex items-center justify-between gap-9 bg-[#FBFDFC] text-black rounded-lg text-[22px] leading-[33px] font-medium',
        secondary:
          'py-2 pr-2 pl-9 flex items-center justify-between gap-9 text-primaryText rounded-lg text-[22px] leading-[33px] font-medium bg-gradient-linear',

        'phone-outline':
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground ',

        submit:
          'p-[14px] w-full rounded-md bg-base text-[15px] text-white font-normal leading-6',

        paginate:
          ' !gap-8  !py-[26px] !pl-[26px] !pr-[6px] bg-base flex !items-center !justify-between rounded-[10px] drop-shadow',

        link: ' ',
      },
      size: {
        default: 'h-10 px-4 py-2',
        lg: 'w-[285px] h-[72px]',
        md: 'w-[267px] h-[72px]',
        icon: '',
        outline: 'w-[253px] h-[76px] p-[10px] pl-8',
        input: 'md:h-[55px] h-[44px]  w-[115px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
