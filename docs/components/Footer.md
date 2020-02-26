# Footer

The Footer component encapsulates multiple IOHK brands for universal footers across all web assets. Theming is inherited with minimal CSS for layout included in a separate CSS file.

Language is inherited from the Language provider within [@input-output-hk/front-end-core-components](https://github.com/input-output-hk/front-end-core-components/blob/master/docs/components/Language.md).

## Dependencies

* react `^16.3`
* react-icons `^3.9.0`
* @input-output-hk/front-end-core-components `^0.1.2`

## Reference

| prop name | description | type | required? | default value |
| --------- | ----------- | ---- | --------- | ------------- |
| variant | The variant of footer to render | `String<atala\|cardano\|iohk>` | ✓ | - |
| children | Child nodes rendered relative to the parent footer | `Node` | ✗ | - |
| absoluteChildren | Child nodes rendered absolute to the parent footer | `Node` | ✗ | - |
| theme | How to theme the footer, mainly images | `String<dark\|light>` | ✗ | dark |

## Usage

### Atala

The Atala footer supports the following languages:

* en (English)

```JavaScript
import React from 'react'
import Footer from '@input-output-hk/front-end-site-components/components/Footer'

export default () => (
  <Footer variant='atala' />
)

```

### Cardano

The Cardano footer supports the following languages:

* en (English)
* ja (Japanese)
* ko (Korean)
* zh-cn (Chinese Simplified)

```JavaScript
import React from 'react'
import Footer from '@input-output-hk/front-end-site-components/components/Footer'

export default () => (
  <Footer variant='cardano' />
)

```

### IOHK

The IOHK footer supports the following languages:

* en (English)

```JavaScript
import React from 'react'
import Footer from '@input-output-hk/front-end-site-components/components/Footer'

export default () => (
  <Footer variant='iohk' />
)

```
