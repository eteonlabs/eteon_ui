import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@etn/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariantConfig = {
    variant: {
        solid: ['bg-opacity-100', 'hover:bg-opacity-80'],
        soft: ['bg-opacity-25', 'hover:bg-opacity-40'],
        surface: [
            'border-2',
            'border-opacity-75',
            'hover:border-opacity-100',
            'bg-opacity-15',
            'hover:bg-opacity-25',
        ],
        outline: ['bg-opacity-0', 'border-2', 'border-opacity-75', 'hover:border-opacity-100'],
        ghost: ['bg-opacity-0', 'hover:bg-opacity-25'],
    },
    theme: {
        primary: ['bg-etn-primary', 'border-etn-primary', 'text-etn-primary-50'],
        secondary: ['bg-etn-secondary-400', 'border-etn-secondary-400', 'text-etn-secondary-50'],
        success: ['bg-etn-success', 'border-etn-success', 'text-etn-success-50'],
        warning: ['bg-etn-warning', 'border-etn-warning', 'text-etn-warning-950'],
        alert: ['bg-etn-alert', 'border-etn-alert', 'text-etn-alert-50'],
        orange: ['bg-etn-orange', 'border-etn-orange', 'text-etn-orange-50'],
        yellow: ['bg-etn-yellow', 'border-etn-yellow', 'text-etn-yellow-950'],
        lime: ['bg-etn-lime', 'border-etn-lime', 'text-etn-lime-950'],
        cyan: ['bg-etn-cyan', 'border-etn-cyan', 'text-etn-cyan-950'],
        violet: ['bg-etn-violet', 'border-etn-violet', 'text-etn-violet-50'],
        purple: ['bg-etn-purple', 'border-etn-purple', 'text-etn-purple-50'],
        pink: ['bg-etn-pink', 'border-etn-pink', 'text-etn-pink-50'],
    },
    size: {
        sm: 'h-6 rounded-sm text-sm px-2',
        default: 'h-8 rounded-sm text-sm px-3',
        lg: 'h-10 rounded-sm text-base px-4',
    },
};
const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
    {
        variants: buttonVariantConfig,
        defaultVariants: {
            variant: 'solid',
            theme: 'primary',
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
    ({ className, variant, theme, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ theme, variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants, buttonVariantConfig };
