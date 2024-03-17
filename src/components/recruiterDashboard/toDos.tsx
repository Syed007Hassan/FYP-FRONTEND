import React, { useState } from 'react';
import { FaPlus, FaTrash, FaCheck } from 'react-icons/fa';

const TodoList = () => {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  return (
    <div className=" h-80 p-4 " style={{ height: '500px' }} font-sans>

      <div className="mb-4">
        <h1 className="text-2xl text-grey-darkest font-medium mb-4">Todo List</h1>
        <div className="flex">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="Add Todo"
            value={newTodo}
            onChange={handleInputChange}
          />
          <button
            className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal transition-colors duration-200"
            onClick={handleAddTodo}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index} className="flex mb-4 items-center border p-2 rounded bg-gray-50">
            <p className={`w-full ${todo.completed ? 'line-through text-green-600' : 'text-grey-darkest'}`}>{todo.text}</p>
            <button
              className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green-600 border-green-600 hover:text-white hover:bg-green-600 transition-colors duration-200"
              onClick={() => handleCompleteTodo(index)}
            >
              <FaCheck />
            </button>
            <button
              className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600 transition-colors duration-200"
              onClick={() => handleRemoveTodo(index)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TodoList;