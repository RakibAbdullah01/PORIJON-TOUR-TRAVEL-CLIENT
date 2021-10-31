import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css';

const Login = () => {
    const {handleGoogleSIgnIn}=useAuth()
    const location = useLocation();
    const histry = useHistory();
    const reDirect_uri = location.state?.from || '/home';
    const [error,setError] = useState('');
    
    
    // Google
    const handleGoogle=()=>{
        handleGoogleSIgnIn()
        .then(result=>{
              histry.push(reDirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    return (
        <div>
            <Header/>
            {/* Login */}
            <div className="bg-img my-4 p-4 w-50 rounded mx-auto d-flex justify-content-center align-items-center" style={{height:"50vh"}}>
                <button 
                    onClick={handleGoogle} 
                    className="btn btn-light">
                    <span className="d-flex align-items-center">
                        <span>Login with</span>
                        <i className="fab fa-google px-2"></i>
                    </span>
                </button>

            </div>
            {
                error && <h3 className="text-danger">Error: {error}</h3>
            }
            {/* Login */}

            <Footer/>
        </div>
    );
};

export default Login;