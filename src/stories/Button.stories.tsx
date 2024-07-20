import type { Meta, StoryObj } from '@storybook/react';
import { Button, buttonVariantConfig } from '@etn/components';
import { FaArrowRight, FaRegEnvelope } from 'react-icons/fa6';
import { LuLoader } from 'react-icons/lu';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            options: Object.keys(buttonVariantConfig.size),
            control: { type: 'select' },
        },
        variant: {
            options: Object.keys(buttonVariantConfig.variant),
            control: { type: 'select' },
        },
        theme: {
            options: Object.keys(buttonVariantConfig.theme),
            control: { type: 'select' },
        },
    },
    args: {
        onClick: (e) => e.preventDefault(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        size: 'default',
        variant: 'solid',
        theme: 'primary',
        children: 'Button',
    },
};

export const Variants: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => (
        <div className={'flex items-center justify-center gap-4'}>
            {Object.keys(buttonVariantConfig.variant).map((variant) => (
                <Button
                    key={variant}
                    {...args}
                    variant={variant as any}
                    children={variant.toUpperCase()}
                />
            ))}
        </div>
    ),
};
export const Sizes: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => (
        <div className={'flex items-center justify-center gap-4'}>
            {Object.keys(buttonVariantConfig.size).map(
                (size) =>
                    size !== 'icon' && (
                        <Button
                            key={size}
                            {...args}
                            size={size as any}
                            children={size.toUpperCase()}
                        />
                    ),
            )}
        </div>
    ),
};
export const Themes: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => (
        <div className={'grid items-center justify-center gap-4 grid-cols-4'}>
            {Object.keys(buttonVariantConfig.theme).map((theme) => (
                <Button
                    key={theme}
                    {...args}
                    theme={theme as any}
                    children={theme.toUpperCase()}
                />
            ))}
        </div>
    ),
};

export const ExampleIcon: Story = {
    args: {
        variant: 'solid',
    },
    render: (args) => (
        <Button {...args}>
            <FaArrowRight />
        </Button>
    ),
};
export const ExampleWithIcon: Story = {
    args: {
        variant: 'solid',
    },
    render: (args) => (
        <Button {...args}>
            <FaRegEnvelope className={'mr-2'} /> Login with Email
        </Button>
    ),
};
export const ExampleLoading: Story = {
    args: {
        variant: 'solid',
    },
    render: (args) => (
        <Button
            {...args}
            disabled
        >
            <LuLoader className={'mr-2 animate-spin'} /> Please wait
        </Button>
    ),
};

export const ExampleAsChild: Story = {
    args: {
        variant: 'solid',
    },
    render: (args) => (
        <Button
            {...args}
            asChild
        >
            <a href={'#'}>Button</a>
        </Button>
    ),
};
