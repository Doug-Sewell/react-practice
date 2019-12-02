import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todoData';

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const newState = prevState.todoItems.map(todo => {
                if(id === todo.id) {
                    todo.completed= !todo.completed;
                }
                return todo;
            });
            return newState;
        });
    }



    render() {
        const toodosMapped = this.state.todoItems.map(todo => {
            return (<TodoItem handleChange={this.handleChange} key={todo.id} todo={todo} />)
        });

        return (
            <form>
                {toodosMapped}
            </form>
        )
    }
}

export default MainContent;