import React from 'react'
import style from './questions.module.css'
import Form from './form'

import { useNavigate } from 'react-router-dom';

export default function Questions() {

    let navigate = useNavigate()

  return (
      <>
          <Form />
          <div className={style.next}>
              <button onClick={()=>{navigate('/getresult')}}>Next</button>
          </div>
      </>
      
  )
}
