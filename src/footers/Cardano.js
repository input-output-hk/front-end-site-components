import React from 'react'
import PropTypes from 'prop-types'
import { FaTwitter, FaFacebookF, FaYoutube, FaRss } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import Image from '@input-output-hk/front-end-core-components/components/Image'
import cardano from '../resources/footer/cardano'

const Cardano = ({ lang, theme }) => {
  const content = cardano[lang]
  if (!content) throw new Error(`No content for Cardano footer in language "${lang}"`)
  let logoURL = 'https://ucarecdn.com/75b74f03-ff04-47ba-821c-5e477d3d46d4/'
  if (theme === 'dark') logoURL = 'https://ucarecdn.com/8102d054-1169-4af8-81a9-1ea43c680a45/'
  return (
    <div id='fesc-cardano-footer'>
      <div className='fesc-row fesc-row-top'>
        <div className='fesc-copyright'>
          <div>
            <p>© IOHK 2015 - {new Date().getFullYear()}</p>
          </div>
          <div>
            <a rel='noopener' title='Input Output HK GitHub' href='https://github.com/input-output-hk'>
              <DiGithubBadge size={25} />
            </a>
          </div>
        </div>
        <div className='fesc-top-right'>
          <div className='fesc-iohk-logo'>
            <a rel='noopener' href='https://iohk.io/' title='Input Output HK'>
              <div>
                <Image src={logoURL} alt='IOHK logo' sizeFactor={0.14} maintainTransparency />
              </div>
              <div>
                <p>IOHK supported project</p>
              </div>
            </a>
          </div>
          <div className='fesc-social-links'>
            <div className='fesc-social-link'>
              <a title='Input Output HK Twitter' rel='noopener' href='https://twitter.com/inputoutputHK'>
                <FaTwitter size={20} />
              </a>
            </div>
            <div className='fesc-social-link'>
              <a title='Input Output HK Facebook' rel='noopener' href='https://www.facebook.com/iohk.io/'>
                <FaFacebookF size={20} />
              </a>
            </div>
            <div className='fesc-social-link'>
              <a title='Input Output HK YouTube' rel='noopener' href='https://www.youtube.com/c/IohkIo'>
                <FaYoutube size={20} />
              </a>
            </div>
            <div className='fesc-social-link'>
              <a title='Input Output HK Blog' rel='noopener' href='https://iohk.io/blog/'>
                <FaRss size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='fesc-row fesc-row-bottom'>
        <div>
          <Markdown source={content.body} />
        </div>
        <div>
          <div className='fesc-links-column'>
            <p><strong>{content.cardanoLinks.title}</strong></p>
            <ul>
              {content.cardanoLinks.links.map(({ href, label }) => (
                <li key={`${href}_${label}`}><a href={href} rel='noopener'>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className='fesc-links-column'>
            <p><strong>{content.communityLinks.title}</strong></p>
            <ul>
              {content.communityLinks.links.map(({ href, label }) => (
                <li key={`${href}_${label}`}><a href={href} rel='noopener'>{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

Cardano.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([ 'dark', 'light' ]).isRequired
}

export default Cardano
