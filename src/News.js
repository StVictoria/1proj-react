import React from 'react';
import NewsCard from './NewsCard';

class News extends React.Component{
    render(){
        return(
            <div className='news'>
                <div className='wrapper'>
                    <h2>Новости</h2>
                    <div className='news-block'>
                        <NewsCard  img='/images/pics/news1.jpg' date='1 января 2018' text='Мы начинаем этот год с наших новых разработок в области маркетинга. Ждём Вас на наших тренингах и лекциях'/>
                        <NewsCard  img='/images/pics/news2.jpg' date='12 марта 2018' text='Мы работаем, Вы отдыхаете! Теперь мы предоставляем полный спектр услуг по привлечению клиентов!'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;