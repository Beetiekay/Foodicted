import React, { useState } from 'react'
import Alert from './Alert';

const Singin = () => {
  const [ShowAlert, setShowAlert] = useState(false);

  const handleOnClose = () => setShowAlert(false);

  return (
    <div>
         <button onClick={() => setShowAlert(true)} className='cursor-pointer'>
         <h1>Signin</h1>
        </button>
        <Alert onClose={handleOnClose} Visible={ShowAlert}/>
    </div>
   
  )
}

export default Singin;