import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'test/index.jsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.min.js',
      format: 'esm',
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    sourcemaps(),
    resolve(),
    filesize({
      showBrotliSize: true,
      showGzippedSize: false,
      showMinifiedSize: false,
    }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        // '@babel/preset-env',
        [
          '@babel/preset-react',
          {
            throwIfNamespace: false,
            runtime: 'automatic',
            importSource: 'million',
          },
        ],
      ],
      plugins: ['@babel/plugin-transform-react-constant-elements'],
    }),
  ],
};
