import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@radix-ui/themes';
import { PlusIcon } from '@radix-ui/react-icons';

const Form = ({ todos, setTodos }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { id: todos.length + 1, text: task }]);
      setTask('');
    }
  };

  return (
    <div className='p-2 m-2'>
      <form onSubmit={handleSubmit} className='flex items-center justify-center gap-3'>
        <Box maxWidth="300px">
          <TextField.Root
            value={task}
            onChange={(e) => setTask(e.target.value)}
            size="3"
            placeholder="Enter the task…"
          />
        </Box>
        <IconButton type="submit" variant="classic">
          <PlusIcon className='font-bold' width="20" height="20" />
        </IconButton>
      </form>
    </div>
  );
}

export default Form;
