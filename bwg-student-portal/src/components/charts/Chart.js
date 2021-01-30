import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2'

//how to import data from main.js???
//https://www.youtube.com/watch?v=c_9c5zkfQ3Y&t=854s
class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Bodyweight', 'Mobility', 'Handstands', 'Calisthenics' ],
        datasets: [{
          data: [104, 75, 17, 6,],
          //make the programatic
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            
          ],
        }
        ]
      }
    }
  }

  render() {
    return (
      <div className="chart">'
        <Bar
          data={this.state.chartData}

          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }


}

export default Chart
