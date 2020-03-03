# Styles

The Styles component contains global styles using [styled-components](https://www.npmjs.com/package/styled-components) `createGlobalStyle`. It expects a single `theme` prop which will take the format of an object from one of the themes within [@input-output-hk/front-end-themes](https://www.npmjs.com/package/@input-output-hk/front-end-themes).

## Dependencies

* react `^16.3`
* styled-components `^5.0.1`

## Reference

### Global styles (default export)

| prop name | description | type | required? | default value |
| --------- | ----------- | ---- | --------- | ------------- |
| theme | Theme object with the same structure as one of the themes from [@input-output-hk/front-end-themes](https://www.npmjs.com/package/@input-output-hk/front-end-themes) | `Object` | ✓ | - |

### getFontSize

The exported function `getFontSize` will calculate the font size from 2 numbers and output a string font size in `rem` units. It takes 2 arguments:

* `fontSize` the font size to use for the conversion (optional)
* `baseFontSize` the base font size to convert against

The formula for the calculation when fontSize is a valid number > 0 is `baseFontSize * fontSize / 10`

When fontsize is not a valid number > 0 then the formula is simply `baseFontSize / 10`

## Usage

```JavaScript
import Styles, { getFontSize } from '@input-output-hk/front-end-site-components/components/Styles'
import MyComponent from './MyComponent'

export default () => {
  const theme = {
    ...
  }

  const calculatedFontSize = getFontSize(theme.typography.body.fontSize, theme.typography.baseFontSize)

  return (
    <div>
      <Styles theme={theme} />
      <div>
        <MyComponent fontSize={calculatedFontSize} />
        ...
      </div>
    </div>
  )
}

```
