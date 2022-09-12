import React, {createContext, useState} from 'react';

export const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function CounterProvider({children}: Props) {
  const [count] = useState(0);

  function increment() {
    // TODO
  }

  function decrement() {
    // TODO
  }

  return (
    <CounterContext.Provider value={{count, increment, decrement}}>
      {children}
    </CounterContext.Provider>
  );
}
