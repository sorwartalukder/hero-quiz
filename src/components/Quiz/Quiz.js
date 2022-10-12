import React from 'react';

const Quiz = ({ quiz }) => {
    console.log(quiz)
    const { question, options, correctAnswer } = quiz;
    return (
        <div>
            <h2 >Question: {question.replace(/<[^>]+>/g, '')}</h2>
            <div>
                {options.map((option, index) => (
                    <div key={index}>

                        <label >
                            <input
                                type="radio"
                                name="radio"

                                className="radio checked:bg-red-500"
                            />

                            <span>{option}</span>
                        </label>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quiz;