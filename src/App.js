import React, { useMemo, useRef, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import InputTitle from './components/InputTitle';
import SuperModal from './components/SuperModal/SuperModal';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SuperBtn from './components/UI/button/SuperBtn';

function App() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [formVisible, setFormVisible] = useState(false);

  const [todos, setTodos] = useState([
    { id: 1, title: 'Встреча', body: '14:00 бульвар' },
    { id: 2, title: 'Еда', body: 'Обед по расписанию' },
    { id: 3, title: 'Стрижка', body: 'Красота спасет мир' },
  ]);

  const sortedTodos = useMemo(() => {
    console.log('отработала');
    if (filter.sort !== '') {
      return [...todos].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    return todos;
  }, [filter.sort, todos]);

  const sortedAndSearchTodos = useMemo(() => {
    return sortedTodos.filter(todo => {
      return todo.title.toLowerCase().includes(filter.query);
    })
  }, [filter.query, sortedTodos]);

  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
    setFormVisible(false);
  }

  const removeTodo = (todo) => {
    console.info('Дело: %s удалено', todo.title);
    setTodos([...todos.filter(el => (el.id !== todo.id))]);
  }

  return (
    <div className="App">

      {/* <InputTitle /> */}
      {/* <Counter/> */}

      <SuperBtn
        onClick={() => setFormVisible(true)}
      >
        Добавить дело
      </SuperBtn>
      <SuperModal visible={formVisible} setVisible={setFormVisible}>
        <TodoForm createCb={addNewTodo} />
      </SuperModal>
      <TodoFilter setFilter={setFilter} filter={filter} />
      <TodoList
            removeCb={removeTodo}
            todos={sortedAndSearchTodos}
            title="Тудушки"
          />
    </div>
  );
}
export default App;
