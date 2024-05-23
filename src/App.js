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
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncAction/customers';

function App() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [formVisible, setFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [todos, setTodos] = useState([
    { id: 1, title: 'Встреча', body: '14:00 бульвар' },
    { id: 2, title: 'Еда', body: 'Обед по расписанию' },
    { id: 3, title: 'Стрижка', body: 'Красота спасет мир' },
  ]);

  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);

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

  useEffect(() => {
    fetchTodos();
  }, []);

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }

    dispatch(addCustomerAction(customer));
  }

  const removeCustomerFn = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  }

  return (
    <div className="App">

      <InputTitle />
      <Counter/>

      <strong>{cash}</strong>
      <button onClick={() => addCash(Number(prompt()))}>ADD_CASH</button>
      <button onClick={() => getCash(Number(prompt()))}>GET_CASH</button>

      <button onClick={() => addCustomer(prompt())}>ADD_CUSTOMER</button>
      <button onClick={() => dispatch(fetchCustomers())}>ADD_MANY_CUSTOMERS</button>

      {customers.length ?
        <div>
          {
            customers.map(customer => {
              return <div key={customer.id} onClick={() => removeCustomerFn(customer)} >{customer.name}</div>
            })
          }
        </div>
        : <div>Нет клиентов</div>

      }

      <hr />
      TODO:
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
