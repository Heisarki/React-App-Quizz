import React, { useState, useEffect }  from 'react'
import style from '../questions.module.css'
import { data } from '../../../api/data'

export default function ({obj}) {

    const [nextQuestions, setNext] = useState(0)
    // const [answer_key, setAnswer_key] = useState(new Map());
    const { answer_key, setAnswer_key } = obj;
    const [bool, setBool] = useState(true)
    const [value, setValue] = useState();


    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
        
    }

    useEffect(() => {
        console.log("Value", value);
        setAnswer_key(() => answer_key.set(nextQuestions, value));
        console.log(answer_key);
    },[value])
    

    const list = (questionsNumber) => {
            return(
                <form className={bool ? `${style.form}` : `${style.form2}`}>
                    <h1 className={style.number}>{questionsNumber+1}</h1>
                    <h1 className={style.questions}>{data[questionsNumber].question}</h1>
                    
                    <div className={style.answers}>
                        <div className={style.options}>
                            <input id='a' type="radio" name="option" value = "a" checked = {"a" === value} onChange={handleChange}/>
                            <label htmlFor='a'>{data[questionsNumber].answers.answer_a}</label>
                        </div>
                        <div className={style.options}>
                            <input id='b' type="radio" name="option" value = "b" checked = {"b" === value} onChange={handleChange}/>
                            <label htmlFor='b'>{data[questionsNumber].answers.answer_b}</label>
                        </div>
                        <div className={style.options}>
                            <input id='c' type="radio" name="option" value = "c" checked = {"c" === value} onChange={handleChange}/>
                            <label htmlFor='c'>{data[questionsNumber].answers.answer_c}</label>
                        </div>
                        <div className={style.options}>
                            <input id='d' type="radio" name="option" value = "d" checked = {"d" === value} onChange={handleChange}/>
                            <label htmlFor='d'>{data[questionsNumber].answers.answer_d}</label>
                        </div>
                        {/* <input id={style.hide} type="radio" name="option" checked={check}/> */}
                    </div>

                </form>
            )
    }


    const next = () => {
        if (nextQuestions == 19)
            return;
        if (answer_key.has(nextQuestions)) {
            setValue(answer_key.get(nextQuestions+1));
            console.log( "Prev", answer_key.get(nextQuestions), value);
        } else {
            setValue();
        }

        setNext(prev => prev + 1)

    } 
    const prev = () => {
        if (nextQuestions === 0)
            return;
        if (answer_key.has(nextQuestions)) {
            setValue(answer_key.get(nextQuestions-1));
            console.log( "Prev", answer_key.get(nextQuestions-1), value);
        }

        setNext(prev => prev - 1)
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