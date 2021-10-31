import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Book.css';


const Book = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [item,setItem] = useState({})
    // Get Package Details
    useEffect(()=>{
        axios.get(`https://porijon-sarver.herokuapp.com/package/${id}`)
        .then(response=>{
            setItem(response.data);
        })
    },[])
    
    // Form
    const {register,handleSubmit, formState: { errors },reset} = useForm();
    const onSubmit = (data) => {
        data.status = "Pending";
        data.img = `${item.img_1}`
        axios.post(`https://porijon-sarver.herokuapp.com/myBooking`,data)
        .then(res=>{
            if(res.data.acknowledged){
              alert(`Thank you ${user.displayName}. Your Booking Number ${res.data.insertedId} `)
              reset()
            }
        });
        
    };
    
    return (
        <div>
            <Header/>
            <section class="book" id="book">

                <h1 class="heading">
                    <span>P</span>
                    <span>a</span>
                    <span>c</span>
                    <span>k</span>
                    <span>a</span>
                    <span>g</span>
                    <span>e</span>
                    <span class="space"></span>
                    <span>B</span>
                    <span>O</span>
                    <span>O</span>
                    <span>O</span>
                    <span>K</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>

                </h1>

                
                {/* Booking Part */}
                <div class="row">
                    
                    <div className="col-md-6">
                        <div>
                            <h2>{item.title}</h2>
                            <h4> <i className="fas fa-map-marker-alt"></i> {item.location} </h4>
                        </div>

                        <div class="image">
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <img className="d-block w-100"src={item.img_1} alt="First slide" height="300px"/>
                                </Carousel.Item>
                                <Carousel.Item interval={600}>
                                    <img className="d-block w-100"src={item.img_2}alt="Second slide" height="300px"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100"src={item.img_3}alt="Third slide" height="300px"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div className="item-details">
                            <div className="item-duration rounded-pill fs-4 p-3">
                                <i class="fas fa-clock pe-2"></i>
                                <span>{item.duration}</span>
                            </div>
                            <div className="item-price rounded-pill fs-4 p-3">
                                <div className="">  ৳ {item.price-500}  <span> ৳ {item.price}</span> </div>
                            </div>
                        </div>

                        <div className="details fs-3 py-3">
                            <p>
                                {item.description}
                            </p>
                        </div>


                    </div>
                    
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="inputBox">
                                <h3>Package</h3>
                                <input {...register("package")} value={item.title} placeholder="Pakage" className="p-2 m-2 w-100 rounded border-1" />
                            </div>
                            <div class="inputBox">
                                <h3>Booking for</h3>
                                <input {...register("name")} value={user.displayName} className="p-2 m-2 w-100 rounded border-1" />
                            </div>

                            <div class="inputBox">
                                <h3>Email</h3>
                                <input {...register("email")} value={user.email} className="p-2 m-2 w-100 rounded border-1" />
                            </div>

                            <div class="inputBox">
                                <h3>Booking Address</h3>
                                <input {...register("address")} placeholder="Address" className="p-2 m-2 w-100 rounded border-1" />
                            </div>

                            <div class="inputBox">
                                <h3>Phone Number</h3>
                                <input {...register("phone")}placeholder="Phone Number" className="p-2 m-2 w-100 rounded border-1" />
                            </div>

                            <div class="inputBox">
                                <h3>how many</h3>
                                <input {...register("member")} defaultValue="2" type="number" placeholder="Number of guests" className="p-2 m-2 w-100 rounded border-1"/>
                            </div>
                            <div class="inputBox">
                                <h3>arrivals</h3>
                                <input type="date" {...register("arrival")} placeholder="Arrival" className="p-2 m-2 w-100 rounded border-1" />
                            </div>
                            <div class="inputBox">
                                <h3>leaving</h3>
                                <input type="date" {...register("leaving")} placeholder="Arrival" className="p-2 m-2 w-100 rounded border-1" />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Book Now" className="btn-common" />
                            </form>
                    </div>
                    

                    
                </div>

            </section>
            <Footer/>
        </div>
    );
};

export default Book;