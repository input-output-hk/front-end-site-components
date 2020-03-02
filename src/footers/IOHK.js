import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from '@input-output-hk/front-end-core-components/components/Image'
import iohk from '../resources/footer/iohk'

const Container = styled.div`
  display: flex;
  margin: 2.8rem 0;
`

const FirstSection = styled.div`
  flex: 1;
  padding-right: 4rem;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    padding-right: 0;
    margin-bottom: 4rem;
  }
`

const LastSection = styled.div`
  flex: 2;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
`

const Logo = styled.div`
  > div {
    width: 100%;
    max-width: 20rem;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 960px) {
    flex: 1;
          
    > div {
      margin: 0 auto;
    }
  }
`

const LinksRow = styled.div`
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 960px) {
    max-width: 700px;
    flex: 1;
  }

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`

const LinksColumn = styled.div`
  flex: 1;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0.6rem 0;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 960px) {
    ul {
      text-align: center;
    }
  }

  @media screen and (max-width: 700px) {
    flex-basis: 50%;
    margin: 1.6rem 0;
  }

  @media screen and (max-width: 450px) {
    flex-basis: 100%;
  }
`

const IOHK = ({ lang, theme }) => {
  const content = iohk[lang]
  if (!content) throw new Error(`No content for IOHK footer in language "${lang}"`)
  const logoURL = 'https://ucarecdn.com/306dc384-d0ae-479a-9b7e-2814fbeaea9b/'
  return (
    <div>
      <hr />
      <Container>
        <FirstSection>
          <Logo>
            <div>
              <a href='https://iohk.io/' rel='noopener'>
                <Image src={logoURL} alt='IOHK logo' sizeFactor={0.14} maintainTransparency />
              </a>
            </div>
          </Logo>
        </FirstSection>
        <LastSection>
          <LinksRow>
            {content.links.map(column => (
              <LinksColumn key={JSON.stringify(column)}>
                <ul>
                  {column.map(({ label, href }) => (
                    <li key={`${label}_${href}`}><a href={href} rel='noopener'>{label}</a></li>
                  ))}
                </ul>
              </LinksColumn>
            ))}
          </LinksRow>
        </LastSection>
      </Container>
    </div>
  )
}

IOHK.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([ 'dark', 'light' ]).isRequired
}

export default IOHK
