import { combineReducers } from 'redux';
import { correctAnswer } from './correctAnswer';
import { questions } from './questions';
import { config } from './config';

const reducers = combineReducers({
    correctAnswer,
    questions,
    config
});

export default reducers;