import React from 'react';

class NewsCard extends React.Component{
    render(){
        return(
                <div className='news-block-card'>
                    <div className='news-block-card-image'></div>
                    <div className='news-block-card-info'>
                        <p style={{fontStyle: 'italic'}}>{this.props.date}</p>
                        <p>{this.props.text}</p>
                        <a className='news-block-card-info-button'>Подробнее</a>
                    </div>
                </div>
        )
    }
}

export default NewsCard;