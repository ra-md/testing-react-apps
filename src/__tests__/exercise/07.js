// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {screen} from '@testing-library/react'
import {render} from '../../test/test-utils'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

// function renderWithThemeProvider(ui, theme = 'light') {
//   const Wrapper = ({children}) => {
//     return <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
//   }
//   render(ui, {wrapper: Wrapper})
// }

test('renders with the light styles for the light theme', () => {
  // 🐨 uncomment all of this code and your test will be busted on the next line:
  // const Wrapper = ({children}) => {
  //   return <ThemeProvider initialTheme='light'>{children}</ThemeProvider>
  // }
  // renderWithThemeProvider(<EasyButton>Easy</EasyButton>)
  render(<EasyButton>Easy</EasyButton>)
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
  //
  // 🐨 update the `render` call above to use the wrapper option using the
  // ThemeProvider
})

test('renders with the dark styles for the dark theme', () => {
  // 🐨 uncomment all of this code and your test will be busted on the next line:
  // const Wrapper = ({children}) => {
  //   return <ThemeProvider initialTheme='dark'>{children}</ThemeProvider>
  // }
  // renderWithThemeProvider(<EasyButton>Easy</EasyButton>, 'dark')
  render(<EasyButton>Easy</EasyButton>, {theme: 'dark'})
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
  //
  // 🐨 update the `render` call above to use the wrapper option using the
  // ThemeProvider
})

/* eslint no-unused-vars:0 */
