import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


function App() {
  const dispatch = useDispatch()
  const countState = useSelector((state) =>
    state.counter
  )

  const handleIncement = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
  } 


  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      <h1 className='text-6xl font-bold'>Counter: {countState}</h1>
      <button className='bg-slate-600 p-3 rounded-full font-bold text-white' onClick={handleIncement} type="button">Increment</button>
      <button className='bg-slate-600 p-3 rounded-full font-bold text-white' onClick={handleDecrement} type='button'>Decrement</button>
    </div>
    </>
  )
}

export default App
