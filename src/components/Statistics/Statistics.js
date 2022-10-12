import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const dataLoad = useLoaderData()
    const data = dataLoad.data
    return (
        <div className='w-6/12 mx-auto mt-9'>
            <h1 className='text-3xl mb-12 text-center text-rose-500'>Statistics</h1>
            <LineChart width={1000} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;