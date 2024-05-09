import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
    return (
        <div className={classes.TodoItem}>
            <h3>{props.number}</h3>
            <h3>{props.title}</h3>
            <h3>{props.body}</h3>
        </div>
    );
};

export default TodoItem;