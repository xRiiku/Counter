import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);

    }, 1000);

    if (count === 25){
      clearInterval(interval)
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  

  return (
    
      <div>
        
        <span>
          count is {count}
        </span>
      </div>
  )
}

export default App
