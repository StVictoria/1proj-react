import React from 'react';

class RecommendationLineInfo extends React.Component{
    render(){
        return(
            <div className='recom-line-item'>
                <div className='recom-line-item-num'>{this.props.number}</div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default RecommendationLineInfo;