import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetings/greetings';

export default function Greeter() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getGreeting());
    }, [dispatch]);
  
    const state = useSelector((state) => state.greeting.message);
  
    return (
      <div>{state}</div>
    );
};