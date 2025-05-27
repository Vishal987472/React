import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice.js';
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className='text-2xl font-bold mb-2 text-center'>Count: {count}</h3>
      <button className='' onClick={() => dispatch(increment())}>➕ Increment</button>
      <button className='' onClick={() => dispatch(decrement())}>➖ Decrement</button>
    </div>
  );
}


export default Counter;
