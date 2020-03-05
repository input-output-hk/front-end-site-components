# Styles

The Styles component contains global styles using [styled-components](https://www.npmjs.com/package/styled-components) `createGlobalStyle`. It expects a single `theme` prop which will take the format of an object from one of the themes within [@input-output-hk/front-end-themes](https://www.npmjs.com/package/@input-output-hk/front-end-themes).

## Dependencies

* react `^16.3`
* styled-components `^5.0.1`

## Reference

| prop name | description | type | required? | default value |
| --------- | ----------- | ---- | --------- | ------------- |
| theme | Theme object with the same structure as one of the themes from [@input-output-hk/front-end-themes](https://www.npmjs.com/package/@input-output-hk/front-end-themes) | `Object` | ✓ | - |

## Usage

```JavaScript
import Styles from '@input-output-hk/front-end-site-components/components/Styles'

export default () => {
  const theme = {
    ...
  }

  return (
    <div>
      <Styles theme={theme} />
      <div>
        ...
      </div>
    </div>
  )
}

```
