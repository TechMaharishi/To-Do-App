import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import { Flex, Box, Text } from '@radix-ui/themes';

const App = () => {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <>

      <Flex style={{ backgroundColor: 'var(--accent-2)' }} align='center' justify='center' className='w-full min-h-screen' direction="column">
        <Text style={{ color: "var(--accent-11)" }} as="p" mb="5" size="8" weight="bold" align="center">To-Do List</Text>
        <Box minWidth="60vw" minHeight="70vh" style={{ backgroundColor: 'var(--accent-4)', borderRadius: 'var(--radius-2)', boxShadow: 'var(--shadow-3)' }}>
          <Form todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </Box>
      </Flex>
    </>
  );
};

export default App;
