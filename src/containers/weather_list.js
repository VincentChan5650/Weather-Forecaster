import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

  // this helper function set up variables to data from request
  // loop over the data and fetch as individual weather report
  // cityData came from the reducer state, which is came from actioncreator
  renderWeather(cityData){
    const name = cityData.city.name;
    //create an array for each temp value in every 3 hrs
    //by using map to create an array
    //then convert Kelvin degree to other temperature format
    let Ctemps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273.15);
    let Ftemps = _.map(Ctemps, (temp)=> (9/5)*temp+32);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={name}>
        <td className='chartCity'><GoogleMap lon={lon} lat={lat} /></td>
        <td className='chart'><Chart data={Ctemps} data2={Ftemps} color="#2ecc71" unit='°C' unit2='°F'/></td>
        <td className='chart'><Chart data={pressures} data2={null} color="#9b59b6" unit='hPa'/></td>
        <td className='chart'><Chart data={humidities} data2={null} color="#2980b9" unit='%'/></td>
      </tr>
    );
  };

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
            {/* Calling the helper function set up above by mapping it, loop over the array of data */}
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// get data from state(reducer) and pass to the props(containers) for display
function mapStateToProps(state){
  return { weather: state.weather } //get the data from reducer, key is weather matched with key in reducer
}

//no mapPropsToState because we don't send data to actioncreator

//connect container to reducer and action, connect react and redux
export default connect(mapStateToProps)(WeatherList);
