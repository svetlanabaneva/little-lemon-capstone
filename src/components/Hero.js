import React from 'react';


const Hero = () => {
    return (

        <section className="hero">
            <div className="container">
            <section className="hero-wrap">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="hero-subsection">We are a family owned Mediterranean restaurant, located  in Chicago, Illinois. We focus
                    on traditional recipes served with a modern twist.</p>
                    <button className="btn-reserve">Reserve</button>
                </section>

                <section className="hero-image">
                    <img src={require('../assets/images/restauranfood.jpg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </section>
            </div>
        </section>

    );
}

export default Hero;