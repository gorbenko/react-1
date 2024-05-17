import React from 'react';
import TodoItem from './TodoItem';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

const TodoList = ({todos, title, removeCb}) => {
    if (!todos.length) {
        return <div>Дел нет</div>;
    }

    return (
        <div>
            <h1>{title}</h1>
            <TransitionGroup className="todo-list">
                {todos.map((item, index) => (
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="todo"
                    >
                        <TodoItem
                            item={item}
                            number={index + 1}
                            removeCb={removeCb}
                        />
                    </CSSTransition>
                ))
                }
            </TransitionGroup>
        </div>
    );
};

export default TodoList;