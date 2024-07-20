import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

export default defineConfig({
    plugins: [react(), dts()],
    resolve: {
        alias: {
            '@etn': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            formats: ['es', 'cjs'],
            name: 'EteonUI',
            fileName: (format) => `eteon-ui.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(peerDependencies)],
        },
        target: 'esnext',
        sourcemap: true,
    },
});
