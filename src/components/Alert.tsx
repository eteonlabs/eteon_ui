import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@etn/lib/utils';

const alertVariantsConfig = {
    variant: {
        solid: ['bg-opacity-100'],
        soft: ['bg-opacity-25'],
    },
    theme: {
        primary: [
            'bg-etn-primary',
            'border-etn-primary',
            'text-etn-primary-50',
            '[&>svg]:text-etn-primary-50',
        ],
        secondary: [
            'bg-etn-secondary-400',
            'border-etn-secondary-400',
            'text-etn-secondary-50',
            '[&>svg]:text-etn-secondary-50',
        ],
        success: [
            'bg-etn-success',
            'border-etn-success',
            'text-etn-success-50',
            '[&>svg]:text-etn-success-50',
        ],
        warning: [
            'bg-etn-warning',
            'border-etn-warning',
            'text-etn-warning-950',
            '[&>svg]:text-etn-warning-950',
        ],
        alert: [
            'bg-etn-alert',
            'border-etn-alert',
            'text-etn-alert-50',
            '[&>svg]:text-etn-alert-50',
        ],
        orange: [
            'bg-etn-orange',
            'border-etn-orange',
            'text-etn-orange-50',
            '[&>svg]:text-etn-orange-50',
        ],
        yellow: [
            'bg-etn-yellow',
            'border-etn-yellow',
            'text-etn-yellow-950',
            '[&>svg]:text-etn-yellow-950',
        ],
        lime: ['bg-etn-lime', 'border-etn-lime', 'text-etn-lime-950', '[&>svg]:text-etn-lime-950'],
        cyan: ['bg-etn-cyan', 'border-etn-cyan', 'text-etn-cyan-950', '[&>svg]:text-etn-cyan-950'],
        violet: [
            'bg-etn-violet',
            'border-etn-violet',
            'text-etn-violet-50',
            '[&>svg]:text-etn-violet-50',
        ],
        purple: [
            'bg-etn-purple',
            'border-etn-purple',
            'text-etn-purple-50',
            '[&>svg]:text-etn-purple-50',
        ],
        pink: ['bg-etn-pink', 'border-etn-pink', 'text-etn-pink-50', '[&>svg]:text-etn-pink-50'],
    },
};

const alertVariants = cva(
    'relative w-full rounded-lg p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 dark:border-slate-800 dark:[&>svg]:text-slate-50',
    {
        variants: alertVariantsConfig,
        defaultVariants: {
            theme: 'primary',
            variant: 'solid',
        },
    },
);

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, theme, ...props }, ref) => (
    <div
        ref={ref}
        role='alert'
        className={cn(alertVariants({ theme, variant }), className)}
        {...props}
    />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h5
            ref={ref}
            className={cn('mb-1 font-medium leading-none tracking-tight', className)}
            {...props}
        />
    ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-sm [&_p]:leading-relaxed', className)}
        {...props}
    />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, alertVariants, alertVariantsConfig };
