import React from 'react';

class MainContent extends React.Component{
    render(){
        return(
            <div className='main-picture'>
                <div className='main-picture-cover'>
                    <h1>Ваш сайт - главный бизнес-инструмент</h1>
                    <p style={{fontSize: '19px'}}>GO TO TOP - Ваш быстрый старт продаж</p>
                    <div class='button'>О НАС</div>
                    <div className='arrow-left'></div>
                    <div className='arrow-right'></div>
                </div>
            </div>
        )
    }
}

export default MainContent;