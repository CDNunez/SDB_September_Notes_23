import React from 'react'
import { useState } from 'react'

function Counter() {

  const iCount = () => {
    console.log('runs');
    return 0;
  }

    const [count, setCount] = useState(iCount);

    function addCount() {
        console.log('click add')
        // setCount(count+1)
        setCount(prevCount => prevCount + 1)
        // setCount(prevCount => prevCount + 1)
        // setCount(prevCount => prevCount + 1)
        console.log(count)
    }

    function subtractCount() {
        console.log('click sub')
        setCount(count-1)
        console.log(count)
    }


  return (
    <>
    <div className='counter'>
    <h1>Counter</h1>
    <button onClick={subtractCount}>-</button>
    <span>{count}</span>
    <button onClick={addCount}>+</button>

    </div>
    </>
  )
}

export default Counter