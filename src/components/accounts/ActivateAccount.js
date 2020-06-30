import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import Functions from '../../utils/Functions';
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function ActivateAccount(props) {
    
    const [values, setValues] = React.useState({
        code: props.match.params.code,
        activated: false,
    });
    
    async function activateAccount(code) {

        let status = document.getElementById('activated');
        
        await axios({
            method: 'put',
            url: `${serverEndPoint}activate-account/${code}`,
        })
        .then(response => {
            
            if(response.data.data.type == "success") {
                status.innerHTML = `<p style='color:green'>Account activated. Please wait ... </p>`;
                setTimeout(function() {
                    window.location = `/login`;
                }, 2000);
            } else {
                status.innerHTML = `<p style='color:red'>${response.data.data.message}</p>`;
            }
 
            setValues(values => ({
                ...values,
                activated: true
            }));

        }).
        catch( (error) => {
            setValues(values => ({
                ...values,
                activated: true
            }));
            status.innerHTML = "<p style='color:red'> Account not activated. Try again. </p>";
        });
    }     

    useEffect( () => {
        activateAccount(values.code);
        document.title = webTitle+" Activate Account";
    }, []);
    
    return (

        <div>
            <Header/>
            <div className="col-md-6 col-sm-7 col-md-offset-3 col-sm-offset-3 col-xs-12">
                <br/><br/><br/><br/>
                {!values.activated ?
                    <div align="center" style={{marginTop:50}}>
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>  : 
                    null
                }

                <div id="activated" align="center" style={{fontSize: 20}}> </div>

            </div>

            <div style={{clear:'both'}}></div> <br/>
            
            <div className="center mrg-top-5">
                <div className="bottom-login text-center">Don't have an account? <Link to="/register" className="theme-cl">Create An Account</Link> </div>
            </div> <br/>
        
        </div>
    );
}
