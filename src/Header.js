import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <Logo/>
                <Menu/>
            </div>
        )
    }
}

export default Header;