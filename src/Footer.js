import React from 'react'
import PropTypes from 'prop-types'
import { Consumer as LanguageConsumer } from '@input-output-hk/front-end-core-components/components/Language'
import Atala from './footers/Atala'
import Cardano from './footers/Cardano'
import IOHK from './footers/IOHK'

const footerComponents = {
  atala: Atala,
  cardano: Cardano,
  iohk: IOHK
}

const Footer = ({ variant, children, absoluteChildren, theme = 'dark' }) => {
  const FooterComponent = footerComponents[variant]
  return (
    <LanguageConsumer>
      {({ key } = {}) => (
        <footer id='fesc-footer'>
          {absoluteChildren}
          <div id='fesc-footer-relative-container'>
            {children}
            <FooterComponent theme={theme} lang={key || 'en'} />
          </div>
        </footer>
      )}
    </LanguageConsumer>
  )
}

Footer.propTypes = {
  variant: PropTypes.oneOf([
    'iohk',
    'cardano',
    'atala'
  ]).isRequired,
  children: PropTypes.node,
  absoluteChildren: PropTypes.node,
  theme: PropTypes.oneOf([ 'dark', 'light' ])
}

export default Footer
