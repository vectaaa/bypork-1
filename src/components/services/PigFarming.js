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

            <div class="ttm-page-title-row">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12"> 
                            <div class="title-box text-left">
                                <div class="page-title-heading">
                                    <h1 class="title">Pig Farming And Processing</h1>
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
                        <div class="col-lg-12 content-area order-lg-2">
                            <div class="ttm-service-single-content-area">
                                {/* <div class="ttm_single_image-wrapper mb-35">
                                    <img class="img-fluid" src={window.location.origin + '/images/single-img-nine.jpg'} alt="single-img-nine"/>
                                </div> */}
                                <div class="ttm-service-description">
                                    <h4>What make our pig farming unique</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    <p class="mb-30">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    <h4>We offer the best pig farming solution</h4>
                                   <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                                <div class="row mt-30">
                                    <div class="col-lg-6">
                                        <div class="featured-icon-box left-icon mb-30">
                                            <div class="featured-icon">
                                                <div class="ttm-icon ttm-icon_element-bgcolor-grey ttm-icon_element-size-lg">
                                                    <i class="flaticon flaticon-cow-1 fs-34"></i>
                                                </div>
                                            </div>
                                            <div class="featured-content">
                                                <div class="featured-title">
                                                    <h5 class="mb-5">Excellent Service</h5>
                                                </div>
                                                <div class="featured-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="featured-icon-box left-icon mb-30">
                                            <div class="featured-icon">
                                                <div class="ttm-icon ttm-icon_element-bgcolor-grey ttm-icon_element-size-lg">
                                                    <i class="flaticon flaticon-sprout fs-34"></i>
                                                </div>
                                            </div>
                                            <div class="featured-content">
                                                <div class="featured-title">
                                                    <h5 class="mb-5">Quality & Reliability</h5>
                                                </div>
                                                <div class="featured-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        
                                        <div class="featured-icon-box left-icon mb-30">
                                            <div class="featured-icon">
                                                <div class="ttm-icon ttm-icon_element-bgcolor-grey ttm-icon_element-size-lg">
                                                    <i class="flaticon flaticon-farmer fs-34"></i>
                                                </div>
                                            </div>
                                            <div class="featured-content">
                                                <div class="featured-title">
                                                    <h5 class="mb-5">Expert Farmer</h5>
                                                </div>
                                                <div class="featured-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        
                                        <div class="featured-icon-box left-icon  mb-30">
                                            <div class="featured-icon">
                                                <div class="ttm-icon ttm-icon_element-bgcolor-grey ttm-icon_element-size-lg">
                                                    <i class="flaticon flaticon-agriculture fs-34"></i>
                                                </div>
                                            </div>
                                            <div class="featured-content">
                                                <div class="featured-title">
                                                    <h5 class="mb-5">Clean Working</h5>
                                                </div>
                                                <div class="featured-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-10">
                                    <div class="col-lg-6 col-md-12">
                                        <div class="ttm_single_image-wrapper">
                                            <img class="img-fluid" src={window.location.origin + '/images/single-img-ten.jpg'} alt="single-img-ten"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <div class="ttm-tabs ttm-tab-style-horizontal grey-background res-991-mt-30 clearfix">
                                            
                                            <ul class="tabs clearfix">
                                                <li class="tab active"><Link to="#">Planning</Link></li>
                                                <li class="tab"><Link to="#">Design</Link></li>
                                                <li class="tab"><Link to="#">Maintain</Link></li>
                                            </ul>
                                            <div class="content-tab">
                                                <div class="content-inner">
                                                    <p class="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                                </div>
                                                <div class="content-inner">
                                                    <p class="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                                </div>
                                                <div class="content-inner">
                                                    <p class="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
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

        </div>
    );
}
