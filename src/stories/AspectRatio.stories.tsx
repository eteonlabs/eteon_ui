import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@etn/components';

const meta = {
    title: 'Components/AspectRatio',
    component: AspectRatio,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (args) => (
        <AspectRatio
            ratio={16 / 9}
            className="bg-muted"
            {...args}
        >
            <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt={'A random image'}
                height={'250px'}
                width={'5000px'}
                className="rounded-md object-cover"
            />
        </AspectRatio>
    ),
};
