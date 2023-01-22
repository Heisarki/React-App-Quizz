import axios from "axios";
import { useEffect } from "react";
import { fetchQuestions } from "../state/action-creator/fetchAnswerKey";

export function apiReq() {
    const URL = "https://quizapi.io/api/v1/questions?apiKey=WyMtytFunRzTMqUDNr0JctjXtnaEkTtO8jZCmU1D&category=sql&difficulty=Easy&limit=10&tags=MySQL";

    const data = async () => {
        const questions = await axios.get(URL)
            .catch(err => console.log(err));
        console.log(questions);
    } 
}
