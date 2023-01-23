import React, { useState } from 'react'
import { useEffect } from 'react';
import style from './home.module.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from '../../state/action-creator/fetchQuestions';

import { fetchLevel, fetchCategory } from '../../state/action-creator/fetchConfig';

export default function Home() {
    const level = useSelector(store => store.config[0]);
    const category = useSelector(store => store.config[1]);
    console.log(level, category)
    
    const URL = `https://quizapi.io/api/v1/questions?apiKey=WyMtytFunRzTMqUDNr0JctjXtnaEkTtO8jZCmU1D&difficulty=${level}&limit=10&tags=${category}`;

    
    console.log(URL);
    
    const dispatch = useDispatch();
    
    const data = async () => {
        const questions = await axios.get(URL)
            .catch(err => console.log(err));
        dispatch(fetchQuestions(questions.data));
    }
    useEffect(() => {
        data();
    },[level, category]); 
    
    const ques = useSelector(store => store.questions);
    console.log(ques);
    
    let navigate = useNavigate();

    function handleChangeLevel(e) {
        dispatch(fetchLevel(e.target.value));
        console.log(level);
    }

    function handleChangeCategory(e) {
        dispatch(fetchCategory(e.target.value));
        console.log(category);
    }
  return (
    <>
        <div className={style.home}>
            <div className={style.description}>
                <h2>Welcome to Online Quizz Practice</h2>
            </div>  
            <div className={style.button}>
                <button onClick={()=>{navigate("/questions")}}>Take a Quizz</button>
            </div>
            <div className={style.config}>
                <div className={style.level}>
                    <label className={style.label} htmlFor="level">Difficulty</label>
                    <select id="level" onChange={handleChangeLevel}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Meduim</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div className={style.category}>
                    <label className={style.label} htmlFor="category">Category</label>
                    <select id="category" onChange={handleChangeCategory}>
                        <option value="Kubernetes">Kubernetes</option>
                        {/* <option value="Random">Random</option>       */}
                        <option value="DevOps">DevOps</option>
                        {/* <option value="Programming">Programming</option> */}
                        <option value="Docker">Docker</option>
                        <option value="Linux">Linux</option>
                        {/* <option value="Networking">Networking</option> */}
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}
