import { Alert, AlertDescription, AlertTitle, alertVariantsConfig } from '@etn/components';
import type { Meta, StoryObj } from '@storybook/react';
import { LuTerminal } from 'react-icons/lu';

const meta = {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        variant: {
            options: Object.keys(alertVariantsConfig.variant),
            control: { type: 'select' },
        },
        theme: {
            options: Object.keys(alertVariantsConfig.theme),
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'solid',
    },
    render: (args) => (
        <Alert {...args}>
            <LuTerminal className='h-4 w-4' />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
    ),
};
export const Variants: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => (
        <div className={'flex flex-col items-center justify-center gap-4'}>
            {Object.keys(alertVariantsConfig.variant).map((variant) => (
                <Alert
                    {...args}
                    variant={variant as any}
                    key={variant}
                >
                    <LuTerminal className='h-4 w-4' />
                    <AlertTitle>{variant.toUpperCase()}</AlertTitle>
                    <AlertDescription>
                        You can add components to your app using the cli.
                    </AlertDescription>
                </Alert>
            ))}
        </div>
    ),
};
export const Themes: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => (
        <div className={'flex flex-col items-center justify-center gap-4 grid-cols-4'}>
            {Object.keys(alertVariantsConfig.theme).map((theme) => (
                <Alert
                    {...args}
                    theme={theme as any}
                    key={theme}
                >
                    <LuTerminal className='h-4 w-4' />
                    <AlertTitle>{theme.toUpperCase()}</AlertTitle>
                    <AlertDescription>
                        You can add components to your app using the cli.
                    </AlertDescription>
                </Alert>
            ))}
        </div>
    ),
};
