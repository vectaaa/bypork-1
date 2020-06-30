import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import Functions from '../../utils/Functions';
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function Register() {
    
    let [institutions, setInstitutions] = React.useState('');

    const [values, setValues] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        type: '',
        business: 'none',
        started_at: 'none',
        institution: '',
        password: '',
        password_confirmation: '',
        loaded: false,
        showPassword: false,
        showPasswordConfirmation: false,
    });
    
    function togglePassword(field, action) {
        const password = document.getElementById(field);

        if(action == 'show') {
            password.type = 'text';  
            
            if(field == 'password') {
                setValues(values => ({
                    ...values, 
                    showPassword: true
                }));
            } else if(field == 'password_confirmation') {
                setValues(values => ({
                    ...values, 
                    showPasswordConfirmation: true
                }));
            }  
        } else {
            password.type = 'password';  
            
            if(field == 'password') {
                setValues(values => ({
                    ...values, 
                    showPassword: false
                }));
            } else if(field == 'password_confirmation') {
                setValues(values => ({
                    ...values, 
                    showPasswordConfirmation: false
                }));
            }   
        }
    }
    
    function onChangeHandler(event) {
        const { name, value } = event.target;
        setValues(values => ({...values, [name] : value}));
    }
    
    function register(event) {
        event.preventDefault();
        const status = document.getElementById('register-status');
        const btn = document.getElementById('register-btn');
          
        const { firstname, lastname, business, started_at, phone, type, institution, email, password, password_confirmation } = values; 
        const allValues = [firstname, lastname, phone, type, institution, email, password, password_confirmation];
        const isValueEmpty = Functions.isEmpty(allValues);

        if(isValueEmpty) {
            status.innerHTML = "<p style='color:red'> Fill all fields </p>";
            return false;
        } else {
            
            Functions.disableBtn(btn);
            const data = `business=${business}&started_at=${started_at}&firstname=${firstname}&lastname=${lastname}&institution=${institution}&phone=${phone}&email=${email}&password=${password}&password_confirmation=${password_confirmation}&type=${type}`; 
            
            axios({
                method: 'post',
                url: `${serverEndPoint}register`,
                data: data,
            })
            .then(response => {
                Functions.enableBtn('Register Now!', btn);
                
                if(response.data.type == 'success') {
                    document.getElementById('register-form').reset();
                    status.innerHTML = `<p style='color:green'>Registration successful. Check your mail for confirmation link</p>`;
                } else {
                    status.innerHTML = `<p style='color:red'>${response.data.message}</p>`;
                }
            }).
            catch( (error) => {
                console.log(error);
                Functions.enableBtn('Register Now!', btn);
                status.innerHTML = "<p style='color:red'> Registration not successful. Try again. </p>";
            });
        }     
    }

    async function getInstitutions() {
        
        await axios({
            method: 'get',
            url: serverEndPoint+`institutions`,
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            }
        })
        .then( async (response) => {
            let details = response.data.data;
            
            if(response.status == 200) {  
                setInstitutions(institutions => [...institutions, details]);
                setValues( values => ({
                    ...values, 
                    loaded: true,
                }));
            }
        }).
        catch( (error) => {
            console.log(error);
        });
    }
    
    useEffect( () => {
        getInstitutions();
        document.title = webTitle+" Register";
    }, []);
    
    return (

        <div>
            <Header/>
            <div className="col-md-6 col-sm-7 col-md-offset-3 col-sm-offset-3 col-xs-12">
                <div className="wel-back">
                    <br/><br/><br/><br/>
                    <h3>Create a <span className="theme-cl">Bineza Account</span></h3>
                </div>
                
                <form method="post" id="register-form" action="#" onSubmit={event => register(event)}>
					<div className="form-group">
						<label>Register As</label>
						<select className="form-control"  name="type" onChange={onChangeHandler}>
							<option value=""> -- Select an Option -- </option>
							<option value="customer">As a Customer</option>
							<option value="seller">As a Seller</option>
						</select>
					</div>

                    {values.type == "seller"?
                        <div>
                            <div className="form-group">
                                <label>Business name</label>
                                <input type="text" className="form-control" name="business" onChange={onChangeHandler}/>
                            </div>

                            <div className="form-group">
                                <label>Business started on</label>
                                <input type="date" className="form-control" name="started_at" onChange={onChangeHandler}/>
                            </div>
                        </div> : null
                    }
                    
                    <div className="form-group">
						<label>Firstname</label>
						<input type="text" className="form-control" name="firstname" onChange={onChangeHandler}/>
					</div>
					
					<div className="form-group">
						<label>Lastname</label>
						<input type="text" className="form-control" name="lastname" onChange={onChangeHandler}/>
					</div>

					<div className="form-group">
						<label>Phone number</label>
						<input type="text" className="form-control" name="phone" onChange={onChangeHandler}/>
					</div>
					
					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control" name="email" onChange={onChangeHandler}/>
                    </div>

                    <div className="form-group">
						<label>Institution</label>
						<select className="form-control" name="institution" onChange={onChangeHandler}>
							<option value=""> -- Select an option -- </option>
                            {values.loaded?
                                institutions[0].map( (institution, index) => 
                                    <option key={index} value={institution.id}>
                                        {institution.name}
                                    </option>
                                ) : null
                            }
						</select>
					</div>
                    
                    <div>
                        <div>
                            <label>Password</label>
                            <div class="input-group">
                                <input type="password" id="password" class="form-control" name="password" onChange={onChangeHandler}/>
                                <span class="input-group-addon">
                                    {!values.showPassword ?
                                        <span onClick={togglePassword.bind(this, 'password', 'show')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Show</b></span> :
                                        <span onClick={togglePassword.bind(this, 'password', 'hide')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Hide</b></span>
                                    }
                                </span>
                            </div>
                        </div>
                    </div> <br/>

                    <div>
                        <div>
                            <label>Confirm Password</label>
                            <div class="input-group">
                                <input type="password" id="password_confirmation" class="form-control" name="password_confirmation" onChange={onChangeHandler}/>
                                {!values.showPasswordConfirmation ?
                                    <span class="input-group-addon" onClick={togglePassword.bind(this, 'password_confirmation', 'show')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Show</b></span> :
                                    <span class="input-group-addon" onClick={togglePassword.bind(this, 'password_confirmation', 'hide')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Hide</b></span>
                                }
                            </div>
                        </div>
                    </div> <br/><br/>

                    <div className="center">
                        <button type="submit" id="register-btn" className="btn btn-midium theme-btn btn-radius width-200"> Register Now! </button>
                        <br/> <br/>
                        <div id="register-status"></div>
                    </div>
                    
                </form>
                
                {/* <div className="connect-with">
                    <ul>
                        <li className="fb-ic"><Link to="#"><i className="ti-facebook"></i></Link></li>
                        <li className="tw-ic"><Link to="#"><i className="ti-twitter"></i></Link></li>
                    </ul>
                </div> */}
                
                <div className="center mrg-top-5">
                    <div className="bottom-login text-center">Already have an account?   <Link to="/login" className="theme-cl">Login Now</Link> </div>
                </div> <br/>
            </div>

            <div style={{clear:'both'}}></div>
            
            <Footer/>
        </div>
    );
}
