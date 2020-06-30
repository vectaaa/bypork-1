import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Header from './navs/Header';
import Footer from './navs/Footer';
import Functions from '../utils/Functions';
import { serverEndPoint, webTitle } from '../utils/Helpers';

export default function About() {
    
	const history = useHistory();
	
	useEffect( () => {
		document.title = webTitle+" Saving Africa With Pork";
    }, []);
	
    return (

        <div className="page"> 
      
            <Header/>

		</div>
    );
}
