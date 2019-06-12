import React from 'react';
import Card from './Card';

class Cards extends React.Component{
    render(){
        return(
            <div className='cards'>
                <div className='wrapper'>
                    <div className='cards-content'>
                        <Card src='/images/icons/computer.png'name='Создадим продающий сайт' text='text'/>
                        <Card src='/images/icons/networking2.png'name='Выберем аудиторию' text='text'/>
                        <Card src='/images/icons/settings.png'name='Настроим статистику' text='text'/>
                        <Card src='/images/icons/networking.png'name='Разовьем соц.сети' text='text'/>
                        <Card src='/images/icons/laptop.png'name='Минимизируем бюджет' text='text'/>
                        <Card src='/images/icons/startup.png'name='Привлечем клиентов' text='text'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;