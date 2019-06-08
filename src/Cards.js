import React from 'react';
import Card from './Card';

class Cards extends React.Component{
    render(){
        return(
            <div className='cards'>
                <Card src='/images/icons/computer.png'name='name' text='text'/>
                <Card src='hey'name='name' text='text'/>
                <Card src='hey'name='name' text='text'/>
                <Card src='hey'name='name' text='text'/>
                <Card src='hey'name='name' text='text'/>
                <Card src='hey'name='name' text='text'/>
            </div>
        )
    }
}

export default Cards;