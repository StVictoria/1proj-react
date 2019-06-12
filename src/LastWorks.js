import React from 'react';
import LastWorksImage from './LastWorksImage';

class LastWorks extends React.Component{
    render(){
        return(
            <div className='wrapper'>
                <div className='last-works'>
                    <h2>Последние работы</h2>
                    <div className='last-works-examp'>
                        <LastWorksImage img='/images/pics/site1.jpg'/>
                        <LastWorksImage img='/images/pics/site2.jpg'/>
                        <LastWorksImage img='/images/pics/site3.jpg'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LastWorks;