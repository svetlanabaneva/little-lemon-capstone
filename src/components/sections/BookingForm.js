import React from 'react';
import restaurant from "../../assets/images/restaurant.jpg";
const Hero = () => {
    return (
        <section className="reservation">
            <div className="booking-container">
                <section className="reservation-wrap">
                    <div className="form-wrap">
                        <h2>Reservations</h2>
                        <form action="">
                            <section className="booking-details">
                                <h3>Booking Details</h3>
                                <input type="text" name="Occasion" placeholder="Occasion" required maxLength="10"/>
                                <input type="date" name="date" id="date" required/>
                                <input type="number" name="number" id="number" min="2" max="20" placeholder="No of Guests" required/>
                                <input type="time" name="time" id="time" required/>
                                </section>
                            <section className="booking-details">
                                <h3>Personal Details</h3>
                                <input type="text" name="fullname" placeholder="Full Name" maxLength="30" required />
                                <input type="email" name="email" id="email"  placeholder="E-Mail" maxLength="30" required />
                                <input type="text" name="mobile" id="mobile" minLength="5" maxLength="10" 
                                        placeholder="(+312) Mobile Number" required/>
                                <input type="text" name="request" id="request" placeholder="Special Requests?" />
                            </section>
                            <button className="btn-confirm" type="submit">Confirm Reservations</button>
                        </form>
                    </div>
                    <div className="booking-image-wrap">
                        <img src={restaurant} alt="Restaurant" />
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Hero;