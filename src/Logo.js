import React from 'react';

class Logo extends React.Component{
    render(){
        return(
            <div className='header-logo'>
                <div className='header-logo-img'></div>
                <p style={{fontSize: '40px', color: '#2cc5ff', marginLeft: '20px'}}>GO TO <span style={{color: "#d0266d"}}>TOP</span></p>
            </div>
        )
    }
}

export default Logo;