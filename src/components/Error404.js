import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './navs/Header';
import Footer from './navs/Footer';
import { webTitle } from '../utils/Helpers';

export default function Error404() {
    
    useEffect( () => {
        document.title = webTitle+" Page not found";
    });
    
    return (

        <div>
            <Header/>
            
                <section>
                    <div class="container">
                        <div class="error-page padd-top-30 padd-bot-30">
                            <h1 class="mrg-top-15 mrg-bot-0 cl-danger font-250 font-bold">404</h1>
                            <h2 class="mrg-top-10 mrg-bot-5 font-60">The page you are looking for doesn't exist </h2> <br/>
                            <Link to="/ads" class="btn btn-warning">Go To Ads Page</Link>
                        </div>
                    </div>
                </section>
                
            <Footer/>
        </div>
    );
}
