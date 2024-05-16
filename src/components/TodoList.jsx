import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, title, removeCb}) => {
    if (!todos.length) {
        return <div>Дел нет</div>;
    }

    return (
        <div>
            <h1>{title}</h1>
            {todos.map((item, index) => (
                <TodoItem
                    key={item.id}
                    item={item}
                    number={index + 1}
                    removeCb={removeCb}
                />
            ))
            }
        </div>
    );
};

export default TodoList;