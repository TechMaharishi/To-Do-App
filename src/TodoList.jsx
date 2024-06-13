import React, { useState } from 'react';
import { Button, Flex, Text, Popover, TextArea, IconButton, Checkbox } from '@radix-ui/themes';
import { Pencil2Icon, TrashIcon, Cross2Icon, CheckIcon } from '@radix-ui/react-icons';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  const [editedText, setEditedText] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleEdit = (id, newText) => {
    editTodo(id, newText);
    setEditedText('');
  };

  const toggleTodoCompletion = (id) => {
    if (completedTodos.includes(id)) {
      setCompletedTodos(completedTodos.filter(todoId => todoId !== id));
    } else {
      setCompletedTodos([...completedTodos, id]);
    }
  };

  const isTodoCompleted = (id) => {
    return completedTodos.includes(id);
  };

  return (
    <div className='p-2 ml-12'>
      <ul className='list-style-none' style={{ color: "var(--accent-11)" }}>
        {
          todos.map((todo) => (
            <li className='px-4' key={todo.id}>
              <Flex as='div' align='center' justify='between' width='100%' height='50px'>
                <div className="flex items-center">
                  <Checkbox
                    checked={isTodoCompleted(todo.id)}
                    onCheckedChange={() => toggleTodoCompletion(todo.id)}
                  />
                  <Text
                    as='p'
                    size='4'
                    style={{ textDecoration: isTodoCompleted(todo.id) ? 'line-through' : 'none', marginLeft: '8px' }}
                  >
                    {todo.text}
                  </Text>
                </div>
                <div className="flex items-center">
                  <Popover.Root>
                    <Popover.Trigger >
                      <Button onClick={() => setEditedText(todo.text)} variant="soft"><Pencil2Icon />Edit</Button>
                    </Popover.Trigger>
                    <Popover.Content size="1" width="150px">
                      <TextArea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        placeholder='Edit..'
                      />
                      <div className='flex justify-end gap-1'>
                        <Popover.Close>
                          <IconButton onClick={() => setEditedText('')} size="1" variant="soft"><Cross2Icon /></IconButton>
                        </Popover.Close>
                        <Popover.Close>
                          <IconButton onClick={() => handleEdit(todo.id, editedText)} size="1" variant="solid"><CheckIcon /></IconButton>
                        </Popover.Close>
                      </div>
                    </Popover.Content>
                  </Popover.Root>
                  <div className="ml-2"> {/* Add margin between Edit and Delete buttons */}
                    <Button onClick={() => deleteTodo(todo.id)} variant="solid"><TrashIcon />Delete</Button>
                  </div>
                </div>
              </Flex>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;
