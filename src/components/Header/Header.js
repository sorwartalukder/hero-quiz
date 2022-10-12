import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-violet-300 '>
            <div className=' flex justify-between items-center py-4 w-10/12 mx-auto'>
                <h1 className='text-3xl'>Hero Quaz</h1>
                <div >
                    <Link className='mr-4 text-xl' to="/">Home</Link>
                    <Link className='mr-4 text-xl' to="/">Topics</Link>
                    <Link className='mr-4 text-xl' to="/statistics">Statistics</Link>
                    <Link className='mr-4 text-xl' to="/blog">Blog</Link>
                    <Link className='mr-4 text-xl' to="/blog">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;