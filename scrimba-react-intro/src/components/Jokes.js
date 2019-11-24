import React from 'react';
import Joke from './Joke';

const Jokes = () => {
    return (
        <div>
            <Joke jokeInfo={{
                Question: 'Why did the chicken cross the road?',
                Answer: 'To get to the other side!'
            }} />
            <Joke jokeInfo={{
                Question: 'Where does a fish get money?',
                Answer: 'The riverbank!'
            }} />
            <Joke jokeInfo={{
                Answer: 'I recently sold my vacuum as it was just gathering dust.'
            }} />
            <Joke jokeInfo={{
                Question: 'What was the dog\'s favorite type of homework to do?',
                Answer: 'A lab report!'
            }} />
            <Joke jokeInfo={{
                Question: 'Why did the chicke cross the road?',
                Answer: 'To get to the other side!'
            }} />
        </div>
    )
}



export default Jokes