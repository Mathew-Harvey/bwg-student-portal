import React from 'react';
import {Bar, Pie} from 'react-chartjs-2'
import Main from '../main/Main'

const Chart = (props) => {

  return (
    <div> <Pie 
            data = {{
              labels: ['Bodyweight', 'Mobility', 'Calisthenics', 'Beginner', 'Handstand'],
        datasets: [{
            label: 'Which Class Do I Like the Most?',

            data: [props.bodyweightClass, props.mobilityClass, props.caliClass, props.begClass, props.handstandClass],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
            }} 
            height = {400}
            width = {600}
            /> </div>
  )
}

export default Chart