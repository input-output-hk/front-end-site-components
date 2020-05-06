import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaTwitter, FaFacebookF, FaYoutube, FaRss } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'
import Link from '@input-output-hk/front-end-core-components/components/Link'
import cardano from '../resources/footer/cardano-org'

const Circle = styled.span`
  display:inline-block;
  background:#667FF4;
  color:#f1f2f2;
  width:3rem;
  height:3rem;
  border-radius:5rem;
  text-align:center;
  line-height:2.2;
  margin:0 .2rem 0 0;
`

const Container = styled.div`
  margin: 3rem 0;
  font-size:1.6rem;
  a {
    color:#667FF4;
  }
`

const Columns = styled.div`
  padding:1rem 0 2rem 0;
  div {
    vertical-align:top;
    ul {
      list-style-type:none;
      padding:0;
      line-height:2;
    }
  }
`

const LogoColumn = styled.div`
  display:inline-block;
  width:8.33%;
  @media (max-width:800px) {
    text-align:center;
    width:100%;
  }
`

const MainColumn = styled.div`
  display:inline-block;
  width:30%;
  @media (max-width:1080px) {
    width:40%;
  }
  @media (max-width:860px) {
    width:50%;
  }
  @media (max-width:800px) {
    width:100%;
  }
  ul {
    li {
      h3 {
        margin:.5rem 0;
      }
    }
  }
`

const LinksColumn = styled.div`
  display:inline-block;
  width:60%;
  @media (max-width:1080px) {
    width:50%;
  }
  @media (max-width:860px) {
    width:41%;
  }
  @media (max-width:800px) {
    width:100%;
  }
`

const Links = styled.div`
  display:inline-block;
  width:33%;
`

const SocialLinks = styled.div`
  display: flex;
`

const SocialLink = styled.div`
  flex-direction: column;
  justify-content: center;
  padding-right: 1rem;
  .github {
    display:inline-block;
    margin:-.8rem 0 0 -.5rem;
    line-height:1;
  }
`

const BottomLinks = styled.ul`
margin:2rem 0 0;
  li {
    display:inline-block;
    margin:0 2rem 0 0;
  }
`

const CardanoOrg = ({ lang, theme }) => {
  const content = cardano[lang]
  if (!content) throw new Error(`No content for Cardano footer in language "${lang}"`)
  let logoURL = 'https://ucarecdn.com/17a33054-2c9b-4e8a-b072-48a87a7f917c/cardanowhite.png'
  if (theme === 'dark') logoURL = 'https://ucarecdn.com/1958a2aa-cf35-4aa3-a4b6-ed34b726c3de/cardano.png'
  return (
    <Container>
      <Columns>
        <LogoColumn>
          <img src={logoURL} alt='Cardano' width='70' />
        </LogoColumn>
        <MainColumn>
          <p><strong>{content.browseLinks.title}</strong></p>
          <ul>
            {content.browseLinks.links.map(({ href, label }) => (
              <li key={`${href}_${label}`}><h3><Link href={href} rel='noopener'>{label}</Link></h3></li>
            ))}
          </ul>
        </MainColumn>
        <LinksColumn>
          <Links>
            <p><strong>{content.mediaLinks.title}</strong></p>
            <ul>
              {content.mediaLinks.links.map(({ href, label }) => (
                <li key={`${href}_${label}`}><Link href={href} rel='noopener'>{label}</Link></li>
              ))}
            </ul>
          </Links>
          <Links>
            <p><strong>{content.supportLinks.title}</strong></p>
            <ul>
              {content.supportLinks.links.map(({ href, label }) => (
                <li key={`${href}_${label}`}><Link href={href} rel='noopener'>{label}</Link></li>
              ))}
            </ul>
          </Links>
          <Links>
            <p><strong>{content.communityLinks.title}</strong></p>
            <ul>
              {content.communityLinks.links.map(({ href, label }) => (
                <li key={`${href}_${label}`}><Link href={href} rel='noopener'>{label}</Link></li>
              ))}
            </ul>
          </Links>
        </LinksColumn>
      </Columns>
      <Columns>
        <LogoColumn>
          &nbsp;
        </LogoColumn>
        <MainColumn>
          <p><strong>{content.partnersLinks.title}</strong></p>
          <ul>
            {content.partnersLinks.links.map(({ href, label }) => (
              <li key={`${href}_${label}`}><h3><Link href={href} rel='noopener'>{label}</Link></h3></li>
            ))}
          </ul>
        </MainColumn>
        <LinksColumn>
          <Links>
            <p><strong>{content.socialLinks.title}</strong></p>
            <SocialLinks>
              <SocialLink>
                <Link title='Input Output HK Twitter' rel='noopener' href='https://twitter.com/inputoutputHK'>
                  <Circle><FaTwitter size={16} /></Circle>
                </Link>
              </SocialLink>
              <SocialLink>
                <Link title='Input Output HK Facebook' rel='noopener' href='https://www.facebook.com/iohk.io/'>
                  <Circle><FaFacebookF size={16} /></Circle>
                </Link>
              </SocialLink>
              <SocialLink>
                <Link title='Input Output HK YouTube' rel='noopener' href='https://www.youtube.com/c/IohkIo'>
                  <Circle><FaYoutube size={16} /></Circle>
                </Link>
              </SocialLink>
              <SocialLink>
                <Link title='Input Output HK Blog' rel='noopener' href='https://iohk.io/blog/'>
                  <Circle><FaRss size={16} /></Circle>
                </Link>
              </SocialLink>
              <SocialLink>
                <Link title='Input Output HK Github' rel='noopener' className='github' href='https://github.com/input-output-hk/'>
                  <DiGithubBadge size={45} />
                </Link>
              </SocialLink>
            </SocialLinks>
          </Links>
        </LinksColumn>
      </Columns>
      <Columns>
        <LogoColumn>
          &nbsp;
        </LogoColumn>
        <MainColumn>
          <BottomLinks>
            {content.bottomLinks.links.map(({ href, label }) => (
              <li key={`${href}_${label}`}><Link href={href} rel='noopener'>{label}</Link></li>
            ))}
          </BottomLinks>
        </MainColumn>
      </Columns>
    </Container>
  )
}

CardanoOrg.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([ 'dark', 'light' ]).isRequired
}

export default CardanoOrg
