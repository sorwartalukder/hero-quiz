import React from 'react';

const Blog = () => {
    return (
        <div className='w-6/12 mx-auto mt-9'>
            <Question
                question="1. What is the purpose of React Router?"
                ans="Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application."
            ></Question>
            <Question question="2. How does Context Api work?" ans="React Context provides a way to pass data through the component tree without having to pass props down manually at every level."></Question>
            <Question question="3. What is useRef?" ans="The useRef hook returns a mutable object which doesn't re-render the component when it's changed."></Question>
        </div>
    );
};
const Question = ({ question, ans }) => {
    return (
        <div className=' mt-5 '>
            <h1 className='text-3xl font-bold text-rose-500'>{question}</h1>
            <p className='text-xl mt-3'>{ans}</p>
        </div>
    );
};

export default Blog;