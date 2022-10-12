import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const

    Quizs = () => {
        const quizsLoad = useLoaderData()
        const quizs = quizsLoad.data.questions;
        return (
            <div>
                {
                    quizs.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        );
    };

export default Quizs;