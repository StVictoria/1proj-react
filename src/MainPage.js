import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Cards from './Cards';
import LastWorks from './LastWorks';
import RecommendationLine from './RecommendationLine';
import News from './News';
import Connection from './Connection';

class MainPage extends React.Component{
    render(){
        return(
            <div>
                <MainContent/>
                <Cards/>
                <LastWorks/>
                <RecommendationLine/>
                <News/>
                <Connection/>
            </div>
        )
    }
}

export default MainPage;