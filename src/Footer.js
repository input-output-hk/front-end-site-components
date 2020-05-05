import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Consumer as LanguageConsumer } from '@input-output-hk/front-end-core-components/components/Language'
import Atala from './footers/Atala'
import Cardano from './footers/Cardano'
import CardanoOrg from './footers/CardanoOrg'
import IOHK from './footers/IOHK'
import Daedalus from './footers/Daedalus'

const FooterContainer = styled.footer`
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`

const RelativeChildren = styled.div`
  position: relative;
`

const footerComponents = {
  atala: Atala,
  cardano: Cardano,
  cardanoorg: CardanoOrg,
  iohk: IOHK,
  daedalus: Daedalus
}

const Footer = ({ variant, children, absoluteChildren, theme = 'dark' }) => {
  const FooterComponent = footerComponents[variant]
  return (
    <LanguageConsumer>
      {({ key } = {}) => (
        <FooterContainer>
          {absoluteChildren}
          <RelativeChildren>
            {children}
            <FooterComponent theme={theme} lang={key || 'en'} />
          </RelativeChildren>
        </FooterContainer>
      )}
    </LanguageConsumer>
  )
}

Footer.propTypes = {
  variant: PropTypes.oneOf([
    'iohk',
    'cardano',
    'cardanoorg',
    'atala',
    'daedalus'
  ]).isRequired,
  children: PropTypes.node,
  absoluteChildren: PropTypes.node,
  theme: PropTypes.oneOf([ 'dark', 'light' ])
}

export default Footer
