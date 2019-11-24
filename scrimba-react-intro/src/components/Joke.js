import React from 'react';
import MyInfo from './MyInfo';



const jokeQuestionCheck = (question) => {
    if (question) {
        return `Question: ${question}`;
    }
}

const Joke = (props) => {
    return (
        <div>
            <p>{jokeQuestionCheck(props.jokeInfo.Question)}
                <br />
                Answer: {props.jokeInfo.Answer}</p>
        </div>
    )
}

export default Joke;