import React from 'react'
import style from '../questions.module.css'
import {data} from '../../../api/data'

export default function () {

    const form = data.map((data)=>
        <form className={style.form}>
              <h1 className={style.questions}>{data.question}</h1>
              <div className={style.answers}>
                  <div className={style.options}>
                      <input id='a' type="radio"/>
                      <label for='a'>{data.answers.answer_a}</label>
                  </div>
                  <div className={style.options}>
                      <input id='b' type="radio"/>
                      <label for='b'>{data.answers.answer_b}</label>
                  </div>
                  <div className={style.options}>
                      <input id='c' type="radio"/>
                      <label for='c'>{data.answers.answer_c}</label>
                  </div>
                  <div className={style.options}>
                      <input id='d' type="radio"/>
                      <label for='d'>{data.answers.answer_d}</label>
                  </div>
              </div>
          </form>
    )

    const questionsNumber = 4;
  return (
    <div>
        {form}
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
