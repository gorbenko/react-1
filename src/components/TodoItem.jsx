import React from 'react';
import classes from './TodoItem.module.css';
import SuperBtn from './UI/button/SuperBtn';

const TodoItem = ({removeCb, ...props}) => {
    return (
        <div className={classes.TodoItem}>
            <h3>{props.number}</h3>
            <h3>{props.item.title}</h3>
            <h3>{props.item.body}</h3>
            <SuperBtn onClick={removeCb.bind(this, props.item)}>Удалить</SuperBtn>
        </div>
    );
};

export default TodoItem;