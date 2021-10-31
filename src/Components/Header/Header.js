import { NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo-2.png';
import '../Header/Header.css';
import './Header.css';

const Header = () => {
const {user,logOut} = useAuth();
    return (
        <div>
			<div className="nav-head text-center bg-dark">
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light nav-bar">
						<div className="container-fluid align-items-center">
							<Link to="/">
							<img src={logo} alt="" width="180px"/>
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav mx-auto ">
									<li className="nav-item mx-2">
										<NavLink className="nav-link " aria-current="page" to="/home" activeStyle={{ fontWeight: "bold", color: "yellow", }} > 
                                        Home 
                                        </NavLink>
									</li>

									<li className="nav-item mx-2">
										<NavLink className="nav-link" to="/packages" activeStyle={{ fontWeight: "bold", color: "yellow", }} > 
                                        Packages
										</NavLink>
									</li>

									<li className="nav-item mx-2">
										<NavLink className="nav-link" to="/about" activeStyle={{ fontWeight: "bold", color: "yellow", }} > About us </NavLink>
									</li>

									<li className="nav-item mx-2">
										<NavLink className="nav-link" to="/contact" activeStyle={{ fontWeight: "bold", color: "yellow", }} > 
                                        Contact
										</NavLink>
									</li>

								</ul>
								<div className="d-flex align-items-center justify-content-center">
									{
                                        (user.email)? (
                                            <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
                                                <NavDropdown.Item  className="text-center">
													<Link to="/admin">Dashboard</Link>
												</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item onClick={logOut} className="text-center">
                                                    <button className="btn btn-danger">Log Out</button>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        ):(
                                            <Link to="/login">
                                            <button className="btn btn-success nav-btn ">Sign in</button>
                                            </Link>
                                        )
                                    }
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
    );
};

export default Header;