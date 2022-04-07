import React, { useState, useEffect }  from 'react'
import style from '../questions.module.css'
import { data } from '../../../api/data'
// import './select.css'

export default function () {

    // const select = () => {
    //     console.log(data.correct_answers.answer_a_correct)
    // }

    const [nextQuestions, setNext] = useState(0)
    const [bool, setBool] = useState(true)
    // const [prevQuestions, setPrev] = useState(nextQuestions)

    

    // const form = data.map((data, index) =>

    // )

    useEffect(()=>{
        console.log("useEffect Run")
    },[nextQuestions])
    
    const list = (i) => {
            return(
                <form className={bool ? `${style.form}` : `${style.form2}`}>
                    <h1 className={style.number}>{i + 1}</h1>
                    <h1 className={style.questions}>{data[i].question}</h1>
                    
                    <div className={style.answers}>
                        <div className={style.options}>
                            <input id='a' type="radio" />
                            <label htmlFor='a'>{data[i].answers.answer_a}</label>
                        </div>
                        <div className={style.options}>
                            <input id='b' type="radio" />
                            <label htmlFor='b'>{data[i].answers.answer_b}</label>
                        </div>
                        <div className={style.options}>
                            <input id='c' type="radio" />
                            <label htmlFor='c'>{data[i].answers.answer_c}</label>
                        </div>
                        <div className={style.options}>
                            <input id='d' type="radio" />
                            <label htmlFor='d'>{data[i].answers.answer_d}</label>
                        </div>
                    </div>
                </form>
            )
    }

    const next = () => {
        setNext(prev => prev + 1)
        setBool(!bool)
    } 
    const prev = () => {
        setNext(prev => prev - 1)
        setBool(!bool)
    }
  return (
      <div>
          {list(nextQuestions)}
          <div className={style.nextPrev}>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>       
          </div>
    </div>
  )
}



{/* <form className={style.form}>
<h1 className={style.questions}>{data[questionsNumber].question}</h1>
<div className={style.answers}>
    <div className={style.options}>
        <input id='a' type="radio"/>
        <label for='a'>{data[questionsNumber].answers.answer_a}</label>
    </div>
    <div className={style.options}>
        <input id='b' type="radio"/>
        <label for='b'>{data[questionsNumber].answers.answer_b}</label>
    </div>
    <div className={style.options}>
        <input id='c' type="radio"/>
        <label for='c'>{data[questionsNumber].answers.answer_c}</label>
    </div>
    <div className={style.options}>
        <input id='d' type="radio"/>
        <label for='d'>{data[questionsNumber].answers.answer_d}</label>
    </div>
</div>
</form> */}


{/* <form className={style.form}>
<h1 className={style.questions}>{data.question}</h1>
<div className={style.answers}>
    <div className={style.options}>
        <input id='a' type="radio" onClick={() => {console.log(data.correct_answers.answer_a_correct)}} />
        <label for='a'>{data.answers.answer_a}</label>
    </div>
    <div className={style.options}>
        <input id='b' type="radio" onClick={() => {console.log(data.correct_answers.answer_b_correct)}} />
        <label for='b'>{data.answers.answer_b}</label>
    </div>
    <div className={style.options}>
        <input id='c' type="radio" onClick={() => {console.log(data.correct_answers.answer_c_correct)}} />
        <label for='c'>{data.answers.answer_c}</label>
    </div>
    <div className={style.options}>
        <input id='d' type="radio" onClick={() => {console.log(data.correct_answers.answer_d_correct)}} />
        <label for='d'>{data.answers.answer_d}</label>
    </div>
</div>
</form> */}