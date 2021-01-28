import React from 'react';
import { Card, card } from '@uifabric/react-cards';
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';


const container = {
    display:'flex',
    justifyContent:'center',
    margin: '10vh 0' 
}

const icon = {
    fontSize: 24, 
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4'
}

const styles = {
    cardStyles: {
        root: {
            backgroundColor: 'white',
            padding: 20,
            borderTop: '5px solid #0078d4',
            width: '90%',
            maxWidth: "90%",
            margin: 'auto',
            
        }
    },
    header: {
        root:{
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
    amount: {
        root:{
            fontSize: 26, 
            paddingBottom: 20,
            paddingTop: 30,
        }
    },
}
const cards = [
    {
        title: "What class do I like the mst",
        amount: 'GRAPH TO GO HERE',
        icon: 'Money',
    },
    {
        title: "Total Classes Attended",
        amount: '125',
        icon: 'PaymentCard',
    },
    {
        title: "Total Class the Week",
        amount: '3',
        icon: 'Savings',
    },
]

const CardsSection = () => {
    initializeIcons();
    return (
        <div style={container}>
{cards.map((card)=> (
    <div className="s-Grid-col ms-sm3 ms-xl3">
        <Card styles={styles.cardStyles}>
            <Card.Section>
                <Card.Item>
                    <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                    <Text styles={styles.header} >{card.title }</Text>
                </Card.Item>
                <Card.Item>
                    <Text styles={styles.amount} >{card.amount}</Text>
                </Card.Item>

            </Card.Section>
        </Card>
    </div>
))}
        </div>
    )
}

export default CardsSection