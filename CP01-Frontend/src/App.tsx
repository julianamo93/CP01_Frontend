import { useState } from 'react'
import Counter from './Counter';
import './App.css';
import './Componentes/useFetcher';
import UseFetcher from './Componentes/useFetcher';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>  
        <h1 className='App'>Functional Counter</h1>
        <hr></hr>
        <Counter></Counter>        
      </div>
      <div>
        <UseFetcher></UseFetcher>
      </div>
    </>
  )
}

export default App


