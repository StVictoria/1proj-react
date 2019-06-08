import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import MainPage from './MainPage';
import News from './News';
import AboutUs from './AboutUs';
import Contacts from './Contacts';
import Menu from './Menu';
import Header from './Header';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={MainPage}/>
                <Route path="/news" component={News}/>
                <Route path="/about-us" component={AboutUs}/>
                <Route path="/contacts" component={Contacts}/>
            </BrowserRouter>
        )
    }
}

export default App;