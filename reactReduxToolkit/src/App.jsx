import Counter from './features/Counters/Counter.jsx';
import Todos from './features/Todos/Todos.jsx';
import Posts from './features/Posts/Posts.jsx';


function App() {

  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold mb-4'>React Redux Toolkit</h1>
      <h2 className='text-2xl font-bold mb-2'>Counter</h2>
      <Counter />
      {/* <h2 className='text-2xl font-bold mb-2'>Todos</h2>
      <Todos />
      <h2 className='text-2xl font-bold mb-2'>Posts</h2>
      <Posts /> */}
    </div>
    </>
  )
}

export default App
