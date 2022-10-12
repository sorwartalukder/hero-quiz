import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ topic }) => {
    const { id, name, logo } = topic;
    console.log(topic)
    return (
        <div className='bg-slate-400'>
            <img className='w-full' src={logo} alt="" />
            <div className='flex justify-between items-center m-5'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <button className='text-2xl font-bold bg-green-600 hover:bg-green-500 py-2 px-3 rounded-md'>
                    <Link to={`/topic/${id}`}>Start Practice</Link>
                </button>
            </div>
        </div>
    );
};

export default Cart;