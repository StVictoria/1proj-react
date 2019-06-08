import React from 'react';
import NewsCard from './NewsCard';

class News extends React.Component{
    render(){
        return(
            <div>
                <h2>Новости</h2>
                <NewsCard  date='12 34 3000' text='text'/>
                <NewsCard  date='12 34 3000' text='text'/>
            </div>
        )
    }
}

export default News;