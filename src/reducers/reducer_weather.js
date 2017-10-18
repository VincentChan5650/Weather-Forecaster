import { FETCH_WEATHER } from '../actions/index'; // get the reference from actioncreator, a string for type

//set the state as an array, pass the action(data) acquired from 3rd party api
export default function(state = [], action){
  //writing a switch state for different type of action
  switch(action.type){
    case FETCH_WEATHER:
      state.concat(action.payload.data);
      //never mutate or modify state in reducer, so we add to existing state
      // then copied a new state to pass

      return [action.payload.data, ...state];
  }
  return state;
}
