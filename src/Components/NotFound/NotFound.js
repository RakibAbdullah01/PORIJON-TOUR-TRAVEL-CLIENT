import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div id="main">
                <div class="fof">
                        <h1>Error 404</h1>
                </div>
                <Link to="/" className="btn-common">Home</Link>
            </div>
        </div>
    );
};

export default NotFound;