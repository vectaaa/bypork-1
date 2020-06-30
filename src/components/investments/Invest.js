import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import Functions from '../../utils/Functions';
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function Invest() {
    
	const history = useHistory();
	
	useEffect( () => {
		document.title = webTitle+" Invest";
    }, []);
	
    return (

      <div className="page"> 
        <Header/>

            <div class="ttm-page-title-row">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12"> 
                          <div class="title-box text-left">
                              <div class="page-title-heading">
                                  <h1 class="title">Invest</h1>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>                     
            </div>

            <div class="site-main">

                <div class="ttm-row only-one-section ttm-bgcolor-white clearfix">
                    <div class="container">
                        
                        <div class="row">
                            <div class="col-lg-12">
                                
                                <h3> Select an Investment Plan </h3>

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
                                                <a className="btn btn-success btn-green btn-block" href="#">Select</a>
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
                                                <a className="btn btn-success btn-green btn-block" href="#">Select</a>
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
                                                <a className="btn btn-success btn-green btn-block" href="#">Select</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <br/><br/>
                                <form name="checkout" method="post" class="checkout row" action="#">
                                    <div class="col-lg-12">
                                        <h4>Investor Details</h4>
                                        
                                        <div class="row">

                                            <div className="notice container ">Kindly fill the form below appropriately</div> <br/><br/>
                                            
                                            <div class="col-sm-12">
                                                <div class="form-group"><br/>
                                                    <label>Business<abbr>*</abbr></label>
                                                    <input type="text" name="occupation" class="form-control border"/>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>First Name<abbr>*</abbr></label>
                                                    <input type="text" name="fname" class="form-control border"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>Last Name<abbr>*</abbr></label>
                                                    <input type="text" name="lname" class="form-control border"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label>Email<abbr>*</abbr></label>
                                                    <input type="text" name="email" class="form-control border"/>
                                                </div>
                                            </div>

                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label>Phone<abbr>*</abbr></label>
                                                    <input type="text" name="phone" class="form-control border"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="container" align="center">
                                        <br/>
                                        <button class="btn btn-success btn-green btn-lg"> Invest </button>
                                    </div>
                                </form>
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
