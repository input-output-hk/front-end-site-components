import { createGlobalStyle } from 'styled-components'
import { getFontSize } from '@input-output-hk/front-end-core-libraries/build/theme'

export default createGlobalStyle`
  html {
    max-width: 100%;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background.default};
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing:inherit;
  }

  hr {
    height: 0.1rem;
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.text.primary};
    border: none;
  }

  body {
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background.default};
    font-family: ${({ theme }) => theme.typography.body.fontFamily || theme.typography.fontFamily};
    font-size: ${({ theme }) => getFontSize(theme.typography.body.fontSize, theme.typography.baseFontSize)};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight || theme.typography.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.lineHeight || theme.typography.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.body.letterSpacing || theme.typography.letterSpacing};
    -ms-overflow-style: -ms-autohiding-scrollbar;
    min-height: 100vh;
  }

  h1 {
    font-family: ${({ theme }) => theme.typography.h1.fontFamily || theme.typography.fontFamily};
    font-size: ${({ theme }) => getFontSize(theme.typography.h1.fontSize, theme.typography.baseFontSize)};
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight || theme.typography.fontWeight};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight || theme.typography.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing || theme.typography.letterSpacing};
  }

  h2 {
    font-family: ${({ theme }) => theme.typography.h2.fontFamily || theme.typography.fontFamily};
    font-size: ${({ theme }) => getFontSize(theme.typography.h2.fontSize, theme.typography.baseFontSize)};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight || theme.typography.fontWeight};
    line-height: ${({ theme }) => theme.typography.h2.lineHeight || theme.typography.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.h2.letterSpacing || theme.typography.letterSpacing};
  }

  h3 {
    font-family: ${({ theme }) => theme.typography.h3.fontFamily || theme.typography.fontFamily};
    font-size: ${({ theme }) => getFontSize(theme.typography.h3.fontSize, theme.typography.baseFontSize)};
    font-weight: ${({ theme }) => theme.typography.h3.fontWeight || theme.typography.fontWeight};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight || theme.typography.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing || theme.typography.letterSpacing};
  }

  h4 {
    font-family: ${({ theme }) => theme.typography.h4.fontFamily || theme.typography.fontFamily};
    font-size: ${({ theme }) => getFontSize(theme.typography.h4.fontSize, theme.typography.baseFontSize)};
    font-weight: ${({ theme }) => theme.typography.h4.fontWeight || theme.typography.fontWeight};
    line-height: ${({ theme }) => theme.typography.h4.lineHeight || theme.typography.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing || theme.typography.letterSpacing};
  }

  h5 {
    font-family: ${({ theme }) => theme.typography.h5.fontFamily || theme.typography.fontFamily};
    font-size: ${({ theme }) => getFontSize(theme.typography.h5.fontSize, theme.typography.baseFontSize)};
    font-weight: ${({ theme }) => theme.typography.h5.fontWeight || theme.typography.fontWeight};
    line-height: ${({ theme }) => theme.typography.h5.lineHeight || theme.typography.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.h5.letterSpacing || theme.typography.letterSpacing};
  }

  h6 {
    font-family: ${({ theme }) => theme.typography.h6.fontFamily || theme.typography.fontFamily};
    font-size: ${({ theme }) => getFontSize(theme.typography.h6.fontSize, theme.typography.baseFontSize)};
    font-weight: ${({ theme }) => theme.typography.h6.fontWeight || theme.typography.fontWeight};
    line-height: ${({ theme }) => theme.typography.h6.lineHeight || theme.typography.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.h6.letterSpacing || theme.typography.letterSpacing};
  }

  small {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  ul,
  ol {
    list-style-position: inside;
    margin-left:0;
    padding: 0;
  }

  a {
    outline-width: 0.5rem;
    color: ${({ theme }) => theme.colors.primary.main};
    transition: color 0.1s ease-in-out;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
