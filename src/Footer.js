import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className='footer'>
                    <div className='footer-content'>
                        <h3>О нас</h3>
                        <p> Quisque a ornare neque. Maecenas sit amet feugiat lorem. Fusce accumsan varius lacus et dignissim. Phasellus in gravida odio. Integer a luctus nisi.</p>
                    </div>
                    <div className='footer-content'>
                        <h3>Читайте в новостях</h3>
                        <p>Praesent mattis ante sed quam semper, quis sodales felis ullamcorper.</p>
                    </div>
                    <div className='footer-content'>
                        <h3>О нас</h3>
                        <div>
                            <image />
                            <p>adress</p>
                        </div>
                        <div>
                            <image />
                            <p>tel</p>
                        </div>
                        <div>
                            <image />
                            <p>mail</p>
                        </div>
                    </div>
                </div>
                <div>2018 Все права защищены</div>
            </div>
        )
    }
}

export default Footer;