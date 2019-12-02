import React from 'react';

const TodoItem = (props) => {
    return (
        <div className="TodoItem">
            <input type="checkbox" onChange={() => {props.handleChange(props.todo.id)}} id={props.todo.id} checked={props.todo.completed} />
            <label htmlFor={props.todo.id}>{props.todo.text}</label>
        </div>
    )
}

export default TodoItem;