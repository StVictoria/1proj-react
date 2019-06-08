import React from 'react';
import RecommendationLineInfo from './RecommendationLineInfo';

class RecommendationLine extends React.Component{
    render(){
        return(
            <div className='recom-line'>
                <RecommendationLineInfo number='123' text='text'/>
                <RecommendationLineInfo number='123' text='text'/>
                <RecommendationLineInfo number='123' text='text'/>
                <RecommendationLineInfo number='123' text='text'/>
            </div>
        )
    }
}

export default RecommendationLine;