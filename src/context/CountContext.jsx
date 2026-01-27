import React, { createContext, useState } from 'react'

export const CountItemContext = createContext()

const CountContext = (props) => {
    const [count, setCount] = useState('0')
  return (
    <CountItemContext.Provider value={[count, setCount]}>
        {props.children}
    </CountItemContext.Provider>
  )
}

export default CountContext