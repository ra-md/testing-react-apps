// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {renderHook, act} from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

// function setup(customProps) {
//   let counter = {}
//   function TestComponent(props) {
//     // counter = useCounter(props)
//     Object.assign(counter, useCounter(props))
//     return null
//   }
//   render(<TestComponent {...customProps}/>)
//   return counter
// }

test('exposes the count and increment/decrement functions', () => {
  // 🐨 render the component
  // let counter
  // function TestComponent() {
  //   counter = useCounter()
  
  //   return null
  // }
  // render(<TestComponent/>)
  // const counter = setup()
  const {result} = renderHook(useCounter)
  // 🐨 get the elements you need using screen
  // const count = screen.getByText(/counter: /i)
  // const dec = screen.getByText(/decrement/i)
  // const inc = screen.getByText(/increment/i)
  // 🐨 assert on the initial state of the hook
  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
  expect(result.current.count).toBe(0)
  // userEvent.click(inc)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  // userEvent.click(dec)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('custom initial count', () => {
  // const counter = setup({initialCount: 10})
  const {result} = renderHook(useCounter, { initialProps: {initialCount: 10} })
  expect(result.current.count).toBe(10)
})

test('custom step', () => {
  // const counter = setup({step: 10})
  const {result} = renderHook(useCounter, { initialProps: {step: 10} })
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(10)
})

/* eslint no-unused-vars:0 */
