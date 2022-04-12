import React, { useState, useEffect }  from 'react'
import style from '../questions.module.css'
import { data } from '../../../api/data'

export default function () {

    const [nextQuestions, setNext] = useState(0)
    const [answers, setAnswer] = useState([
        {
            q_number: null,
            answer: null
        }
    ])

    useEffect(() => {
        setAnswer([{ q_number: 1, answer: data[0].correct_answers.answer_a_correct }])
        
    }, [])
    
    // console.log("This is an aray of answer")
    console.log(answers)

    const list = (questionsNumber) => {

        // console.log("List of answer")
        // console.log(`${questionsNumber} ${data[questionsNumber].correct_answers.answer_a_correct}`)
        // console.log(`${questionsNumber} ${data[questionsNumber].correct_answers.answer_b_correct}`)
        // console.log(`${questionsNumber} ${data[questionsNumber].correct_answers.answer_c_correct}`)
        // console.log(`${questionsNumber} ${data[questionsNumber].correct_answers.answer_d_correct}`)
        
        // setAnswer(()=>'data')
        // setAnswer([...answers, data[questionsNumber].correct_answers.answer_b_correct])
        // setAnswer([...answers, data[questionsNumber].correct_answers.answer_c_correct])
        // setAnswer([...answers, data[questionsNumber].correct_answers.answer_d_correct])


            return(
                <form className={true ? `${style.form}` : `${style.form2}`}>
                    <h1 className={style.number}>{questionsNumber + 1}</h1>
                    <h1 className={style.questions}>{data[questionsNumber].question}</h1>
                    
                    <div className={style.answers}>
                        <div className={style.options}>
                            <input id='a' type="radio" name="foo" />
                            <label htmlFor='a'>{data[questionsNumber].answers.answer_a} >>> Answer {data[questionsNumber].correct_answers.answer_a_correct}</label>
                        </div>
                        <div className={style.options}>
                            <input id='b' type="radio" name="foo" />
                            <label htmlFor='b'>{data[questionsNumber].answers.answer_b} >>> Answer {data[questionsNumber].correct_answers.answer_b_correct}</label>
                        </div>
                        <div className={style.options}>
                            <input id='c' type="radio" name="foo" />
                            <label htmlFor='c'>{data[questionsNumber].answers.answer_c} >>> Answer {data[questionsNumber].correct_answers.answer_c_correct}</label>
                        </div>
                        <div className={style.options}>
                            <input id='d' type="radio" name="foo" />
                            <label htmlFor='d'>{data[questionsNumber].answers.answer_d} >>> Answer {data[questionsNumber].correct_answers.answer_d_correct}</label>
                        </div>
                        <input id={style.hide} type="radio" name="foo" checked={true} />
                    </div>
                </form>
            )
    }

    const next = () => {
        setNext(prev => prev + 1)
        console.log("List of answer")
        console.log(nextQuestions)
        
        console.log(`${nextQuestions + 1} ${data[nextQuestions + 1].correct_answers.answer_a_correct}`)
        console.log(`${nextQuestions + 1} ${data[nextQuestions + 1].correct_answers.answer_b_correct}`)
        console.log(`${nextQuestions + 1} ${data[nextQuestions + 1].correct_answers.answer_c_correct}`)
        console.log(`${nextQuestions + 1} ${data[nextQuestions + 1].correct_answers.answer_d_correct}`)
        
        // setAnswer([...answers, data[nextQuestions].correct_answers.answer_a_correct])
        // setAnswer([...answers, data[nextQuestions].correct_answers.answer_b_correct])
        // setAnswer([...answers, data[nextQuestions].correct_answers.answer_c_correct])
        // setAnswer([...answers, data[nextQuestions].correct_answers.answer_d_correct])
        setAnswer([...answers, { q_number: nextQuestions + 2, answer: data[nextQuestions + 1].correct_answers.answer_a_correct }])

    } 
    const prev = () => {
        setNext(prev => prev - 1)
        console.log(`${nextQuestions -1} ${data[nextQuestions -1].correct_answers.answer_a_correct}`)
        console.log(`${nextQuestions -1} ${data[nextQuestions -1].correct_answers.answer_b_correct}`)
        console.log(`${nextQuestions -1} ${data[nextQuestions -1].correct_answers.answer_c_correct}`)
        console.log(`${nextQuestions - 1} ${data[nextQuestions - 1].correct_answers.answer_d_correct}`)
        
    }

    console.log(nextQuestions)
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



// <div className={style.answers}>
//                         <div className={answer ? `${style.options}` : `${style.options2}`}>
//                             <input id='a' type="radio" onClick={()=>{
//                                 setAnswer(data[i].correct_answers.answer_a_correct)
//                                 console.log(`log ${answer}`)}} />
//                             <label htmlFor='a'>{data[i].answers.answer_a}</label>
//                         </div>
//                         <div className={answer ? `${style.options}` : `${style.options2}`}>
//                             <input id='b' type="radio" onClick={()=>{
//                                 setAnswer(data[i].correct_answers.answer_b_correct)
//                                 console.log(`log ${answer}`)}} />
//                             <label htmlFor='b'>{data[i].answers.answer_b}</label>
//                         </div>
//                         <div className={answer ? `${style.options}` : `${style.options2}`}>
//                             <input id='c' type="radio" onClick={()=>{
//                                 setAnswer(data[i].correct_answers.answer_c_correct)
//                                 console.log(`log ${answer}`)}} />
//                             <label htmlFor='c'>{data[i].answers.answer_c}</label>
//                         </div>
//                         <div className={answer ? `${style.options}` : `${style.options2}`}>
//                             <input id='d' type="radio" onClick={()=>{
//                                 setAnswer(data[i].correct_answers.answer_d_correct)
//                                 console.log(`log ${answer}`)}} />
//                             <label htmlFor='d'>{data[i].answers.answer_d}</label>
//                         </div>
//                     </div>