import { combineReducers } from 'redux';
import {correctAnswer} from './correctAnswer';

const reducers = combineReducers({
    correctAnswer,
});

export default reducers;