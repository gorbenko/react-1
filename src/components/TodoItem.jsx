import React from 'react';
import classes from './TodoItem.module.css';
import SuperBtn from './UI/button/SuperBtn';

const TodoItem = ({removeCb, ...props}) => {
    return (
        <div className={classes.TodoItem}>
            <h3>{props.number}</h3>
            <h3>{props.title}</h3>
            <h3>{props.body}</h3>
            <SuperBtn onClick={removeCb.bind(this, props.id)}>Удалить</SuperBtn>
        </div>
    );
};

export default TodoItem;