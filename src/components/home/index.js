import React from 'react'
import { useEffect } from 'react';
import style from './home.module.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from '../../state/action-creator/fetchAnswerKey';

export default function Home() {
    
    const URL = "https://quizapi.io/api/v1/questions?apiKey=WyMtytFunRzTMqUDNr0JctjXtnaEkTtO8jZCmU1D&category=sql&difficulty=Easy&limit=20&tags=MySQL";
    
    const dispatch = useDispatch();
    
    const data = async () => {
        const questions = await axios.get(URL)
            .catch(err => console.log(err));
        dispatch(fetchQuestions(questions.data));
    }
    useEffect(() => {
        data();
    },[]); 
    
    const ques = useSelector(store => store.questions);
    console.log(ques);
    
    let navigate = useNavigate();
  return (
      <>
          <div className={style.home}>
            <div className={style.description}>
                <h2>Welcome to Online Quizz Practice</h2>
            </div>  
            <div className={style.button}>
                <button onClick={()=>{navigate("/questions")}}>Take a Quizz</button>
            </div>
          </div>
      </>
  )
}
