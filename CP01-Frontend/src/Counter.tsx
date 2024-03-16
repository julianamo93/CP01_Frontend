import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='padrao'>
      <p className="App">Você clicou {count} vezes</p>
      <div className='buttonsC'>
      <button onClick={() => setCount(count + 1)}>
        Acrescentar número
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrementar número
      </button>
      </div>
    </div>
  );
}

export default Counter;