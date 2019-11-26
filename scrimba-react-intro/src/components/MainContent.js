import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todoData';

function MainContent() {
    const mapTodos = () => {
        const toodosMapped = todosData.map( todo => {
            return (<TodoItem key={todo.id} todo={todo} />)
        });
        console.log(toodosMapped);
        return toodosMapped;

    }

    return (
        <form>
            {mapTodos()}

        </form>
    )
}

export default MainContent;