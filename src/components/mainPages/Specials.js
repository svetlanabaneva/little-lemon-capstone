import React from 'react';
import greeksalad from '../../assets/images/greeksalad.jpg';

const Specials = () => {
    return (
        <section className="special-menu">
        <div className="container">
            <section className="special-menu-wrap">
                <section className="heading">
                    <p className="title">This weeks specials!</p>
                    <button className="btn-order">Order Online</button>
                </section>
            </section>
       </div>
       <div className="flex-items">
        <div className="flex-item">
            <div className="image-wrap">
                <img src={greeksalad} alt="Greek Salad" />
            </div>
            <div className="content-wrap">
                <div className="heading">
                    <p className="title">Greek Salad</p>
                    <p className="price">$12.99</p>
                </div>
                <p className="description">The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <button className="btn-order-flex">Order a delivery</button>
                </div>
        </div>
        <div className="flex-item">
            <div className="image-wrap">
                <img src={greeksalad} alt="Greek Salad" />
            </div>
            <div className="content-wrap">
                <div className="heading">
                    <p className="title">Greek Salad</p>
                    <p className="price">$12.99</p>
                </div>
                <p className="description">"The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."</p>
                <button className="btn-order-flex">Order a delivery</button>
                </div>
        </div>
        <div className="flex-item">
            <div className="image-wrap">
                <img src={greeksalad} alt="Greek Salad" />
            </div>
            <div className="content-wrap">
                <div className="heading">
                    <p className="title">Greek Salad</p>
                    <p className="price">$12.99</p>
                </div>
                <p className="description">The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."</p>
                <button className="btn-order-flex">Order a delivery</button>
                </div>
        </div>
       </div>
        </section>
        
    );
}

export default Specials;