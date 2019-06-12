import React from 'react';
import Contacts from './Contacts';

class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='wrapper'>
                    <div className='footer-block'>
                        <div className='footer-block-content'>
                            <h3>О нас</h3>
                            <p> Quisque a ornare neque. Maecenas sit amet feugiat lorem. Fusce accumsan varius lacus et dignissim. Phasellus in gravida odio. Integer a luctus nisi.</p>
                        </div>
                        <div className='footer-block-content'>
                            <h3>Читайте в новостях</h3>
                            <p>Praesent mattis ante sed quam semper, quis sodales felis ullamcorper.</p>
                        </div>
                        <div className='footer-block-content'>
                            <h3>О нас</h3>
                            <Contacts src='/images/icons/placeholder.png' info='adress'/>
                            <Contacts src='/images/icons/telephone.png' info='tel'/>
                            <Contacts src='/images/icons/mail.png' info='mail'/>
                        </div>
                    </div>
                </div>
                    <div className='copyright'>2018 Все права защищены</div>
            </div>
        )
    }
}

export default Footer;