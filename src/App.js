import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HistoryChart from './HistoryChart'

class App extends Component {
constructor(props){
super(props)

this.state={
historyData:[],
day:0


}

}


componentDidMount(){

 for (let index = 1; index < 8; index++) {
    fetch(`http://data.fixer.io/api/2018-08-0${index}?access_key=3f8554c44c10d10acb470fce230a18ca&symbols=USD,AUD,CAD&format=1`)
    .then((data)=>data.json())
    .then((data)=>{
      const historyData= this.state.historyData
      const date=data.date
     const {AUD,CAD,USD}=data.rates
     const dataObj=  {date,AUD,CAD,USD}
     historyData.push(dataObj)
   this.setState({historyData,day:index})


    })


   
 }



}



  render() {

    const {day,historyData}=this.state
    return (
      <div className="App">

      { day!==7? <div>2</div>:<HistoryChart historyData={historyData}/>}
  
      
     
{day}
  
      </div>
    );
  }
}

export default App;
