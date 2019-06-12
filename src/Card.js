import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className='cards-content-item'> 
                <div className='cards-content-item-img'><img src={this.props.src}/></div>
                <h3>{this.props.name}</h3>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Card;