import React, { createContext, useState } from 'react'

export const StoreContext = createContext()

const CountContext = (props) => {
    const [count, setCount] = useState('0')

const value = { count, setCount }


  return (
    <StoreContext.Provider value={value}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default CountContext