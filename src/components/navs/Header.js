import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import Functions from '../../utils/Functions';
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function Header() {
    
    useEffect( () => {
    }, []);

    return (

        <header id="masthead" className="header ttm-header-style-01">
            <div className="ttm-header-wrap">
                <div id="ttm-stickable-header-w" className="ttm-stickable-header-w clearfix">
                    <div className="ttm-topbar-wrapper clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ttm-topbar-content">
                                        <ul className="top-contact text-left">
                                            <li>Your Trusted 24 Hours Service Provider!</li>
                                        </ul>
                                        <div className="topbar-right text-right">
                                            <ul className="top-contact">
                                                <li>Office Hour : 08:00am - 6:00pm</li>
                                            </ul>
                                            <div className="ttm-social-links-wrapper list-inline">
                                                <ul className="social-icons">
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-flickr"></i></a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-widget_header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="site-branding mr-auto">
                                            <a className="home-link" href="index-2.html" title="Agrotek" rel="home">
                                                <img src={window.location.origin + '/images/logo.png'} id="logo-img" className="img-center" alt="logo"/>
                                            </a>
                                        </div>
                                        <div className="widget_info d-flex flex-row align-items-center justify-content-end">
                                            <div className="widget_icon"><i className="flaticon-call"></i></div>
                                            <div className="widget_content">
                                                <h5 className="widget_title"><a href="tel:+234 8100317388">+234 8100317388</a></h5>
                                            </div>
                                        </div>
                                        <div className="widget_info d-flex flex-row align-items-center justify-content-end">
                                            <div className="widget_icon"><i className="flaticon-email"></i></div>
                                            <div className="widget_content">
                                                <h5 className="widget_title"><a href="mailto:info@bypork.com">info@bypork.com</a></h5>
                                            </div>
                                        </div>
                                        <div className="widget_info d-flex flex-row align-items-center justify-content-end">
                                            <div className="widget_icon"><i className="flaticon-worldwide"></i></div>
                                            <div className="widget_content">
                                                <h5 className="widget_title">Lagos Nigeria</h5>
                                                <p className="widget_desc">Lagos Island </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="site-header-menu" className="site-header-menu">
                        <div className="site-header-menu-inner ttm-stickable-header">
                            <div className="container">
                                <div id="site-navigation" className="site-navigation">
                                    <div className="ttm-custombutton">
                                    <Link to="/invest" className="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-skincolor"> INVEST NOW</Link>
                                    </div>
                                    
                                    <div className="ttm-menu-toggle">
                                        <input type="checkbox" id="menu-toggle-form" />
                                        <label for="menu-toggle-form" className="ttm-menu-toggle-block">
                                            <span className="toggle-block toggle-blocks-1"></span>
                                            <span className="toggle-block toggle-blocks-2"></span>
                                            <span className="toggle-block toggle-blocks-3"></span>
                                        </label>
                                    </div>
                                    <nav id="menu" className="menu">
                                        <ul className="dropdown">
                                        <li className="active"><a href="/">Home</a></li>
                                        <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="#">Services</Link>
                                                <ul>
                                                    <li><Link to="/services/pig-farming">Pig Farming & Processing</Link></li>
                                                    <li><Link to="/services/charity-scheme">Charity Scheme</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/faq">FAQ</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
