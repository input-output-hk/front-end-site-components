import React from 'react'
import PropTypes from 'prop-types'
import Image from '@input-output-hk/front-end-core-components/components/Image'
import iohk from '../resources/footer/iohk'

const IOHK = ({ lang, theme }) => {
  const content = iohk[lang]
  if (!content) throw new Error(`No content for IOHK footer in language "${lang}"`)
  const logoURL = 'https://ucarecdn.com/306dc384-d0ae-479a-9b7e-2814fbeaea9b/'
  return (
    <div id='fesc-iohk-footer'>
      <hr />
      <div className='fesc-iohk-footer-container'>
        <div className='fesc-iohk-footer-section'>
          <div className='fesc-iohk-footer-logo'>
            <div>
              <a href='https://iohk.io/' rel='noopener'>
                <Image src={logoURL} alt='IOHK logo' sizeFactor={0.14} maintainTransparency />
              </a>
            </div>
          </div>
        </div>
        <div className='fesc-iohk-footer-section'>
          <div className='fesc-iohk-footer-row'>
            {content.links.map(column => (
              <div className='fesc-iohk-footer-column'>
                <ul>
                  {column.map(({ label, href }) => (
                    <li><a href={href} rel='noopener'>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

IOHK.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([ 'dark', 'light' ]).isRequired
}

export default IOHK
