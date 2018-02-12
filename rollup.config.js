import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: './src/vue-trees.js',
    output: {
      file: 'dist/vue-trees.js',
      format: 'umd'
    },
    plugins: [
        resolve(),
        vue(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup']
        }),
    ],
    moduleName: 'vue-trees'
}