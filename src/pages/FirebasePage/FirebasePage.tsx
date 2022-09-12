import React, {useEffect, useState} from 'react';
import {AddTaskModal} from '../../components/AddTaskModal/AddTaskModal';

import {
  ButtonText,
  FirebaseContainer,
  NewTaskButton,
  TaskItem,
  TaskItemText,
  TasksContainer,
  Title,
} from './styles';

export function FirebasePage() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  useEffect(() => {
    // TODO - Carregar as tarefas
  }, []);

  return (
    <FirebaseContainer>
      <Title>Minhas tarefas</Title>
      <TasksContainer showsVerticalScrollIndicator={false}>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
        <TaskItem>
          <TaskItemText>Lavar o carro</TaskItemText>
        </TaskItem>
      </TasksContainer>
      <NewTaskButton onPress={handleOpenModal}>
        <ButtonText>Nova Tarefa</ButtonText>
      </NewTaskButton>
      <AddTaskModal isVisible={modalVisible} onClose={handleCloseModal} />
    </FirebaseContainer>
  );
}
