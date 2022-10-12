import React from 'react';
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from 'react-toastify';

const Quiz = ({ quiz }) => {
    console.log(quiz)
    const { question, options, correctAnswer } = quiz;
    return (
        <div className='w-9/12 mx-auto border mt-6 p-3'>
            <div className='flex justify-between'>
                <h2 className='text-2xl'>Question: {question.replace(/<[^>]+>/g, '')}</h2>
                <button>
                    <EyeIcon className="h-6 w-6 text-blue-500" />
                </button>
            </div>
            <div className='grid grid-cols-2'>
                {options.map((option, index) => (
                    <div key={index}>

                        <label className='flex mt-2 '>
                            <input
                                type="radio"
                                name="radio"

                                className="radio checked:bg-red-500"
                            />

                            <span className='ml-2'>{option}</span>
                        </label>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quiz;