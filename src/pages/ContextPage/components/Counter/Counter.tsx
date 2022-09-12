import React, {useContext} from 'react';

import {
  ButtonText,
  CounterContainer,
  DecrementButton,
  IncrementButton,
  NumberText,
} from './styles';

export function Counter() {
  //TODO - chamar o contexto para incrementar e decrementar

  return (
    <CounterContainer>
      <NumberText>1</NumberText>
      <IncrementButton>
        <ButtonText>Incrementar</ButtonText>
      </IncrementButton>
      <DecrementButton>
        <ButtonText>Decrementar</ButtonText>
      </DecrementButton>
    </CounterContainer>
  );
}
