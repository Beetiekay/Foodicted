import React, { useState } from 'react'
import Alert from './Alert';

const Singup = () => {
  const [ShowAlert, setShowAlert] = useState(false);

  const handleOnClose = () => setShowAlert(false);

  return (
    <div>
         <button onClick={() => setShowAlert(true)} className='cursor-pointer'>
         <h1>Signup</h1>
        </button>
        <Alert onClose={handleOnClose} Visible={ShowAlert}/>
    </div>
   
  )
}

export default Singup;