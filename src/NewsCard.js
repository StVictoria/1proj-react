import React from 'react';

class NewsCard extends React.Component{
    render(){
        return(
            <div className='card'>
                <div>Image</div>
                <div>
                    <p style={{fontStyle: 'italic'}}>{this.props.date}</p>
                    <p>{this.props.text}</p>
                    <a>Подробнее</a>
                </div>
            </div>
        )
    }
}

export default NewsCard;