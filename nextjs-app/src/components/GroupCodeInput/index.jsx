import React, { useState } from 'react'

const GroupCodeInput = () => {
  const [val, setVal] = useState('')
  return (
    <div className='groupcode-input-con my-3'>
      <input type="text" name="" className='groupcode-input' id="" value={val} onChange={e => setVal(e.target.value)} />
      <button onClick={() => setVal('')}>Clear</button>
    </div>
  )
}

export default GroupCodeInput