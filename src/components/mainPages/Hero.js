import React from 'react';


const Hero = () => {
    return (
        <main>
        <section className="hero">
            <div className="container">
            <section className="hero-wrap">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="hero-subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <button className="btn-reserve">Reserve</button>
                </section>

                <section className="hero-image">
                    <img src={require('../../assets/images/restauranfood.jpg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </section>
            </div>
        </section>
  </main>
    );
}

export default Hero;