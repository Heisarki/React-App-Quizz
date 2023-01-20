import { useState } from 'react'
import style from './questions.module.css'
import Form from './form'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchAnswerKey } from '../../state/action-creator/fetchAnswerKey';

export default function Questions() {
    const [answer_key, setAnswer_key] = useState(new Map());
    
    const dispatch = useDispatch();
    let navigate = useNavigate()
    const correctAnswer = 4;

    function handleSubmit() {
        console.log("CLICK");
        navigate('/getresult');
        dispatch(fetchAnswerKey(correctAnswer));
    }

  return (
      <>
          <Form obj={{answer_key, setAnswer_key}} />
          <div className={style.submit}>
              {/* <button onClick={() => { navigate('/getresult') }}>Submit</button> */}
              <button onClick={handleSubmit}>Submit</button>
          </div>
      </>
      
  )
}
