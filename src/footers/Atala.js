import React from 'react'
import PropTypes from 'prop-types'
import Image from '@input-output-hk/front-end-core-components/components/Image'
import atala from '../resources/footer/atala'

const Atala = ({ lang, theme }) => {
  const content = atala[lang]
  if (!content) throw new Error(`No content for Atala footer in language "${lang}"`)
  let logoURL = 'https://ucarecdn.com/a2f086e8-2666-418a-a025-8c928040a4b9/'
  if (theme === 'dark') logoURL = 'https://ucarecdn.com/eb936b4a-0589-4e89-b31c-bb1edf90ed9b/'
  return (
    <div id='fesc-atala-footer'>
      <hr />
      <div className='fesc-atala-footer-row'>
        <div className='fesc-atala-footer-column'>
          <div className='fesc-atala-footer-logo'>
            <div>
              <a href='https://atala.io/' rel='noopener'>
                <Image src={logoURL} alt='Atala logo' sizeFactor={0.2} maintainTransparency />
              </a>
            </div>
          </div>
        </div>
        <div className='fesc-atala-footer-column'>
          <div className='fesc-atala-footer-links'>
            <a href='#' rel='noopener'>
              {content.termsAndConditions}
            </a>
            <a href='#' rel='noopener'>
              {content.privacyPolicy}
            </a>
          </div>
        </div>
        <div className='fesc-atala-footer-column'>
          <div className='fesc-atala-footer-copyright'>
            <p>Copyright ® {new Date().getFullYear()} atala.io</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Atala.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([ 'dark', 'light' ]).isRequired
}

export default Atala
