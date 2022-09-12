import React from 'react';

import {
  AddMultiplierContainer,
  Button,
  ButtonText,
  Input,
  Label,
} from './styles';

export function ChangeIncrement() {
  return (
    <AddMultiplierContainer>
      <Label>Incrementar em: </Label>
      <Input
        placeholder="Insira um número"
        keyboardType="decimal-pad"
        // value={1}
        // onChangeText={text => console.log(text)}
      />
      <Button>
        <ButtonText>Alterar</ButtonText>
      </Button>
    </AddMultiplierContainer>
  );
}
