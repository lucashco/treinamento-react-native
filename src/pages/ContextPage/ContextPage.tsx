import React from 'react';

import {CounterProvider} from '../../contexts/CounterContext';
import {ChangeIncrement} from './components/ChangeIncrement/ChangeIncrement';
import {Counter} from './components/Counter/Counter';

import {ContextContainer} from './styles';

export function ContextPage() {
  return (
    <CounterProvider>
      <ContextContainer>
        <Counter />
        <ChangeIncrement />
      </ContextContainer>
    </CounterProvider>
  );
}
