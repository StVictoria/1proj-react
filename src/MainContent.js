import React from 'react';
import MainContentButton from './MainContentButton';

class MainContent extends React.Component{
    render(){
        return(
            <div className='main-picture'>
                <div className='main-picture-cover'>
                    <h1>Ваш сайт - главный бизнес-инструмент</h1>
                    <h2>Go To Top - Ваш быстрый старт продаж</h2>
                    <MainContentButton/>
                    <div>Arrow left (plus pseudo-elem)</div>
                    <div>Arrow right (plus pseudo-elem)</div>
                </div>
            </div>
        )
    }
}

export default MainContent;