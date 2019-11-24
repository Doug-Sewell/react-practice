import React from 'react';

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <input type="checkbox" id="first-option" /> 
            <label htmlFor="first-option">Option 1</label>
        </div>
    )
}

export default TodoItem;