import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const config = {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve(
            '@skeletonlabs/skeleton/package.json'),
            '../**/*.{html,js,svelte,ts}'
        )
    ],
    theme: {
        extend: {
            colors: {
                wildhunt: {
                    teal: '#2F5D62',
                    red: '#C0392B',
                    beige: '#F5F5DC',
                    grey: '#9CA3AF',
                    black: '#1a202c', // Slate-900 equivalent but tunable
                    white: '#ffffff',
                }
            }
        },
    },
    plugins: [
        skeleton({
            themes: { preset: ["skeleton"] }
        })
    ]
} satisfies Config;

export default config;
