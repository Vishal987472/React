import { useState ,useCallback , useEffect, useRef  } from 'react'


function App() {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)

  const passref = useRef(null)
  const copyToClipboard = useCallback(() => {
    passref.current?.select()
    passref.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  },[password])

  const generatePassword = useCallback(() => {
    let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbers) {
      char += '0123456789'
    }
    if (characters) {
      char += '!@#$%^&*()_+[]{}|;:,.<>?'
    }
    let password = ''
    for (let i = 0; i < length; i++) {
      password += char.charAt(Math.floor(Math.random() * char.length))
    }

    setPassword(password)
  
  }
  , [length, numbers, characters])


  useEffect(() => {
    generatePassword()
  }, [length, numbers, characters])


  
  return (
    <>
    <div className='flex flex-col p-3 justify-center h-auto bg-gray-600'>
      <div>
        <h1 className='text-white text-3xl font-bold text-center p-3 m-5' >Password Generator</h1>
      </div>
      <div className='flex justify-center items-center'>
        <input type="text" value={password} ref={passref} className='rounded-s-full h-10 w-1/3 p-4 text-xl' readOnly/>
        <button onClick={copyToClipboard} className='bg-blue-500 text-white text-lg font-bold outline-none rounded-e-full w-20 h-10'>Copy</button>
      </div>
      <div className='flex justify-center items-center mt-3'>
        <input type="range" min={8} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="" className='text-white font-bold p-2 text-lg'>Length {length}</label>
        <input type="checkbox" defaultValue={numbers} onChange={()=>{setNumbers((prev) => !prev)}}/>
        <label htmlFor="" className='text-white font-bold p-2 text-lg'>Numbers</label>
        <input type="checkbox" defaultValue={characters} onChange={()=>{setCharacters((prev) => !prev)}}/>
        <label htmlFor="" className='text-white font-bold p-2 text-lg'>Characters</label>
      </div>
    </div>
    </>
  )
}

export default App
