import multi from "@rollup/plugin-multi-entry";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: ["src/index.js", "src/**/**/*.js", "src/**/*.js", "src/*.js"],
  exclude: ["test/*"],
  output: [
    {
      //   dir: "dist",
      file: "main.js",
      format: "cjs",
      name: "stylesLib",
      interop: "auto",
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    multi(),
    babel({
      babelHelpers: "runtime",
      exclude: [/\/core-js\//],
    }),
  ],
};
