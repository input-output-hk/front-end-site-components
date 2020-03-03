import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from '@input-output-hk/front-end-core-components/components/Image'
import Link from '@input-output-hk/front-end-core-components/components/Link'
import atala from '../resources/footer/atala'

const MainRow = styled.div`
  display: flex;
  margin: 2.8rem 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: ${({ flex }) => flex || 1};

  @media screen and (max-width: 800px) {
    margin: 1rem 0;
    flex: 1;
  }
`

const Logo = styled.div`
  > div {
    width: 100%;
    max-width: 11rem;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    > div {
      margin: 0 auto;
    }
  }
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    &:first-of-type {
      margin-right: 2rem;
    }
  }
`

const Copyright = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    justify-content: center;

    p {
      margin: 0;
    }
  }
`

const Atala = ({ lang, theme }) => {
  const content = atala[lang]
  if (!content) throw new Error(`No content for Atala footer in language "${lang}"`)
  let logoURL = 'https://ucarecdn.com/a2f086e8-2666-418a-a025-8c928040a4b9/'
  if (theme === 'dark') logoURL = 'https://ucarecdn.com/eb936b4a-0589-4e89-b31c-bb1edf90ed9b/'
  return (
    <div>
      <hr />
      <MainRow>
        <Column>
          <Logo>
            <div>
              <Link href='https://atala.io/' rel='noopener'>
                <Image src={logoURL} alt='Atala logo' sizeFactor={0.2} maintainTransparency />
              </Link>
            </div>
          </Logo>
        </Column>
        <Column flex={1.5}>
          <FooterLinks>
            <Link href='#' rel='noopener'>
              {content.termsAndConditions}
            </Link>
            <Link href='#' rel='noopener'>
              {content.privacyPolicy}
            </Link>
          </FooterLinks>
        </Column>
        <Column>
          <Copyright>
            <p>Copyright ® {new Date().getFullYear()} atala.io</p>
          </Copyright>
        </Column>
      </MainRow>
    </div>
  )
}

Atala.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([ 'dark', 'light' ]).isRequired
}

export default Atala
