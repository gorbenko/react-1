import React, { useState } from 'react';
import SuperBtn from './UI/button/SuperBtn';
import SuperInput from './UI/input/SuperInput';

const TodoForm = ({createCb}) => {
    const [todo, setTodo] = useState({title: '', body: ''});

    const addNewTodo = (event) => {
        event.preventDefault();

        const newTodo = {
          id: Date.now(),
          ...todo
        }

        createCb(newTodo);
        setTodo({title: '', body: ''});
      }

    return (
        <form>
            <SuperInput onChange={(e) => { setTodo({...todo, title: e.target.value}) }} value={todo.title} placeholder='заголовок' />
            <SuperInput onChange={(e) => { setTodo({...todo, body: e.target.value}) }} value={todo.body} placeholder='содержимое' />
            <SuperBtn onClick={addNewTodo}>Добавить</SuperBtn>
        </form>
    );
};

export default TodoForm;