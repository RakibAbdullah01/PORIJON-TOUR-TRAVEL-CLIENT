import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import AddPackage from '../AddPackage/AddPackage';
import ManageBooking from '../ManageBooking/ManageBooking';
import MyBooking from '../MyBooking/MyBooking';
import "./Admin.css";


const Admin = () => {
    const {user} = useAuth()
    const [control, setControl] = useState("myBookings");
    return (
        <div>
            <Header/>
                <div className="admin-container">
                    <div className="dashboard">
                        <div className="admin-box">
                        <div className="row admin-container">
                            <div className="col-md-3 ">
                            <div className="admin-area pt-4">
                                <div className="py-4 admin">
                                    <h2>{user.displayName}</h2>
                                </div>
                                <div className="all-menu">
                                    <ul>
                                        <NavDropdown.Divider />
                                        <li
                                            onClick={() => setControl("myBookings")}
                                            className="admin-menu p-2"
                                        >
                                            My Bookings
                                        </li>
                                        <NavDropdown.Divider />
                                        
                                        <li
                                            onClick={() => setControl("allBooking")}
                                            className="admin-menu p-2"
                                        >
                                            Manage All Bookings
                                        </li>
                                        <NavDropdown.Divider />

                                        <li
                                            onClick={() => setControl("addpackage")}
                                            className="admin-menu p-2"
                                        >
                                            Add A New Package
                                        </li>
                                        <NavDropdown.Divider />

                                    </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-9 text-center  text-center">
                            {control === "myBookings" && <MyBooking></MyBooking>}
                            {control === "allBooking" && <ManageBooking></ManageBooking>}
                            {control === "addpackage" && <AddPackage></AddPackage>}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Admin;