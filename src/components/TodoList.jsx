import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, title, removeCb}) => {
    return (
        <div>
            <h1>{title}</h1>
            {todos.map((item, index) => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    number={index + 1}
                    title={item.title}
                    body={item.body}
                    removeCb={removeCb}
                />
            ))
            }
        </div>
    );
};

export default TodoList;