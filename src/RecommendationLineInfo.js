import React from 'react';

class RecommendationLineInfo extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.number}</div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default RecommendationLineInfo;