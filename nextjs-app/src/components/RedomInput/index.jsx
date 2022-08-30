import React, { useState } from 'react'

const RedomInput = () => {
  const [val, setVal] = useState('')
  return (
    <div className='rendom-input-con my-3'>
      <input type="text" name="" className='rendom-input' id="" value={val} onChange={e => setVal(e.target.value)} />
      <button onClick={() => setVal('')}>Clear</button>
    </div>
  )
}

export default RedomInput