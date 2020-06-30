import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import Functions from '../../utils/Functions';
import { serverEndPoint, webTitle} from '../../utils/Helpers';

export default function ForgotPassword() {
    
    const [values, setValues] = React.useState({
        email: '',
        type: '',
    });
    
    function onChangeHandler(event) {
        const { name, value } = event.target;
        setValues(values => ({...values, [name] : value}));
    }
    
    function resetPassword(event) {
    
        event.preventDefault();
        const status = document.getElementById('reset-status');
        const btn = document.getElementById('reset-btn');
          
        const { email, type } = values;        
        const allValues = [email, type];
        const isValueEmpty = Functions.isEmpty(allValues);

        if(isValueEmpty) {
            status.innerHTML = "<p style='color:red'> Fill both fields </p>";
            return false;
        } else {
            
            Functions.disableBtn(btn);
            const data = `type=${type}&email=${email}`; 
              
            axios({
                method: 'post',
                url: `${serverEndPoint}forgot-password`,
                data: data,
            })
            .then( async (response) => {
                Functions.enableBtn('Reset', btn);
                
                if(response.data.data.type == "success") {
                    status.innerHTML = `<p style='color:green'> Password successfully reset. Kindly check your mail.</p>`;
                    document.getElementById('reset-form').reset();
                } else {
                    status.innerHTML = `<p style='color:red'>${response.data.data.message}</p>`;
                }
            })
            .catch( (error) => {
                Functions.enableBtn('Reset', btn);
                status.innerHTML = "<p style='color:red'> Password reset not successful. Try again. </p>";
            });
        }     
    }
    
    useEffect( () => {
        document.title = webTitle+" Forgot Password";
    }, []);
    
    return (

        <div>
            <Header/>
            
            <div className="col-md-6 col-sm-7 col-md-offset-3 col-sm-offset-3 col-xs-12">
                <div className="wel-back">
                    <br/><br/><br/><br/>
                    <h3>Reset to Your <span className="theme-cl">Bineza Account </span> Password </h3>
                </div>
                
                <form method="post" action="#" id='reset-form' onSubmit={event => resetPassword(event)}>
                    
                    <div className="form-group">
						<label>Reset As</label>
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
                    
                    <br/>
                    <div style={{clear:'both'}}></div>
                    <div className="center">
                        <button type="submit" id="reset-btn" className="btn btn-midium theme-btn btn-radius width-200"> Reset Password</button>
                        <br/><br/>
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
