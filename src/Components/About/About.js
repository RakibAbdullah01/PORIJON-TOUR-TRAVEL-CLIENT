import React from 'react';
import logo from '../../images/logo.png';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            <Header/>
            <section>
            <h1 className="heading">
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
                <span class="space"></span>
                <span>U</span>
                <span>S</span>
            </h1>
            <div className="row d-flex align-items-center border rounded">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src={logo} alt="" />
                </div>
                <div className="col-md-6">
                        <h2></h2>
                        <p className="fs-4">Porijon.com was founded by 4 Travel enthusiastic people who shared their dream and vision to create a platform that will serve the purpose of Bangladeshi travel lovers.
                        <br />
                        Porijon is the country’s first and leading online travel booking platform. Initially started with the dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy-to-use website, travel services are on your palm. The dynamic website lets you book your resort, find your perfect holiday destination from our holiday packages around Bangladesh.
                        <br />

                        Porijon is revolutionizing the way we book travel services. With Porijon’s website, booking your resort, hotel, or tour package becomes more fun than you would think.
                        <br />
                        We are collaborating with the local community, who are all experts in their respective fields. They have the experience and professionalism to understand each and every customer's requirements and fulfill them. In today’s era of digitalization, where everyone has a lot of information and choice in hand, our clients still choose us. Because we provide the best rates and a wide range of choices for your accommodations and travel plans.</p>
                    </div>
            </div>
            </section>
            
            <Footer/>
        </div>
    );
};

export default About;