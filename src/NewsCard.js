import React from 'react';

class NewsCard extends React.Component{
    render(){
        return(
            <div>
                <div>Image</div>
                <div>
                    {this.props.date}
                    {this.props.text}
                    <a>Подробнее</a>
                </div>
            </div>
        )
    }
}

export default NewsCard;