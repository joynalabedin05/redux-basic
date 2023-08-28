import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../redux/features/counter/CounterSlice';

const Counter = () => {
    const  {count} = useSelector((state)=>state.counter);
    // console.log(count);
    const dispatch = useDispatch();
    return (
        <div className='m-10'>
            <h3>hellow counter</h3>
            <button className='bg-purple-200 p-3 my-3 rounded' onClick={()=>dispatch(incrementByValue(5))}>increment by five</button> <br />
            <button className='bg-purple-200 p-3 my-3 rounded' onClick={()=>dispatch(increment())}>increment</button>
            <div>
                <h1 className='text-4xl'>{count}</h1>
            </div>
            <button className='bg-purple-200 p-3 my-3 rounded' onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;