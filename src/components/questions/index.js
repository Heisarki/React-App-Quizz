import { useState } from 'react'
import style from './questions.module.css'
import Form from './form'

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchAnswerKey } from '../../state/action-creator/fetchAnswerKey';
import axios from 'axios';
// import { data } from '../../api/data'

export default function Questions() {
    const [answer_key, setAnswer_key] = useState(new Map());

    const data = useSelector(store => store.questions);
    console.log(data);

    const dispatch = useDispatch();
    let navigate = useNavigate()
    let correctAnswer = 0;

    function handleSubmit() {
        console.log("CLICK");
        let ans_arr = [];
        for (let i = 0; i < data.length; i++) {
            let temp = "";
         
            if (data[i].correct_answers.answer_a_correct === "true")
                temp = "a";
            else if (data[i].correct_answers.answer_b_correct === "true")
                temp = "b";
            else if (data[i].correct_answers.answer_c_correct === "true")
                temp = "c";
            else if (data[i].correct_answers.answer_d_correct === "true")
                temp = "d";
            else if (data[i].correct_answers.answer_e_correct === "true")
                temp = "e";
            else if (data[i].correct_answers.answer_f_correct === "true")
                temp = "f";
            console.log("TEMP >> ", temp);
            ans_arr[i] = temp;
        }

        for (let i = 0; i < data.length; i++) {
            if (answer_key.has(i) && answer_key.get(i) === ans_arr[i]) {
                correctAnswer++;
                console.log("ANSWER >>> ", answer_key.get(i), ans_arr[i]);
            }
        }
        dispatch(fetchAnswerKey(correctAnswer));
        navigate('/getresult');
        console.log(correctAnswer);
        console.log(ans_arr);
    }

  return (
      <>
          <Form obj={{answer_key, setAnswer_key, data}} />
          <div className={style.submit}>
              {/* <button onClick={() => { navigate('/getresult') }}>Submit</button> */}
              <button onClick={handleSubmit}>Submit</button>
          </div>
      </>
      
  )
}
