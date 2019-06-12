import React from 'react';

class LastWorksImage extends React.Component{
    render(){
        return(
            <div className='last-works-examp-image'>
                <img src={this.props.img}/>
            </div>
        )
    }
}

export default LastWorksImage;