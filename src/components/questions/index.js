import { useState, useEffect } from 'react'
import style from './questions.module.css'
import Form from './form'

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchAnswerKey } from '../../state/action-creator/fetchAnswerKey';
import axios from 'axios';
import { questions } from '../../api/data'
import { fetchQuestions } from '../../state/action-creator/fetchQuestions';

export default function Questions() {
    
    const [answer_key, setAnswer_key] = useState(new Map());
    const data = useSelector(store => store.questions);
    
    useEffect(() => {
        const localData = localStorage.getItem("_quizz_app_question_data")
        if (localData)
            dispatch(fetchQuestions(JSON.parse(localData)));
    },[])

    // const LOCAL_STORAGE_KEY = 'questions';
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY.JSON.stringify(data));
    // },[data]);
    

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
          {
              data.length === 0 
                  ? <p style={{color: "white"}}>Loading question...</p>
                  :<Form obj={{ answer_key, setAnswer_key, data }} />
          }
          <div className={style.submit}>              
              <button onClick={handleSubmit}>Submit</button>
          </div>
      </>
      
  )
}
