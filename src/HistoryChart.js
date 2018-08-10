import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer}  from 'recharts'



export default class HistoryChart extends Component {
  render() {

const {historyData}=this.props
    return (
      <div>
<ResponsiveContainer width='30%' aspect={4.0/3.0}>

	<LineChart data={historyData}
     >
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="CAD" stroke="#8884d8" />
       <Line type="monotone" dataKey="AUD" stroke="#82ca9d" />
       <Line type="monotone" dataKey="USD" stroke="#da1a1a" />
      </LineChart>
</ResponsiveContainer>        





      </div>
    )
  }
}
