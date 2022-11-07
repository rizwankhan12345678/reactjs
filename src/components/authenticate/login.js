import '../../assets/login.css';
import { useState } from 'react';
import Validations from '../shared/Validations';
import TokenService from '../../services/token-service';
import { useNavigate } from "react-router-dom";
function Login() {
    const [cls, setClass] = useState('');
    const [formObj, setFormObj] = useState({ email: '', password: '' });
    const [fieldTouched, setFieldTouched] = useState({});
    const link = 'http://localhost:3001/login';
    const navigate = useNavigate();
    function addRemoveCls(status) {
        status ? setClass('right-panel-active') : setClass('');
    }

    function handleValueChange(event) {
        const obj = { ...formObj };
        obj[event.target.name] = event.target.value;
        setFormObj(obj);
        const tem = { ...fieldTouched };
        tem[event.target.name] = true;
        setFieldTouched(tem)
    }

    function submitForm(event) {
        event.preventDefault();
        if (formObj.email && formObj.password) {
            TokenService.setUser(formObj);
            navigate('/');
        } else {
            return false;
        }
    }
    return (
        <div className="main-class">
            <div className={"main-container " + cls} id="container">
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href={ link } className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href={ link } className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href={ link } className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={(e) => submitForm(e)}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href={ link } className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href={ link } className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href={ link } className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input
                            type="email"
                            placeholder="Email"
                            autoComplete='off'
                            name="email"
                            value={formObj.email}
                            onChange={(e) => handleValueChange(e)}
                        />
                        <small style={{color: 'red'}}>{Validations.emailValidation(formObj.email, fieldTouched)}</small>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formObj.password}
                            onChange={(e) => handleValueChange(e)}
                        />
                        <small style={{color: 'red'}}>{Validations.passwordValidation(formObj.password, fieldTouched)}</small>
                        <a href={ link }>Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={() => addRemoveCls(false)} className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={() => addRemoveCls(true)} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;