import React, { useRef, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import InputTitle from './components/InputTitle';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'foo', body: 'foofoofoo'},
    {id: 2, title: 'bar', body: 'barbarbar'},
    {id: 3, title: 'baz', body: 'bazbazbaz'},
  ]);

  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeTodo = (id) => {
    setTodos([...todos.filter(el => (el.id != id))]);
  }

  return (
    <div className="App">

      {/* <InputTitle /> */}
      {/* <Counter/> */}

      <TodoForm createCb={addNewTodo} />
      <TodoList removeCb={removeTodo} todos={todos} title="Тудушки"/>
    </div>
  );
}
export default App;
