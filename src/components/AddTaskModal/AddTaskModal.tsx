import React, {useState} from 'react';
import {Modal} from 'react-native';
import {
  ModalButton,
  CloseModalButton,
  ButtonText,
  Input,
  ModalContent,
  Overlay,
  Label,
} from './styles';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export function AddTaskModal({isVisible, onClose}: Props) {
  const [task, setTask] = useState('');

  function handleChangeText(text: string) {
    setTask(text);
  }

  function createNewTask() {
    // TODO - Criar uma nova task
  }

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      onRequestClose={onClose}>
      <Overlay>
        <ModalContent>
          <Label>Nova tarefa</Label>
          <Input
            placeholder="Insira uma nova tarefa"
            onChangeText={handleChangeText}
          />
          <ModalButton onPress={createNewTask}>
            <ButtonText>Adicionar</ButtonText>
          </ModalButton>
          <CloseModalButton onPress={onClose}>
            <ButtonText>Fechar</ButtonText>
          </CloseModalButton>
        </ModalContent>
      </Overlay>
    </Modal>
  );
}
