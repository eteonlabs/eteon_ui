import type { Preview } from '@storybook/react';
import '../src/index.css';
import { themes } from '@storybook/theming';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';
import React from 'react';

console.log(React.version);

const preview: Preview = {
    parameters: {
        docs: {
            theme: themes.dark,
            toc: {
                disable: false,
                headingSelector: 'h2, h3',
                ignoreSelector: '.docs-story h2, .docs-story h3',
            },
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <Controls />
                    <Stories />
                </>
            ),
        },
        options: {
            storySort: {
                method: 'alphabetical',
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: { default: 'dark' },
    },
};

export default preview;
