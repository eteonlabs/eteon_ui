import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@etn/lib/utils.ts';

const eteonLogoVariantConfig = {
    variant: {
        light: [],
        dark: [],
    },
    theme: {
        light: [],
        dark: [],
        primary: [],
        secondary: [],
        success: [],
        warning: [],
        alert: [],
        orange: [],
        yellow: [],
        lime: [],
        cyan: [],
        violet: [],
        purple: [],
        pink: [],
    },
    size: {
        sm: [],
        default: [],
        lg: [],
    },
};

const eteonLogoVariants = cva('', {
    variants: eteonLogoVariantConfig,
    defaultVariants: {
        variant: 'light',
        theme: 'primary',
        size: 'default',
    },
});

export interface EteonLogoProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof eteonLogoVariants> {
    hideText?: boolean;
    subText?: string;
}

const EteonLogo = React.forwardRef<HTMLDivElement, EteonLogoProps>(
    ({ className, variant, theme, size, hideText = false, subText, ...props }, ref) => {
        let innerColor;
        let outerColor;
        let fontSize;
        let fontColor;
        let iconSize;

        switch (theme) {
            case 'light':
                innerColor = 'fill-white';
                break;
            case 'dark':
                innerColor = 'fill-secondary-950';
                break;
            case 'secondary':
                innerColor = 'fill-etn-secondary';
                break;
            case 'success':
                innerColor = 'fill-etn-success';
                break;
            case 'warning':
                innerColor = 'fill-etn-warning';
                break;
            case 'alert':
                innerColor = 'fill-etn-alert';
                break;
            case 'orange':
                innerColor = 'fill-etn-orange';
                break;
            case 'yellow':
                innerColor = 'fill-etn-yellow';
                break;
            case 'lime':
                innerColor = 'fill-etn-lime';
                break;
            case 'cyan':
                innerColor = 'fill-etn-cyan';
                break;
            case 'violet':
                innerColor = 'fill-etn-violet';
                break;
            case 'purple':
                innerColor = 'fill-etn-purple';
                break;
            case 'pink':
                innerColor = 'fill-etn-pink';
                break;
            default:
                innerColor = 'fill-etn-primary';
                break;
        }
        switch (variant) {
            case 'dark':
                outerColor = 'fill-secondary-950';
                fontColor = 'text-secondary-950';
                break;
            default:
                outerColor = 'fill-white';
                fontColor = 'text-white';
                break;
        }
        switch (size) {
            case 'sm':
                fontSize = 'text-lg';
                iconSize = 'h-6 w-6';
                break;
            case 'lg':
                fontSize = 'text-3xl';
                iconSize = 'h-10 w-10';
                break;
            default:
                fontSize = 'text-2xl';
                iconSize = 'h-8 w-8';
                break;
        }

        return (
            <div
                ref={ref}
                className={cn('flex items-center gap-1', className)}
                {...props}
            >
                <svg
                    className={cn(`inline-block`, iconSize)}
                    fill='currentColor'
                    viewBox='0 0 451.6 399.8'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        className={cn(outerColor)}
                        d='M225.5,399.8c-31.7,0-63.3,0-95,0c-13.3,0-23.4-5.7-30.1-17.2C68.5,327.3,36.6,272.1,4.8,216.8
		c-6.4-11.1-6.5-22.6-0.1-33.8c31.8-55.3,63.7-110.5,95.6-165.7C107.1,5.6,117.4,0,130.9,0c63.3,0,126.6,0,190,0
		c13.5,0,23.7,5.7,30.5,17.4c31.8,55.1,63.6,110.2,95.4,165.3c6.5,11.3,6.6,22.9,0.1,34.2c-31.7,55.1-63.6,110.2-95.4,165.3
		c-6.9,11.9-17.2,17.6-30.9,17.6C288.9,399.7,257.2,399.8,225.5,399.8z M225.9,368.7c29.2,0,58.3-0.1,87.5,0.1
		c6.7,0,11.2-2.5,14.6-8.4c29.3-51,58.7-101.9,88.2-152.7c3.1-5.3,3.1-10.1,0-15.4C386.7,141.3,357.3,90.4,328,39.5
		c-3.4-5.9-7.8-8.4-14.6-8.4c-58.5,0.1-117,0.1-175.5,0c-6.5,0-10.9,2.4-14.2,8.1C94.4,90.3,64.9,141.4,35.4,192.4
		c-3,5.2-3,9.8,0,15c29.5,50.9,58.9,101.8,88.1,152.8c3.5,6,8,8.7,15,8.6C167.6,368.6,196.8,368.7,225.9,368.7z'
                    />
                    <path
                        className={cn(innerColor)}
                        d='M299.3,216.9c19.5,0,39,0,58.5,0c8.1,0,10.4,3.6,6.4,10.6c-19.7,34.2-39.5,68.4-59.1,102.6
		c-1.8,3.1-4.1,4.5-7.6,4.5c-39.7,0-79.3,0-119-0.1c-7.4,0-9.5-3.9-5.8-10.4c2.7-4.8,5.6-9.5,8.2-14.3c1.9-3.6,4.5-4.8,8.4-4.8
		c29,0.1,58,0.1,87,0c1.7,0,3.7,0.5,4.9-0.3c1.7-1.1,3.9-3.2,3.9-4.9c0-1.7-2.1-3.8-3.9-4.9c-1.2-0.8-3.2-0.4-4.9-0.4
		c-24.7,0-49.3,0-74,0c-8.5,0-10.6-3.6-6.4-10.8c3.2-5.6,6.7-11.2,9.7-16.9c1.9-3.6,4.5-4.8,8.4-4.8c28.7,0.1,57.3,0.1,86,0.1
		c1.7,0,3.7,0.5,4.9-0.2c2-1.2,4.7-3.3,4.7-5.1c0-1.7-2.8-3.7-4.7-5.1c-1-0.7-2.9-0.2-4.4-0.2c-24.5,0-49,0-73.5,0
		c-8.4,0-10.4-3.6-6.2-11c3.6-6.2,7.3-12.3,10.7-18.6c2-3.7,4.5-5.1,8.8-5.1C259.9,217,279.6,216.9,299.3,216.9z'
                    />
                    <path
                        className={cn(innerColor)}
                        d='M153.7,111.8c-0.9,1.8-1.7,3.8-2.8,5.7c-14.2,24.7-28.4,49.3-42.7,74c-0.7,1.2-1.4,2.3-2,3.5
		c-1.4,2.9-1.3,5.7,1.7,7.4c2.9,1.6,5.5,0.7,7.2-2.2c3.2-5.5,6.4-10.9,9.5-16.4c9.7-16.9,19.4-33.8,29.2-50.6
		c4.3-7.4,8.4-7.4,12.7-0.2c3.2,5.5,6.1,11.1,9.5,16.4c2.3,3.7,2.2,6.9,0,10.6c-14.6,25-29,50.1-43.5,75.2c-0.7,1.2-1.9,2.4-1.8,3.5
		c0.2,2.2,0.6,5.7,2,6.2c1.8,0.7,5.5,0,6.7-1.4c2.8-3.2,4.5-7.3,6.7-11.1c10.9-18.9,21.8-37.8,32.7-56.6c4.1-7,8.2-7,12.4,0
		c3.8,6.5,7.4,13,11.3,19.4c1.8,3,2,5.7,0.2,8.8c-20,34.6-40,69.2-60,103.8c-3.2,5.5-7.8,5.5-11.1-0.1c-20-34.6-40-69.2-60-103.7
		c-1.7-2.9-1.7-5.5,0-8.4c20-34.6,39.9-69.2,60-103.8c3.2-5.6,7.8-5.6,11.1-0.1c3.1,5.1,6,10.4,9,15.6
		C152.5,108.7,153,110.1,153.7,111.8z'
                    />
                    <path
                        className={cn(innerColor)}
                        d='M299.2,182.9c-19.7,0-39.3-0.1-59,0.1c-4,0-6.5-1.3-8.5-4.7c-19.7-34.4-39.6-68.7-59.4-103
		c-3.4-5.8-1.1-9.9,5.7-9.9c39.8-0.1,79.7,0,119.5-0.1c3.5,0,5.9,1.4,7.6,4.5c3.7,6.7,7.6,13.3,11.4,19.9c3.7,6.4,1.5,10.3-5.9,10.3
		c-24.8,0.1-49.7,0-74.5,0c-1.5,0-3.3-0.5-4.4,0.2c-1.9,1.2-4.3,3-4.6,4.8c-0.2,1.5,2,3.8,3.7,5c1.1,0.8,3.2,0.5,4.8,0.5
		c28.5,0,57,0.2,85.5-0.1c5.6-0.1,8.9,1.7,11.4,6.7c2.7,5.5,6.2,10.7,9.1,16.1c3.2,5.9,1,9.7-5.8,9.8c-25,0.1-50,0-75,0
		c-1.5,0-3.4-0.5-4.4,0.2c-1.9,1.2-4.4,3.2-4.5,4.8c0,1.8,2.3,3.9,4.1,5.2c1.1,0.8,3.2,0.3,4.9,0.3c28.5,0,57,0.1,85.5-0.1
		c5,0,8.2,1.3,10.4,5.8c2.3,4.6,5.1,9,7.6,13.5c3.4,6.2,1.2,10-5.8,10C338.8,182.9,319,182.9,299.2,182.9z'
                    />
                </svg>
                {!hideText && (
                    <div className={cn('flex font-eteon', fontSize, fontColor)}>
                        <div className='font-bold'>ETEON</div>
                        {subText && <div className={'font-thin'}>{subText}</div>}
                    </div>
                )}
            </div>
        );
    },
);
EteonLogo.displayName = 'EteonLogo';

export { EteonLogo, eteonLogoVariants, eteonLogoVariantConfig };
