import React from 'react';



const Joke = (props) => {


    const jokeQuestionCheck = (question) => {
        if (question) {
            return `Question: ${question}`;
        }
    }

    const styles = {
        display:'block'
    }


    
    return (
        <div>
            <p><span style={styles}>{jokeQuestionCheck(props.jokeInfo.Question)}</span>
            Answer: {props.jokeInfo.Answer}</p>
        </div>
    )
}

export default Joke;