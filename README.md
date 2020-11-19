# Tailwind Additional Classes

## Usage

### Dependencies
This project depends on the following libraries to be properly used:
- [Tailwind](https://tailwindcss.com/docs/installation)

### Set Up

- Install the Library with:
  ``` bash
  npm install tailwind-additional-classes
  ```

- Add the [plugins](https://tailwindcss.com/docs/configuration#plugins) configuration for Tailwind:

``` js
// tailwind.config.js
const styles = require('tailwind-additional-classes');

module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [styles.pluginFunction],
}
```
The `styles.pluginFunction` will add the library styles as utilities to the rest of the Tailwind utilities.

You can find more information about writing tailwind plugins [here](https://tailwindcss.com/docs/plugins).

- Apply Styles
  You can apply the styles just like you would with a Tailwind class, all classes from the library are prefixed with `ac-`.

Example inside the library:

```js
".mb-1" {
    marginBottom: '0.25rem';
},


```

Using the classes above in your project:

```html
<button class="ac-mb-1">
  Test Button
</button>
```


## Development


- Must be framework agnostic
- No dependencies

## Test

To test if all the classes are properly included, run

```
npm i
npm run build
node test/test.js
```

This will console the list of classes available, in the near future a documentation with all the classes will be added.