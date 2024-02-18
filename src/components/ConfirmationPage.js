import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const ConfirmationPage = (props) => {
    return (

            <div className='confirm'>
                <Nav />
                <div>
                    <h1>Booking has been <span>Confirmed!</span></h1>
                    {props.name}
                </div>
                <Footer />
            </div>
        )
    }

export default ConfirmationPage;