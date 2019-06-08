import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import MainPage from './MainPage';
import NewsPage from './NewsPage';
import AboutUsPage from './AboutUsPage';
import Contacts from './Contacts';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={MainPage}/>
                <Route path="/news" component={NewsPage}/>
                <Route path="/about-us" component={AboutUsPage}/>
                <Route path="/contacts" component={Contacts}/>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default App;