import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBy, decrement, increment } from '../../store/counterSlice';

const CounterPage = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter)

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleAddByTen = () => {
    dispatch(addBy(10))
  }

  return (
    <div>
      <div>
        {count}
      </div>
      <div>
        <button onClick={handleDecrement} type='button' style={{ padding: "20px", margin: "20px" }}>-1</button>
        <button onClick={handleIncrement} type='button' style={{ padding: "20px", margin: "20px" }}>+1</button>
        <button onClick={handleAddByTen} type='button' style={{ padding: "20px", margin: "20px" }}>+10</button>
      </div>
    </div>
  )
}

export default CounterPage