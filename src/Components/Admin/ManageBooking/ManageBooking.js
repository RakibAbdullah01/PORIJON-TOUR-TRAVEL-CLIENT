import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
const image = [
    {"img": "https://i.ibb.co/rMF27mV/g-1.jpg"},
    {"img": "https://i.ibb.co/0yxk38X/g-2.jpg"},
    {"img": "https://i.ibb.co/XyTJhkS/g-3.jpg"},
    {"img": "https://i.ibb.co/Vw0q5Xv/g-4.jpg"},
    {"img": "https://i.ibb.co/Hthrbm6/g-5.jpg"},
    {"img": "https://i.ibb.co/prV9c5p/g-6.jpg"},
    {"img": "https://i.ibb.co/cYcjq3n/g-7.jpg"},
    {"img": "https://i.ibb.co/9hhTT7W/g-8.jpg"},
    {"img": "https://i.ibb.co/WP8K7xw/g-9.jpg"}
]
const ManageBooking = () => {
    const [allBookings,setAllBookings] = useState([])
    const [load,setLoad] = useState(false);
    useEffect(()=>{
        axios.get(`https://porijon-sarver.herokuapp.com/allBookings`)
        .then(res=>{
            setAllBookings(res.data);
        })
    },[load])
    // Approve
    const handleApprove = id =>{
        
            axios.put(`https://porijon-sarver.herokuapp.com/bookingUpdate/${id}`,{})
            .then(res=>{
            console.log(res);
            if(res.data.acknowledged){
                alert("Booking Approved")
                setLoad(true)
            }
        })
        
    }

    // Delete
    const handleDelete=id=>{
        const proceed = window.confirm("Are you Sure ? You want to Delete ?");
        if(proceed){
        axios.delete(`https://porijon-sarver.herokuapp.com/myBooking/${id}`)
        .then(res=>{
            if(res.data.acknowledged){
                alert("Booking Deleted SuccessFully")
            }
            const remain = allBookings.filter(book=>book._id !== id)
            setAllBookings(remain)
        })}
    }
    return (
        <div>
            <h1 className="heading">
                    <span>M</span>
                    <span>A</span>
                    <span>N</span>
                    <span>A</span>
                    <span>G</span>
                    <span>E</span>
                    <span className="space"></span>
                    <span>B</span>
                    <span>O</span>
                    <span>O</span>
                    <span>K</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </h1>
               
                <Table striped bordered hover variant="dark" className="me-2 fs-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Package</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    allBookings.map((book,index)=><tr>
                        <td>{index+1}</td>
                        <td>{book.name}</td>
                        <td>{book.email}</td>
                        <td>{book.package}</td>
                        <td>{book.status}</td>
                        <td>
                            <button onClick={()=>handleApprove(book._id)} className="btn btn-success">Update Status</button>
                        </td>
                        <td>
                            <button onClick={()=>handleDelete(book._id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>)
                    }
                </tbody>
                </Table>
               
            
        </div>
    );
};

export default ManageBooking;