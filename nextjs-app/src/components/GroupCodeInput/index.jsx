import React, { useState } from 'react';



const GroupCodeInput = (props) => {
  const [val, setVal] = useState('');
  const {inpid} = props;
  const [plr, setPlr] = useState(props.placeholdr);
  const [hiddenVal, setHiddenVal] = useState(props.value);

    return (
    <div className='groupcode-input-con my-3'>
      <input type="hidden" value={hiddenVal} name={"hashes["+props.name+"]"} />
      <input type="text" className='groupcode-input' id={inpid} value={val} placeholder={plr} onChange={e => {setVal(e.target.value);setHiddenVal(e.target.value); setPlr('');}} />
      <a
          style={{marginLeft: '5px', color: 'var(--primary-1)', fontSize: '1.5em', }}
          className="pointer-item"
          onClick={() => {
          setVal('');
          setPlr('');
          setHiddenVal('');
      }}>✖</a>

    </div>
  )
}

export default GroupCodeInput