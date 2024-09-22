import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import url from '@rollup/plugin-url';

const isWatchMode = process.env.ROLLUP_WATCH === 'true';

export default {
  input: 'index.tsx',
  output: [
    {
      file: 'public/bundle.js',
      format: 'iife',
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'), // Replace process.env.NODE_ENV
      preventAssignment: true, // Prevent unwanted assignments
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    url({
      include: ['**/*.svg'], // Specify that this plugin should handle .svg files
      limit: 8192, // Inline files smaller than 8 KB, larger files are copied
      emitFiles: true, // Emit files that exceed the size limit
    }),
    isWatchMode &&
      serve({
        open: true,
        contentBase: ['.'],
        port: 3000,
      }),
    isWatchMode &&
      livereload({
        watch: 'dist',
      }),
    terser(),
  ],
};
