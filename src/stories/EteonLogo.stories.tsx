import type { Meta, StoryObj } from '@storybook/react';
import { EteonLogo, eteonLogoVariantConfig } from '@etn/components';

const meta = {
    title: 'Components/ETEON Logo',
    component: EteonLogo,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            options: Object.keys(eteonLogoVariantConfig.size),
            control: { type: 'select' },
        },
        variant: {
            options: Object.keys(eteonLogoVariantConfig.variant),
            control: { type: 'select' },
        },
        theme: {
            options: Object.keys(eteonLogoVariantConfig.theme),
            control: { type: 'select' },
        },
        hideText: {
            control: { type: 'boolean' },
        },
        subText: {
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof EteonLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (args) => <EteonLogo {...args} />,
};

export const Variants: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => (
        <div className={'flex items-center justify-center gap-4'}>
            {Object.keys(eteonLogoVariantConfig.variant).map((variant) => (
                <EteonLogo
                    {...args}
                    key={variant}
                    variant={variant as any}
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
            {Object.keys(eteonLogoVariantConfig.size).map((size) => (
                <EteonLogo
                    {...args}
                    key={size}
                    size={size as any}
                />
            ))}
        </div>
    ),
};
export const Themes: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => (
        <div className={'grid items-center justify-center gap-4 grid-cols-4'}>
            {Object.keys(eteonLogoVariantConfig.theme).map((theme) => (
                <EteonLogo
                    {...args}
                    key={theme}
                    theme={theme as any}
                />
            ))}
        </div>
    ),
};
export const ExampleIconOnly: Story = {
    args: {
        ...Default.args,
        hideText: true,
    },
    render: (args) => <EteonLogo {...args} />,
};
export const ExampleWithSubText: Story = {
    args: {
        ...Default.args,
        subText: 'Accounting',
    },
    render: (args) => <EteonLogo {...args} />,
};
