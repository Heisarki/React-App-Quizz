import { combineReducers } from 'redux';
import {correctAnswer, questions} from './correctAnswer';

const reducers = combineReducers({
    correctAnswer,
    questions
});

export default reducers;