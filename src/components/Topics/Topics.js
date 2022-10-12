import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import welcomeImg from '../../header.png'
const Topics = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data
    return (
        <div>
            <div className=''>
                <img className='w-3/12 mx-auto' src={welcomeImg} alt="" />
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-11'>
                {
                    topics.map(topic => <Cart
                        key={topic.id}
                        topic={topic}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Topics;