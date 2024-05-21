import React, { useEffect, useState } from 'react';

import Counter from './components/Counter';
import InputTitle from './components/InputTitle';
import SuperModal from './components/SuperModal/SuperModal';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SuperBtn from './components/UI/button/SuperBtn';
import { useTodos } from './hooks/useTodos';
import TodoService from './API/TodoService';
import { store } from './store/store';
import { save } from './store/actions';

import './App.css';

function App() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [formVisible, setFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [todos, setTodos] = useState([
    // { id: 1, title: 'Встреча', body: '14:00 бульвар' },
    // { id: 2, title: 'Еда', body: 'Обед по расписанию' },
    // { id: 3, title: 'Стрижка', body: 'Красота спасет мир' },
  ]);

  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);

  console.info(store.getState());

  function makeStore() {
    store.dispatch(save('Oleg'));
  }

  store.subscribe(() => {
    console.info(store.getState());
  })

  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
    setFormVisible(false);
  }

  const removeTodo = (todo) => {
    console.info('Дело: %s удалено', todo.title);
    setTodos([...todos.filter(el => (el.id !== todo.id))]);
  }

  async function fetchTodos() {
    setIsLoading(true);
    const todos = await TodoService.getAll();
    setTodos(todos);
    setIsLoading(false);
  }

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  return (
    <div className="App">

      {/* <InputTitle /> */}
      {/* <Counter/> */}

      <button onClick={makeStore}>GET TODOS</button>
      <SuperBtn
        onClick={() => setFormVisible(true)}
      >
        Добавить дело
      </SuperBtn>
      <SuperModal visible={formVisible} setVisible={setFormVisible}>
        <TodoForm createCb={addNewTodo} />
      </SuperModal>
      <TodoFilter setFilter={setFilter} filter={filter} />
      {
        isLoading
        ? <h1>Загрузка...</h1>
        : <TodoList
          removeCb={removeTodo}
          todos={sortedAndSearchTodos}
          title="Тудушки"
        />
      }
    </div>
  );
}
export default App;
