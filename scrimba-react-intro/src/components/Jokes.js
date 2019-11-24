import React from 'react';
import Joke from './Joke';
import jokeData from '../data/jokeData'

const Jokes = () => {

    const jokes = jokeData.map(
        (joke, index) => <Joke key={index} jokeInfo={{ Question: joke.Question, Answer: joke.Answer }} />
    );



    return (
        <div>
            {jokes}
        </div>
    )
}



export default Jokes