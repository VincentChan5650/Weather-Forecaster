import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

//set different reducers with key and export
const rootReducer = combineReducers({
  weather:WeatherReducer //state from (actioncreactor(data) to reducer_weather(state))
});

export default rootReducer;
