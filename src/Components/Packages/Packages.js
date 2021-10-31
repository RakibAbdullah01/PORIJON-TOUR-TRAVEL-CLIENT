import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Packages.css';

const Packages = () => {
    const [packages,setPackages] = useState([])
    useEffect(()=>{
        
        // Get All Packages from Sarver
        axios.get("https://porijon-sarver.herokuapp.com/allpakages")
        .then(response=>setPackages(response.data))    
    },[])
    return (
        <>
        <Header/>


        <section className="packages" id="packages">
            <h1 className="heading">
                <span>p</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>s</span>
            </h1>

            <div className="box-container">
                {
                packages.map(item => 
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
        <Footer/>
        </>
        
    );
};

export default Packages;