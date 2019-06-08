import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <div className='main-menu'>
                <a><Link to="/">Главная</Link></a>
                <a><Link to="/news">Новости</Link></a>
                <a><Link to="/about-us">О компании</Link></a>
                <a><Link to="/contacts">Контакты</Link></a>
            </div>
        )
    }
}

export default Menu;