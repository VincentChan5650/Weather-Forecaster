import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


export default (props)=>{
  return(
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: {average(props.data)} {props.unit} {average(props.data2)} {props.unit2}</div>
    </div>
  )
}

function average(data){
  if(!data){
    return null;
  }
  return _.round(_.sum(data)/data.length);
}
