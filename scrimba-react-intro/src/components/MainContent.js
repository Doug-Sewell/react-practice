import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todoData';


class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: todosData
        }
    }
    render() {
        const toodosMapped = this.state.todoItems.map(todo => {
            return (<TodoItem key={todo.id} todo={todo} />)
        });

        return (
            <form>
                {toodosMapped}
            </form>
        )
    }
}

export default MainContent;