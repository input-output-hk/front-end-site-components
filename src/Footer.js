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

const Footer = ({ variant, children }) => {
  const FooterComponent = footerComponents[variant]
  return (
    <LanguageConsumer>
      {({ lang } = {}) => (
        <FooterComponent lang={lang}>
          {children}
        </FooterComponent>
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
  children: PropTypes.node
}

export default Footer
