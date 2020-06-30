import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Link, useHistory } from "react-router-dom";
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function InvestmentPlans() {
    
    useEffect( () => {
        document.title = webTitle+" Investment Plans";
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
                                    <h1 className="title">Investment Plans</h1>
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
                                    <li><Link to="/services/pig-farming">Pig Farming and Processing</Link></li>
                                    <li className="active"><Link to="/services/investment-plans">Investment Plans</Link></li>
                                    <li><Link to="/services/charity-scheme">Our Charity Scheme</Link></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-9 content-area order-lg-2">
                            <div className="ttm-service-single-content-area">
                                <div className="ttm-service-description">
                                    <h4>About our investment plans </h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    <p className="mb-30">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    <h4>We offer the best investment solutions</h4>
                                   <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                                
                                <div id="invest-now" className="row no-gutters mt-50 res-767-mt-0">
                                    <div className="col-md-4">
                                        
                                        <div className="ttm-pricing-plan box-shadow text-left clearfix">
                                            <div className="ttm-ptablebox-title"><h3>Bronze</h3></div>
                                            <div className="ttm-ptablebox-desc">N100,000 - N299,999</div>
                                            <div className="ttm-ptablebox-content">
                                                <div className="ttm-ptablebox-price-w">
                                                    
                                                    <div className="ttm-ptablebox-price">25%</div>
                                                    <div className="ttm-ptablebox-frequency">ROI</div>
                                                </div>
                                                <div className="ttm-ptablebox-features">
                                                    <ul className="ttm-feature-lines">
                                                        <li>duration of 10 months</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="price_btn">
                                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-bgcolor-grey mb-20 w-100" href="details.html">Sign Up</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        
                                        <div className="ttm-pricing-plan box-shadow text-left clearfix">
                                            <div className="ttm-ptablebox-title"><h3>Silver</h3></div>
                                            <div className="ttm-ptablebox-desc">N300,000 - N599,999</div>
                                            <div className="ttm-ptablebox-content">
                                                <div className="ttm-ptablebox-price-w">
                                                    
                                                    <div className="ttm-ptablebox-price">30%</div>
                                                    <div className="ttm-ptablebox-frequency">ROI</div>
                                                </div>
                                                <div className="ttm-ptablebox-features">
                                                    <ul className="ttm-feature-lines">
                                                        <li>duration of 10 months</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="price_btn">
                                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-bgcolor-grey mb-20 w-100" href="details.html">Sign Up</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        
                                        <div className="ttm-pricing-plan box-shadow text-left clearfix">
                                            <div className="ttm-ptablebox-title"><h3>Gold</h3></div>
                                            <div className="ttm-ptablebox-desc">N600,000 - N2,000,000</div>
                                            <div className="ttm-ptablebox-content">
                                                <div className="ttm-ptablebox-price-w">
                                                    
                                                    <div className="ttm-ptablebox-price">35%</div>
                                                    <div className="ttm-ptablebox-frequency">ROI</div>
                                                </div>
                                                <div className="ttm-ptablebox-features">
                                                    <ul className="ttm-feature-lines">
                                                        <li>duration of 10 months</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="price_btn">
                                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-bgcolor-grey mb-20 w-100" href="details.html">Sign Up</a>
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
