import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Link, useHistory } from "react-router-dom";
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function CharityScheme() {
    
    useEffect( () => {
        document.title = webTitle+" Charity Scheme";
    });
    
    return (

        <div className="page"> 
          
            <Header/>

            <div class="ttm-page-title-row">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12"> 
                            <div class="title-box text-left">
                                <div class="page-title-heading">
                                    <h1 class="title">Charity Scheme</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                     
            </div>

            <div class="site-main">
            
                <div class="sidebar ttm-sidebar ttm-bgcolor-white clearfix">
                    <div class="container">
                        
                        <div class="row">
                            <div class="col-lg-3 widget-area">
                                <aside class="widget widget-nav-menu">
                                    <ul class="widget-menu">
                                        <li><Link to="/services/pig-farming">Pig Farming and Processing</Link></li>
                                        <li><Link to="/services/investment-plans">Investment Plans</Link></li>
                                        <li class="active"><Link to="/services/charity-scheme">Our Charity Scheme</Link></li>
                                    </ul>
                                </aside>
                            </div>
                            <div class="col-lg-9 content-area order-lg-2">
                                <div class="ttm-service-single-content-area">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="ttm_single_image-wrapper mb-35">
                                                <img class="img-fluid" src={window.location.origin + '/images/single-img-fourteen.jpg'} alt="single-img-fourteen"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ttm-service-description">
                                        <h4>We Give Back To The Society</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="ttm_single_image-wrapper mt-30">
                                                    <img class="img-fluid" src={window.location.origin + '/images/single-img-fifteen.jpg'} alt="single-img-fifteen"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h4 class="mt-30">How We Work?</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        
                                        <div class="separator">
                                            <div class="sep-line mt-30 mb-30"></div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h4>Benefits of renovation</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                <div class="mt-10">
                                                    <ul class="ttm-list ttm-list-style-icon">
                                                        <li><i class="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span class="ttm-list-li-content">Install and Remove any type of Trees safely</span></li>
                                                        <li><i class="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span class="ttm-list-li-content">Maintenance services to keep trees are healthy</span></li>
                                                        <li><i class="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span class="ttm-list-li-content">Insured and provide expert solutions</span></li>
                                                        <li><i class="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span class="ttm-list-li-content">Experienced in commercial scale planting</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="ttm_single_image-wrapper res-767-mt-30">
                                                    <img class="img-fluid" src="images/single-img-sixteen.jpg" alt="single-img-sixteen"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div style={{clear:'both'}}></div>
            <br/><br/><br/>
            <Footer/>

            <a id="totop" href="#top">
            <i className="fa fa-angle-up"></i>
            </a>
            
        </div>
    );
}
