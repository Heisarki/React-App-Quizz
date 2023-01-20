import React from 'react'
import style from './exit.module.css'
import '../Animation.css'
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

export default function Exit() {
    let navigate=useNavigate()
    const correct = useSelector(state => state.correctAnswer);
    console.log(correct);
    const incorrect = 20-correct;
    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.text}>
                    <div>
                        <h3>Correct Answers: {correct}</h3>
                        <h4>Incorrect Answers: {incorrect}</h4>
                    </div>
                    <div>
                        <button onClick={()=>{navigate('/piechart')}}>Result in Pie Chart</button>
                    </div>
                </div>

                <div className={style.button}>
                    <button onClick={()=>{navigate('/')}}>Exit</button>
                </div>
            </div>

        </>
  )
}
