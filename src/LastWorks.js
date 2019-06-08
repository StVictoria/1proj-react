import React from 'react';
import LastWorksImage from './LastWorksImage';

class LastWorks extends React.Component{
    render(){
        return(
            <div className='last-works'>
                <h2>Последние работы</h2>
                <LastWorksImage img='/images/pics/site1.jpg'/>
                <LastWorksImage img='/images/pics/site1.jpg'/>
                <LastWorksImage img='/images/pics/site1.jpg'/>
            </div>
        )
    }
}

export default LastWorks;