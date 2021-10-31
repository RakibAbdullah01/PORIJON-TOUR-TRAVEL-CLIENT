import React from 'react';
import logo from '../../images/logo-2.png';
import './Footer.css';

const Footer = () => {
    return (

        <div>
			<div className="footer text-lg-start text-sm-center">
				<div className="container">
					<div className="row g-5">
						<div className="col-md-4">
							<img src={logo} alt="" />
							<p>
                            Porijon is the country’s first and leading online travel booking platform. Initially started with the dream to make travel easier for people. And that is what we did since our inception.
							</p>
						</div>
						<div className="col-md-4">
							<h1>Payment Method</h1>
							<p>
								You can choose many payment options. Tourist satisfiction is our
								goal. So you can pay by -
							</p>
							<ul>
								<li>* Visa Card</li>
								<li>* Master Card</li>
								<li>* bKash</li>
							</ul>
						</div>
						<div className="col-md-4">
							<h1>Services</h1>
							<p>
								We offer so many tour packages. So many packages are available
								by us.
							</p>
							<ul>
								<li>* Vacation Tour Packages</li>
								<li>* City Tour Packages</li>
								<li>* Summer Tour Packages</li>
								<li>* Winter Tour Packages</li>
							</ul>
						</div>
					</div>
				</div>
				<hr />
				<footer className="under-footer">
					<div>
						<p className="pb-3">
							Copyright 2021 <span>Porijan</span> | Design By{" "}
							<span>Rakib</span>
						</p>
					</div>
				</footer>
			</div>
		</div>
    );
};

export default Footer;