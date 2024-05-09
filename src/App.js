import React, { useRef, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import InputTitle from './components/InputTitle';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SuperSelect from './components/UI/select/SuperSelect';

function App() {
  const [sortType, setSortType] = useState('');

  const [todos, setTodos] = useState([
    { id: 1, title: 'Встреча', body: '14:00 бульвар' },
    { id: 2, title: 'Еда', body: 'Обед по расписанию' },
    { id: 3, title: 'Стрижка', body: 'Красота спасет мир' },
  ]);

  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeTodo = (todo) => {
    console.info('Дело: %s удалено', todo.title);
    setTodos([...todos.filter(el => (el.id !== todo.id))]);
  }

  const options = [
    { value: 'title', text: 'Заголовок' },
    { value: 'body', text: 'Содержимое' }
  ];

  const sortedTodos = (sortType) => {
    setSortType(sortType);
    setTodos([...todos].sort((a, b) => a[sortType].localeCompare(b[sortType])));
  }

  return (
    <div className="App">

      {/* <InputTitle /> */}
      {/* <Counter/> */}

      <TodoForm createCb={addNewTodo} />
      {todos.length > 0 ?
        <>
          <SuperSelect value={sortType} onChange={sortedTodos} defaultValue={'Сортировка'} options={options} />
          <TodoList removeCb={removeTodo} todos={todos} title="Тудушки" />
        </> :
        <div>Дел нет</div>
      }
    </div>
  );
}
export default App;
