import React from 'react';

class Contacts extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.src} />
                <p style={{display: 'inline', marginLeft: '5px'}}>{this.props.info}</p>
            </div>
        )
    }
}

export default Contacts;