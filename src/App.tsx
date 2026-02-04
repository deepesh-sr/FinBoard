import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  fetch('http://localhost:5001/api/stocks/tech-sector')
  .then(res => res.json())
  .then(data => console.log(data));
  return (
    <>
      <div>
        <p className='text-5xl'>Deepesh</p>
        
       </div>
    </>
  )
}

export default App
