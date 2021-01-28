import React from 'react';
import { classNamesFunction, DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';


const classAttendence = [
    {
        Bodyweight: 'graph goes here'
    },
    {
        Bodyweight: 'graph goes here'
    },
    {
        Bodyweight: 'graph goes here'
    },
    {
        Bodyweight: 'graph goes here'
    },
]
const classNames = mergeStyleSets({
    table:{
        margin: 'auto',
    }
})
const ClassAttendenceTable = () => {
    return (
        <div>
            <div className = {`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList
                    items={classAttendence}
                />
            </div>
        </div>
    )
}

export default ClassAttendenceTable


//https://www.youtube.com/watch?v=P9s6dsdu_9c