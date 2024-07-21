import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    resolve: {
        alias: {
            '@etn': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            name: 'EteonUI',
            formats: ['es', 'cjs'],
            fileName: 'eteon-ui',
        },
        rollupOptions: {
            external: [...Object.keys(peerDependencies)],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        target: 'esnext',
        sourcemap: true,
    },
    plugins: [
        react(),
        tsconfigPaths(),
        dts({
            staticImport: true,
            insertTypesEntry: true,
            rollupTypes: true,
            logLevel: 'info',
        }),
    ],
});
