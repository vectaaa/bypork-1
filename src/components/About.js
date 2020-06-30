import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Header from './navs/Header';
import Footer from './navs/Footer';
import Functions from '../utils/Functions';
import { serverEndPoint, webTitle } from '../utils/Helpers';

export default function Home() {
    
	  const history = useHistory();
  
    useEffect( () => {
		  document.title = webTitle+" About Us";
    }, []);
	
    return (

      <div className="page"> 
          <Header/>

          <div className="site-main">
            
            <section className="ttm-row fourth-about-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ml-40">
                              <div className="ttm_single_image-wrapper position-relative after-border style3">
                                <img className="img-fluid" src="images/pigs.jpg" title="pigs" alt="pigs"/>
                              </div>
                              <div className="about-overlay-04">
                                <img src="images/pattern-02.png" alt="pattern"/>
                              </div>
                              <div className="ttm-play-icon-btn ttm-play-icon-btn-center">
                                <div className="ttm-play-icon-animation">
                                    <a href="https://www.youtube.com/watch?v=N4hO_0Sd0hM&t=5" target="_self" className="ttm_prettyphoto">
                                        <div className="ttm-icon ttm-icon_element-bgcolor-white ttm-icon_element-size-md ttm-icon_element-style-round">
                                            <i className="fa fa-play"></i>
                                        </div>
                                    </a>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="res-991-mt-50">
                                <div className="section-title clearfix">
                                    <div className="title-header">
                                        <h5>About bypork</h5>
                                        <h2 className="title">Save Africa. Make lots of money.</h2>
                                    </div>
                                    <div className="heading-seperator">
                                        <span></span>
                                    </div>
                                </div>
                                <p><b>Bypork is an initiative to combat protein deficiency in Africa by engaging Africans in Pig-Farming and giving back 10% returns of every investment to the poor/orphanges/under privileged in the society.</b></p>
                                <p>
                                    We raise pigs via sustainable modern farm technology including hydroponic feed, ultra-clean barn and energy from animal excreta.
                                    
                                    Our farming is organic and eco-friendly.
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </div>
                      
              <section className="ttm-row process-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center clearfix">
                                <div className="title-header">
                                    <h5>how it work</h5>
                                    <h2 className="title">Our Working Process</h2>
                                </div>
                                <div className="heading-seperator">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ttm-processbox-wrapper">
                                <div className="ttm-processbox text-center">
                                    <div className="ttm-box-image">
                                        <img className="img-fluid" src="images/step-one.jpg" alt="step-one" title="step-one"/>
                                        <div className="process-num">
                                            <span className="number">01</span>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title"><h5>You fund</h5></div>
                                        <div className="ttm-box-description">Invest with us</div>
                                    </div>
                                </div>
                                <div className="ttm-processbox text-center">
                                    <div className="ttm-box-image">
                                        <img className="img-fluid" src="images/step-two.jpg" alt="step-two" title="step-two"/>
                                        <div className="process-num">
                                            <span className="number">02</span>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title"><h5>We farm</h5></div>
                                        <div className="ttm-box-description">We give the pigs a comfortable and nourishing treat by providing quality feeding, vaccination and proper animal care</div>
                                    </div>
                                </div>
                                <div className="ttm-processbox text-center">
                                    <div className="ttm-box-image">
                                        <img className="img-fluid" src="images/step-three.jpg" alt="step-three" title="step-three"/>
                                        <div className="process-num">
                                            <span className="number">03</span>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                    <div className="featured-title"><h5>We pay</h5></div>
                                        <div className="ttm-box-description">We raise the pigs, sell them and you get high interest returns, without stress.</div>
                                    </div>
                                </div>
                                <div className="ttm-processbox text-center">
                                    <div className="ttm-box-image">
                                        <img className="img-fluid" src="images/step-four.jpg" alt="step-four" title="step-four"/>
                                        <div className="process-num">
                                            <span className="number">04</span>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title"><h5>We gift</h5></div>
                                        <div className="ttm-box-description">We use 10% of the returns to fund free learning and the welfare of the underprivileged children in our community.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </section>
              
              <section className="ttm-row third-team-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center clearfix">
                                <div className="title-header">
                                    <h5>Team Member</h5>
                                    <h2 className="title">Meet Some of Our Key Founders</h2>
                                </div>
                                <div className="heading-seperator">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="row slick_slider" data-slick='{"slidesToShow": 3, "slidesToScroll": 3, "dots":false, "arrows":false, "autoplay":false, "infinite":true, "centerMode":false}'>
                        <div className="col-lg-3">
                            
                            <div className="featured-imagebox featured-imagebox-team style2 mb-10">
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="images/team-member/team-img01.jpg" alt="image"/>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href="#">Lara Christine</a></h5>
                                    </div>
                                    <p className="category">Landscaper</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            
                            <div className="featured-imagebox featured-imagebox-team style2 mb-10">
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="images/team-member/team-img02.jpg" alt="image"/>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href="#">Dan Western</a></h5>
                                    </div>
                                    <p className="category">Landscaper</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            
                            <div className="featured-imagebox featured-imagebox-team style2 mb-10">
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="images/team-member/team-img03.jpg" alt="image"/>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href="#">Mark Steven</a></h5>
                                    </div>
                                    <p className="category">Gardener</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            
                            <div className="featured-imagebox featured-imagebox-team style2 mb-10">
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="images/team-member/team-img04.jpg" alt="image"/>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">
                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li className="social-linkedin"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href="#">Marry Quinn</a></h5>
                                    </div>
                                    <p className="category">Landscaper</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
          <div style={{clear:'both'}}></div>
          <br/><br/><br/>
          <Footer/>

          <a id="totop" href="#top">
            <i className="fa fa-angle-up"></i>
          </a>
      </div>
  );
}
