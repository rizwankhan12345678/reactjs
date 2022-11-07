import { Link } from 'react-router-dom';
import '../../assets/style.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import TokenService from '../../services/token-service';
import { useNavigate } from "react-router-dom";

function Header() {
    const [menuItem, setMenuItem] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const user = TokenService.getUser();
    const activeStyle = { textDecoration: 'underline' };
    useEffect(() => {
        setMenuItem(location.pathname);
    }, [location.pathname])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className='col-md-2'>
                    <Link className="navbar-brand" to="/">React</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col-md-10 content-justify" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        { user &&
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/dashboard"
                                    style={menuItem === '/dashboard' ? activeStyle : {}} 
                                >Dashboard</Link>
                            </li>
                        }
                        { user &&
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/"
                                    style={menuItem === '/' ? activeStyle : {}} 
                                >Home</Link>
                            </li>
                        }
                        { user &&
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/paginate-list"
                                    style={menuItem === '/paginate-list' ? activeStyle : {}} 
                                >List</Link>
                            </li>
                        }
                        { user &&
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/music-list"
                                    style={menuItem === '/music-list' ? activeStyle : {}} 
                                >Music</Link>
                            </li>
                        }
                        { !user &&
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/features"
                                    style={menuItem === '/features' ? activeStyle : {}}
                                >Features</Link>
                            </li>

                        }
                        { !user &&
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/pricing-plan"
                                    style={menuItem === '/pricing-plan' ? activeStyle : {}}
                                >Pricing</Link>
                            </li>
                        }
                    </ul>
                    <span className='text-right'>
                        {
                            user ?
                            <a
                                className='login-class' 
                                    onClick={() => {
                                    if (window.confirm('Are you sure want to Logout')) {
                                        TokenService.removeUser();
                                        navigate('/login');
                                    }
                                }}        
                            >Logout
                            </a>
                            :
                            <Link
                                to='/login'
                                className='login-class'
                                style={menuItem === '/login' ? activeStyle : {}} 
                                >Login
                            </Link>
                        }
                    </span>
                </div>
            </div>
            
        </nav>
    )
}

export default Header;