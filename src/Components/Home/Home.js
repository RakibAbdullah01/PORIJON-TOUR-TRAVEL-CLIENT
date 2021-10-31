import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css';



const Home = () => {
    const [packages,setPackages] = useState([])
    const[gallerydata,setGalleryData] = useState([])

    useEffect(()=>{
        // Get All Packages from Sarver
        axios.get("https://porijon-sarver.herokuapp.com/allpakages")
        .then(response=>setPackages(response.data))    
    },[])

        useEffect(()=>{
            // Get all Gelary data feom sarver
            axios.get('https://porijon-sarver.herokuapp.com/gallerydata')
            .then(res=>setGalleryData(res.data))
        },[])
    return (
        <div>
            <Header/>
            
            {/* Banner Section */}
            <section className="home" id="home">

                <div className="content">
                    <h3>Find Your Next
                        Tour Destinations</h3>
                    <p>Dicover new places with us, adventure awaits</p>
                    <Link to="/packages" className="btn-common">Discover more</Link>
                </div>

            </section>
            {/* Banner Section */}


            {/* Packages */}
            <section className="packages" id="packages">
                <h1 className="heading">
                    <span>P</span>
                    <span>a</span>
                    <span>c</span>
                    <span>k</span>
                    <span>a</span>
                    <span>g</span>
                    <span>e</span>
                    <span>s</span>
                </h1>

                <div className="box-container">
                    { packages?.slice(0,6).map(item => 
                            <Link to={`/book/${item._id}`} className="box">
                                <img src={item.img_1} alt="" />
                                <div className="content">
                                    <h4> <i className="fas fa-map-marker-alt"></i> {item.location} </h4>
                                    <h2>{item.title}</h2>
                                    <div className="item-info">
                                        <div className="price"> ৳ {item.price-500}  <span> ৳ {item.price}</span> </div>
                                        <div className="btn btn-success fs-4">OFF ৳ 500</div>    
                                    </div>
                                    
                                </div>
                            </Link>
                        )}
                    </div>
            </section>
            {/* Packages Section End*/}

            {/* Services Section */}
            <section className="services" id="services">

                <h1 className="heading">
                    <span>S</span>
                    <span>e</span>
                    <span>r</span>
                    <span>v</span>
                    <span>i</span>
                    <span>c</span>
                    <span>e</span>
                    <span>s</span>
                </h1>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-hotel"></i>
                        <h3>Affordable Hotels</h3>
                        <p>Porijon will help you to find Affortable Hotels.With its striking natural beauty, friendly citizens, and recent popularity due to its use as the filming location for the Lord of the Ring.!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-utensils"></i>
                        <h3>Food and Drinks</h3>
                        <p>Food and Drinks Turkey's capital city is another destination that offers a great mix of culture, food, and history. </p>
                    </div>

                    <div className="box">
                        <i className="fas fa-bullhorn"></i>
                        <h3>Safty Guide</h3>
                        <p>Safty Guide As you listen to the sound of French being spoken around you and explore Old Montreal.!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-globe-asia"></i>
                        <h3>Around the World</h3>
                        <p>Around the World Kenya's Masai Mara is an incredible bio-diverse area and a popular safari destination.!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-plane"></i>
                        <h3>Fastest Travel</h3>
                        <p>Fastest TravelThis incredible natural wonder is in the U.S. state of Arizona.!</p>
                    </div>
                    
                    <div className="box">
                        <i className="fas fa-hiking"></i>
                        <h3>Adventures</h3>
                        <p>Adventures Around the World Kenya's Masai Mara is an incredible bio-diverse area and a popular safari destination.!</p>
                    </div>

                </div>

            </section>

            {/* gallery section starts  */}

            <section class="gallery" id="gallery">

                <h1 class="heading">
                    <span>g</span>
                    <span>a</span>
                    <span>l</span>
                    <span>l</span>
                    <span>e</span>
                    <span>r</span>
                    <span>y</span>
                </h1>

                <div class="box-container">
                {
                    gallerydata.map(img=><div class="box">
                    <img src={img.img} alt=""/>
                    <div class="content">
                        <h3>{img.title}</h3>
                        <p>{img.des}</p>
                        <a href="#" class="btn">see more</a>
                    </div>
                    </div>
                    )
                }
                </div>
            </section>
            {/*gallery section ends*/}
            
            {/* <section className="subscribe container rounded my-4">
                <div className="row">
                    <div className="col-md-6 p-4 text-light">
                        <h2 className="fs-1 bolded">Get the best holiday plan by expert</h2>
                        <p className="fs-5">You can also call us or contact us through mail</p>
                        <div>
                            <div className="d-flex align-items-center">
                                <i class="fas fa-phone-volume fs-1 px-4"></i>
                                <h2>01844244745</h2>
                            </div>
                            <div className="d-flex align-items-center">
                                <i class="far fa-envelope fs-1 px-4"></i>
                                <h2>info@porijan.com</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-4 text-light">
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>

            </section> */}
            <Footer/>
        </div>
    );
};

export default Home;