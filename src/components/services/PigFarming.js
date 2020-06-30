import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Link, useHistory } from "react-router-dom";
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function PigFarming() {
    
    useEffect( () => {
        document.title = webTitle+" Pig Farming";
    });
    
    return (

        <div className="page"> 
          <Header/>

            <div className="ttm-page-title-row">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                            <div className="title-box text-left">
                                <div className="page-title-heading">
                                    <h1 className="title">Pig Farming And Processing</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                     
            </div>

            <div className="site-main">
            
            <div className="sidebar ttm-sidebar ttm-bgcolor-white clearfix">
                <div className="container">
                    
                    <div className="row">

                        <div className="col-lg-3 widget-area">
                            <aside className="widget widget-nav-menu">
                                <ul className="widget-menu">
                                    <li className="active"><Link to="/services/pig-farming">Pig Farming and Processing</Link></li>
                                    <li><Link to="/services/investment-plans">Investment Plans</Link></li>
                                    <li><Link to="/services/charity-scheme">Our Charity Scheme</Link></li>
                                </ul>
                            </aside>
                        </div>
                        
                        <div className="col-lg-9 content-area order-lg-2">
                            <div className="ttm-service-single-content-area">
                                {/* <div className="ttm_single_image-wrapper mb-35">
                                    <img className="img-fluid" src={window.location.origin + '/images/single-img-nine.jpg'} alt="single-img-nine"/>
                                </div> */}
                                <div className="ttm-service-description">
                                    <h4>What make our pig farming unique</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    <p className="mb-30">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    <h4>We offer the best pig farming solution</h4>
                                   <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                                <div className="row mt-30">
                                    <div className="col-lg-6">
                                        <div className="featured-icon-box left-icon mb-30">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-bgcolor-grey ttm-icon_element-size-lg">
                                                    <i className="flaticon flaticon-cow-1 fs-34"></i>
                                                </div>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h5 className="mb-5">Excellent Service</h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="featured-icon-box left-icon mb-30">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-bgcolor-grey ttm-icon_element-size-lg">
                                                    <i className="flaticon flaticon-sprout fs-34"></i>
                                                </div>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h5 className="mb-5">Quality & Reliability</h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        
                                        <div className="featured-icon-box left-icon mb-30">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-bgcolor-grey ttm-icon_element-size-lg">
                                                    <i className="flaticon flaticon-farmer fs-34"></i>
                                                </div>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h5 className="mb-5">Expert Farmer</h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        
                                        <div className="featured-icon-box left-icon  mb-30">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-bgcolor-grey ttm-icon_element-size-lg">
                                                    <i className="flaticon flaticon-agriculture fs-34"></i>
                                                </div>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h5 className="mb-5">Clean Working</h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-10">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="ttm_single_image-wrapper">
                                            <img className="img-fluid" src={window.location.origin + '/images/single-img-ten.jpg'} alt="single-img-ten"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="ttm-tabs ttm-tab-style-horizontal grey-background res-991-mt-30 clearfix">
                                            
                                            <ul className="tabs clearfix">
                                                <li className="tab active"><Link to="#">Planning</Link></li>
                                                <li className="tab"><Link to="#">Design</Link></li>
                                                <li className="tab"><Link to="#">Maintain</Link></li>
                                            </ul>
                                            <div className="content-tab">
                                                <div className="content-inner">
                                                    <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                                </div>
                                                <div className="content-inner">
                                                    <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                                </div>
                                                <div className="content-inner">
                                                    <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
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
