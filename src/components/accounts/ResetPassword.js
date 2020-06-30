import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import Functions from '../../utils/Functions';
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function ResetPassword(props) {
    
    const [values, setValues] = React.useState({
        new_password: '',
        new_password_confirmation: '',
        code: props.match.params.code,
        showNewPassword: false,
        showNewPasswordConfirmation: false,
    });
    
    function togglePassword(field, action) {
        const password = document.getElementById(field);

        if(action == 'show') {
            password.type = 'text';  
            
            if(field == 'new_password') {
                setValues(values => ({
                    ...values, 
                    showNewPassword: true
                }));
            } else if(field == 'new_password_confirmation') {
                setValues(values => ({
                    ...values, 
                    showNewPasswordConfirmation: true
                }));
            }  
        } else {
            password.type = 'password';  
            
            if(field == 'new_password') {
                setValues(values => ({
                    ...values, 
                    showNewPassword: false
                }));
            } else if(field == 'new_password_confirmation') {
                setValues(values => ({
                    ...values, 
                    showNewPasswordConfirmation: false
                }));
            }   
        }
    }
    
    function onChangeHandler(event) {
        const { name, value } = event.target;
        setValues(values => ({...values, [name] : value}));
    }
    
    function resetPassword(event) {
        event.preventDefault();
        const status = document.getElementById('reset-status');
        const btn = document.getElementById('reset-btn');
          
        const { code, new_password, new_password_confirmation } = values; 
        const allValues = [new_password, new_password_confirmation];
        const isValueEmpty = Functions.isEmpty(allValues);

        if(isValueEmpty) {
            status.innerHTML = "<p style='color:red'> Fill both fields </p>";
            return false;
        } else {
            
            Functions.disableBtn(btn);
            const data = `new_password=${new_password}&new_password_confirmation=${new_password_confirmation}`; 
            
            axios({
                method: 'post',
                url: `${serverEndPoint}reset-password/${code}`,
                data: data,
            })
            .then(response => {
                Functions.enableBtn('Reset Password', btn);
                
                if(response.data.data.type == "success") {
                    status.innerHTML = `<p style='color:green'>Password successfully changed.</p>`;
                    setTimeout(function() {
                        window.location = "/login";
                    }, 1000);
                } else {
                    status.innerHTML = `<p style='color:red'>${response.data.data.message}</p>`;
                }
            }).
            catch( (error) => {
                console.log(error);
                Functions.enableBtn('Reset Password', btn);
                status.innerHTML = "<p style='color:red'> Password reset not successful. Try again. </p>";
            });
        }     
    }

    useEffect( () => {
        document.title = webTitle+" Reset Password";
    }, []);
    
    return (

        <div>
            <Header/>
            <div className="col-md-6 col-sm-7 col-md-offset-3 col-sm-offset-3 col-xs-12">
                <div className="wel-back">
                    <br/><br/><br/><br/>
                    <h3>Create a new <span className="theme-cl">Bineza Password</span></h3>
                </div>
                
                <form method="post" action="#" onSubmit={event => resetPassword(event)}>
					<div>
                        <div>
                            <label>New Password</label>
                            <div class="input-group">
                                <input type="password" id="new_password" class="form-control" name="new_password" onChange={onChangeHandler}/>
                                <span class="input-group-addon">
                                    {!values.showNewPassword ?
                                        <span onClick={togglePassword.bind(this, 'new_password', 'show')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Show</b></span> :
                                        <span onClick={togglePassword.bind(this, 'new_password', 'hide')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Hide</b></span>
                                    }
                                </span>
                            </div>
                        </div>
                    </div> <br/>

                    <div>
                        <div>
                            <label>Confirm New Password</label>
                            <div class="input-group">
                                <input type="password" id="new_password_confirmation" class="form-control" name="new_password_confirmation" onChange={onChangeHandler}/>
                                {!values.showNewPasswordConfirmation ?
                                    <span class="input-group-addon" onClick={togglePassword.bind(this, 'new_password_confirmation', 'show')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Show</b></span> :
                                    <span class="input-group-addon" onClick={togglePassword.bind(this, 'new_password_confirmation', 'hide')} style={{color: '#EA7602', cursor: 'pointer'}}><b>Hide</b></span>
                                }
                            </div>
                        </div>
                    </div> <br/><br/>

                    <div className="center">
                        <button type="submit" id="reset-btn" className="btn btn-midium theme-btn btn-radius width-200"> Change Password </button>
                        <br/> <br/>
                        <div id="reset-status"></div>
                    </div>
                    
                </form>
                
                <div className="center mrg-top-5">
                    <div className="bottom-login text-center">Already have an account?   <Link to="/login" className="theme-cl">Login Now</Link> </div>
                </div> <br/>
            </div>

            <div style={{clear:'both'}}></div>
            
            <Footer/>
        </div>
    );
}
