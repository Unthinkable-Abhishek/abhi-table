import { defineConfig } from "rollup";
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';

export default defineConfig({
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'es',
        name: 'abhi-table'
    },
    external: ['react', 'react-dom', 'storybook'],
    plugins: [
        resolve({ extensions: ['.js', '.jsx'] }),  // Resolving .js and .jsx files
        commonjs(),  
        postcss(),                               // Convert CommonJS modules to ES6
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg'],  // Handle static asset imports
            limit: 0,            // Ensure files are copied instead of inlined as base64
            fileName: 'assets/sortByIcons.png',  // Name for copied assets
        }),
        babel({
            presets: ['@babel/preset-react'], // Ensure JSX is compiled
            extensions: ['.js', '.jsx'],
            exclude: 'node_modules/**'
        })
    ]
})