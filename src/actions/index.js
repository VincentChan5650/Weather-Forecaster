import axios from 'axios';  //axios is used for ajax request, asyn request

const API_KEY = '8c6b939c2fac655e2360d316d262757b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //url for requesting data
export const FETCH_WEATHER = 'FETCH_WEATHER'; //set up a variable for the type

//create an actioncreator to fetch the data
export function fetchWeather(city){
  //set up the url for requesting data only cities in US
  const url = `${ROOT_URL}&q=${city},us`;

  //get the request data by using axios and GET method
  const request = axios.get(url);
  console.log(request);

  //return to reducer, which will link with this actioncreator and reducer in containers
  return {
    type:FETCH_WEATHER, //not a string but a const variable
    payload: request // the data was request

  }
}
