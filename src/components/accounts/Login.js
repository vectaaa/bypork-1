import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import Functions from '../../utils/Functions';
import { serverEndPoint, webTitle} from '../../utils/Helpers';

export default function Login() {
    
    const [values, setValues] = React.useState({
        email: '',
        type: '',
        password: '',
        loggedOut: false,
        showPassword: false,
    });
    
    async function logoutUsers() {
        await Functions.deleteCookie('bineza_customer_token');
        await Functions.deleteCookie('bineza_seller_token');
    }

    function togglePassword(field, action) {
        const password = document.getElementById(field);

        if(action == 'show') {
            password.type = 'text';  
            setValues(values => ({
                ...values, 
                showPassword: true
            }));  
        } else {
            password.type = 'password';  
            setValues(values => ({
                ...values, 
                showPassword: false
            }));  
        }
    }

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setValues(values => ({...values, [name] : value}));
    }
    
    function login(event) {
    
        event.preventDefault();
        const status = document.getElementById('login-status');
        const btn = document.getElementById('login-btn');
          
        const { email, password, type } = values;        
        const allValues = [email, password, type];
        const isValueEmpty = Functions.isEmpty(allValues);

        if(isValueEmpty) {
            status.innerHTML = "<p style='color:red'> Incorrect login details </p>";
            return false;
        } else {
            
            Functions.disableBtn(btn);
            const data = `type=${type}&email=${email}&password=${password}`; 
              
            axios({
                method: 'post',
                url: `${serverEndPoint}login`,
                data: data,
            })
            .then( async (response) => {
                Functions.enableBtn('Login', btn);
                
                if(response.data.data.type == "success") {
                    status.innerHTML = `<p style='color:green'>Login successful.</p>`;
                    
                    if(response.data.data.user.type == 'customer') {
                        await Functions.deleteCookie('bineza_seller_token');
                        Functions.setCookie(`bineza_customer_token`, response.data.data.token, 100);
                        window.location="/ads";
                    } else {
                        if(response.data.data.user.type == 'seller') {
                            await Functions.deleteCookie('bineza_customer_token');
                            Functions.setCookie(`bineza_seller_token`, response.data.data.token, 100);
                            window.location="/sellers/ads";
                        }
                    }
                } else if(response.data.data.type == "inactive") {
                    status.innerHTML = `<p style='color:red'>${response.data.data.message}</p>`;
                    document.getElementById("resend-btn").style.display = 'block';
                    document.getElementById('login-form').reset();
                } else {
                    status.innerHTML = `<p style='color:red'>${response.data.data.message}</p>`;
                }
            })
            .catch( (error) => {
                Functions.enableBtn('Login', btn);
                status.innerHTML = "<p style='color:red'> Login not successful. Try again. </p>";
            });
        }     
    }

    async function resendActivationMail() {

        const status = document.getElementById('login-status');
        const btn = document.getElementById('resend-btn');
        const { email, type} = values;
        const data = `email=${email}&type=${type}`;

        Functions.disableBtn(btn);
        
        await axios({
            method: 'post',
            url: `${serverEndPoint}resend-activation-mail`,
            data: data,
        })
        .then(response => {
            console.log(response);
            Functions.enableBtn('Resend Activation Mail', btn);
                
            if(response.data.type == "success") {
                status.innerHTML = `<p style='color:green'>Activation mail resent. Kindly check your mail </p>`;
                document.getElementById("resend-btn").style.display = 'none';
            } else {
                status.innerHTML = `<p style='color:red'>${response.data.data.message}</p>`;
            }
        }).
        catch( (error) => {
            Functions.enableBtn('Resend Activation Mail', btn);
            status.innerHTML = "<p style='color:red'> Activation mail not resent. Try again. </p>";
        });
    }     
    
    useEffect( () => {
        logoutUsers();
        document.title = webTitle+" Login";
    }, []);
    
    return (

        <div>
            <Header/>
            
            <div className="col-md-6 col-sm-7 col-md-offset-3 col-sm-offset-3 col-xs-12">
                <div className="wel-back">
                    <br/><br/><br/><br/>
                    <h3>Login to Your <span className="theme-cl">Bineza Account</span></h3>
                </div>
                
                <form method="post" action="#" id="login-form" onSubmit={event => login(event)}>
                    
                    <div className="form-group">
						<label>Login As</label>
						<select className="form-control"  name="type" onChange={onChangeHandler}>
							<option value=""> -- Select an Option -- </option>
							<option value="customer">As a Customer</option>
							<option value="seller">As a Seller</option>
						</select>
					</div>
                    
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" onChange={onChangeHandler}/>
                    </div>
                    
                    <div>
                        <div>
                            <label>Password</label>
                            <div class="input-group">
                                <input type="password" id="password" class="form-control" name="password" onChange={onChangeHandler}/>
                                {!values.showPassword ?
                                    <span class="input-group-addon" onClick={togglePassword.bind(this, 'password', 'show')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Show</b></span> :
                                    <span class="input-group-addon" onClick={togglePassword.bind(this, 'password', 'hide')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Hide</b></span>
                                }
                            </div>
                        </div>
                    </div> <br/>
                    
                    <span className="custom-checkbox d-block pull-left">
                        <input type="checkbox" id="select1"/>
                        <label for="select1"></label>
                        Keep me Signed In
                    </span>

                    <span className="pull-right">
                        <Link to="/forgot-password" className="theme-cl">Forgot Password?</Link>
                    </span>
                    <br/><br/>
                    <div style={{clear:'both'}}></div>
                    <div className="center">
                        <button type="submit" id="login-btn" className="btn btn-midium theme-btn btn-radius width-200"> Login </button>
                        <br/><br/>
                        <div id="login-status"></div>
                        <div align="center">
                            <button type="submit" id="resend-btn" style={{display: 'none'}} className="btn btn-warning" onClick={resendActivationMail}> Resend Activation Mail </button>
                            <br/>
                        </div>
                    </div>
                    
                </form>
                
                {/* <div className="connect-with">
                    <ul>
                        <li className="fb-ic"><Link to="#"><i className="ti-facebook"></i></Link></li>
                        <li className="tw-ic"><Link to="#"><i className="ti-twitter"></i></Link></li>
                    </ul>
                </div> */}
                
                <div className="center mrg-top-5">
                    <div className="bottom-login text-center">Don't have an account? <Link to="/register" className="theme-cl">Create An Account</Link> </div>
                </div> <br/>
            </div>

            <div style={{clear:'both'}}></div>
                
            <Footer/>
        </div>
    );
}
