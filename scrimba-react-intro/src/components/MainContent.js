import React from 'react';
import TodoItem from './TodoItem';

    function MainContent() {
        return(
            <form>
                <TodoItem />
                <TodoItem /> 
                <TodoItem /> 
                <TodoItem /> 
            </form>
        )
    }

export default MainContent;