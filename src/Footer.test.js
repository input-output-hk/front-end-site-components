import React from 'react'
import { mount } from 'enzyme'
import { Provider as LanguageProvider } from '@input-output-hk/front-end-core-components/components/Language'
import Footer from './Footer'

function getWrapper (props, lang = 'en') {
  return mount((
    <LanguageProvider
      availableLanguages={[
        { label: 'Test', key: lang, locale: 'tt-TT' }
      ]}
      useURL={false}
      useNavigator={false}
      persistLang={false}
    >
      <Footer {...props} />
    </LanguageProvider>
  ))
}

describe('Footer', () => {
  let originalConsoleError
  beforeEach(() => {
    originalConsoleError = console.error
  })

  afterEach(() => {
    console.error = originalConsoleError
  })

  test('it renders children as expected', () => {
    expect(getWrapper({ variant: 'atala', children: <p>Children</p> })).toMatchSnapshot()
  })

  test('it renders absolute children as expected', () => {
    expect(getWrapper({ variant: 'atala', absoluteChildren: <p>Absolute Children</p> })).toMatchSnapshot()
  })

  describe('Atala variant', () => {
    test('it renders correctly for en', () => {
      expect(getWrapper({ variant: 'atala' })).toMatchSnapshot()
    })

    test('it renders with the light theme correctly', () => {
      expect(getWrapper({ variant: 'atala', theme: 'light' })).toMatchSnapshot()
    })

    test('it renders with the dark theme correctly', () => {
      expect(getWrapper({ variant: 'atala', theme: 'dark' })).toMatchSnapshot()
    })

    test('it throws an error when the language does not exist', () => {
      expect(() => {
        console.error = jest.fn()
        getWrapper({ variant: 'atala' }, 'nope')
      }).toThrowError('No content for Atala footer in language "nope"')
    })
  })

  describe('Cardano variant', () => {
    test('it renders correctly for en', () => {
      expect(getWrapper({ variant: 'cardano' })).toMatchSnapshot()
    })

    test('it renders correctly for ja', () => {
      expect(getWrapper({ variant: 'cardano' }, 'ja')).toMatchSnapshot()
    })

    test('it renders correctly for ko', () => {
      expect(getWrapper({ variant: 'cardano' }, 'ko')).toMatchSnapshot()
    })

    test('it renders correctly for zh-cn', () => {
      expect(getWrapper({ variant: 'cardano' }, 'zh-cn')).toMatchSnapshot()
    })

    test('it renders with the light theme correctly', () => {
      expect(getWrapper({ variant: 'cardano', theme: 'light' })).toMatchSnapshot()
    })

    test('it renders with the dark theme correctly', () => {
      expect(getWrapper({ variant: 'cardano', theme: 'dark' })).toMatchSnapshot()
    })

    test('it throws an error when the language does not exist', () => {
      expect(() => {
        console.error = jest.fn()
        getWrapper({ variant: 'cardano' }, 'nope')
      }).toThrowError('No content for Cardano footer in language "nope"')
    })
  })

  describe('IOHK variant', () => {
    test('it renders correctly for en', () => {
      expect(getWrapper({ variant: 'iohk' })).toMatchSnapshot()
    })

    test('it renders with the light theme correctly', () => {
      expect(getWrapper({ variant: 'iohk', theme: 'light' })).toMatchSnapshot()
    })

    test('it renders with the dark theme correctly', () => {
      expect(getWrapper({ variant: 'iohk', theme: 'dark' })).toMatchSnapshot()
    })

    test('it throws an error when the language does not exist', () => {
      expect(() => {
        console.error = jest.fn()
        getWrapper({ variant: 'iohk' }, 'nope')
      }).toThrowError('No content for IOHK footer in language "nope"')
    })
  })
})
