import React from 'react';
import contact from '../../images/contact-img.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
            <>
            <Header/>
            <section class="contact" id="contact">
    
                <h1 class="heading">
                    <span>c</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                </h1>

                <div class="row">

                    <div class="image">
                        <img src={contact} alt="" />
                    </div>

                    <form action="">
                        <div class="inputBox">
                            <input type="text" placeholder="name" />
                            <input type="email" placeholder="email" />
                        </div>
                        <div class="inputBox">
                            <input type="number" placeholder="number" />
                            <input type="text" placeholder="subject" />
                        </div>
                        <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
                        <input type="submit" class="btn-common" value="send message" />
                    </form>

                </div>
                
            </section>
            <Footer/>
            </>
    );
};

export default Contact;