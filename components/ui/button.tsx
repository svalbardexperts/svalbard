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
          'text-primaryText text-[22px] font-medium border-solid border-[3px] border-primaryText flex items-center justify-between hover:bg-[#D1D9F466] relative',
        primary:
          'md:py-2 py-1 md:pr-2 pr-1 md:pl-9 pl-3 flex items-center justify-between md:gap-9 gap-3 bg-[#FBFDFC] text-black md:rounded-lg rounded-sm md:text-[22px] text-[15px] md:leading-[33px] leading-6 md:font-medium font-normal',
        secondary:
          'md:py-2 py-1 md:pr-2 pr-1 md:pl-9 pl-3 flex items-center justify-between md:gap-9 gap-3 text-primaryText md:rounded-lg rounded-sm md:text-[22px] text-[15px] mkd:leading-[33px] leading-6 md:font-medium font-normal bg-gradient-linear',

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
        lg: 'md:w-[285px] h-[156px] md:h-[72px] h-[36px]',
        md: 'md:w-[267px] w-[145px] md:h-[72px] h-[36px]',
        icon: '',
        outline: 'w-[253px] p-[10px] pl-8',
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
