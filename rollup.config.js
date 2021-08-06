import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'test/index.jsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
    },
    {
      file: 'dist/index.min.js',
      format: 'esm',
      plugins: [terser()],
    },
  ],
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      presets: [
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
