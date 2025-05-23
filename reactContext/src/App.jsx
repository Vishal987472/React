import { useState } from 'react';
import ThemeContext from './context/ThemeContest';
import Button from './components/Button';



function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`flex flex-col items-center justify-center h-screen   ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
          <h1 className="text-2xl font-bold mb-4 text-red-500">React Context API Example</h1>
          <Button />
          <p className="m-2">The current theme is: {theme}</p>
        </div>
        </ThemeContext.Provider>
    </>
  )
}

export default App
