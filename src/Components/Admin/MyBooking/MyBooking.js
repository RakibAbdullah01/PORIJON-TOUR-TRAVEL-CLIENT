import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyBooking = () => {
    const {user} = useAuth();
    const [myBookings,setmyBookings] = useState([])
    const [load,setLoad] = useState(false);

    useEffect(()=>{
        axios.get(`https://porijon-sarver.herokuapp.com/myBooking/${user?.email}`)
        .then(res=>{
            setmyBookings(res.data);
            
        })
    },[load])

    const handleDelete=id=>{
        const proceed = window.confirm("Are you Sure ? You want to Delete ?");
        if(proceed){
            axios.delete(`https://porijon-sarver.herokuapp.com/myBooking/${id}`)
            .then(res=>{
                if(res.data.acknowledged){
                    alert("Booking Deleted SuccessFully")
                    setLoad(true)
                }
                const remain = myBookings.filter(book=>book._id !== id)
                setmyBookings(remain)
            })
        }
        
    }
    console.log(myBookings);
    return (
        <div>
            <h1 class="heading">
                    <span>M</span>
                    <span>Y</span>
                    <span class="space"></span>
                    <span>B</span>
                    <span>O</span>
                    <span>O</span>
                    <span>K</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </h1>

            <div className="row">
                    {
                        myBookings.map(book=> <div className="booking-card fs-4 col-md-5 m-2 rounded">
                            <div className="row d-flex align-items-center p-2 ">
                                <div className="col-md-4">
                                    <img src={book.img} alt="" width="150px" className="rounded" />
                                </div>
                                <div className="col-md-8">
                                    <h2>{book.package}</h2>
                                    <p>{book.email}</p>
                                    <h5 className="text-status">Status: {book.status}</h5>
                                    <button
                                    onClick={()=>handleDelete(book._id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
            </div>
        </div>
    );
};

export default MyBooking;