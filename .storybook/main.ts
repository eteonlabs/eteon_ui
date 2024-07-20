import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'node:path';

const config: StorybookConfig = {
    stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    viteFinal: (vtConfig) => {
        vtConfig.plugins?.push(
            tsconfigPaths({
                projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
            }),
        );
        return vtConfig;
    },
};
export default config;
