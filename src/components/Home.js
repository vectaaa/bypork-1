import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Header from './navs/Header';
import Footer from './navs/Footer';
import Functions from '../utils/Functions';
import { serverEndPoint, webTitle } from '../utils/Helpers';

export default function Home() {
    
	const history = useHistory();
  const [testimonialSlick, setTestimonialSlick] = React.useState({
    slidesToShow: 1, 
    slidesToScroll: 1 , 
    dots: true, 
    arrows: false, 
    autoplay: false, 
    infinite: true, 
    centerMode: false, 
    responsive: [{
      breakpoint:500,
      settings: {
        slidesToShow: 1
      }
    }]
  });

	useEffect( () => {
		document.title = webTitle+" Saving Africa With Pork";
    }, []);
	
    return (

        <div className="page"> 
            <Header/>

            <rs-module-wrap id="rev_slider_1_1_wrapper" data-source="gallery">
                <rs-module id="rev_slider_1_1" data-version="6.1.2" className="rev_slider_1_1_height">
                  <rs-slides>
                      
                      <rs-slide data-key="rs-1" data-title="Slide" data-thumb="images/slides/slider-mainbg-001.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:zoomout;sl:d;">
                          <img src="images/slides/piggi.jpg" title="sliderbg-01" width="1920" height="705" className="rev-slidebg" data-no-retina/>
                          <rs-layer
                              id="slider-1-slide-1-layer-1"
                              className="head-font" 
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:c;yo:263px,263px,159px,139px;"
                              data-text="w:normal;s:75,75,55,35;l:85,85,60,45;fw:600;"
                              data-frame_0="o:1;"
                              data-frame_0_chars="o:0;rX:-90deg;oZ:-50;"
                              data-frame_1="sp:900;"
                              data-frame_1_chars="e:Power4.easeInOut;d:10;oZ:-50;"
                              data-frame_999="o:0;st:w;sR:6600;"
                              >PIG FARMING 
                          </rs-layer>
                          <rs-layer
                              id="slider-1-slide-1-layer-2"
                              className="ttm-bgcolor-skincolor" 
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:c;yo:205px,205px,122px,106px;"
                              data-text="w:normal;s:30,30,20,17;l:30,30,18,17;fw:300;"
                              data-padding="t:7,7,5,3;r:25,25,16,10;b:7,7,5,3;l:25,25,16,10;"
                              data-frame_0="o:1;"
                              data-frame_0_chars="o:0;rX:-90deg;oZ:-50;"
                              data-frame_1="st:40;sp:700;sR:40;"
                              data-frame_1_chars="e:Power4.easeInOut;d:10;oZ:-50;"
                              data-frame_999="o:0;st:w;sR:7060;"
                              >Our High-Quality 
                          </rs-layer>
                          <rs-layer
                              id="slider-1-slide-1-layer-3" 
                              data-type="text"
                              data-color="#bababa"
                              data-rsp_ch="on"
                              data-xy="x:c;xo:0,0,0,-500px;yo:359px,359px,223px,112px;"
                              data-text="w:normal;s:17,17,14,11;l:24,24,19,15;a:center;"
                              data-dim="w:565px,565px,388px,239px;"
                              data-vbility="t,t,t,f"
                              data-frame_0="y:100%;"
                              data-frame_1="e:Linear.easeNone;st:1160;sp:500;sR:1160;"
                              data-frame_999="o:0;st:w;sR:7340;"
                              >Our Pig Farming Structure which is built to produce 200 - 300 Pigs a month.
                          </rs-layer>
                          <a 
                              id="slider-1-slide-2-layer-4" 
                              className="rs-layer ttm-btn-bgcolor-skincolor ttm-btn ttm-btn-size-md"
                              href="/about" target="_self" rel="nofollow"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:c;yo:453px,453px,292px,205px;"
                              data-text="w:normal;s:15,15,12,12;l:15,15,12,12;fw:600;"
                              data-padding="t:16,16,12,12;r:35,35,25,25;b:16,16,12,12;l:35,35,25,25;"
                              data-frame_0="y:100%;"
                              data-frame_1="e:Linear.easeNone;st:970;sp:500;sR:970;"
                              data-frame_999="o:0;st:w;sR:7530;"
                              data-frame_hover="bgc:#232323;boc:#232323;bos:solid;bow:1px,1px,1px,1px;sp:300ms;" 
                              >MORE ABOUT  
                          </a>
                          
                          <rs-layer
                              id="slider-1-slide-1-layer-5"
                              className="ttm-bgcolor-white" 
                              data-type="shape"
                              data-rsp_ch="on"
                              data-xy="x:c;xo:-439px,-439px,-275px,-169px;yo:304px,304px,190px,117px;"
                              data-text="w:normal;s:20,20,12,7;l:0,0,15,9;"
                              data-dim="w:44px,44px,27px,16px;h:3px,3px,1px,1px;"
                              data-vbility="t,t,f,f"
                              data-frame_0="x:-50,-50,-31,-19;"
                              data-frame_1="e:Linear.easeNone;st:1030;sp:400;sR:1030;"
                              data-frame_999="o:0;st:w;sR:7570;"
                              > 
                          </rs-layer>
                          <rs-layer
                              id="slider-1-slide-1-layer-6"
                              className="ttm-bgcolor-white" 
                              data-type="shape"
                              data-rsp_ch="on"
                              data-xy="x:c;xo:441px,441px,276px,170px;yo:304px,304px,190px,117px;"
                              data-text="w:normal;s:20,20,12,7;l:0,0,15,9;"
                              data-dim="w:44px,44px,27px,16px;h:3px,3px,1px,1px;"
                              data-vbility="t,t,f,f"
                              data-frame_0="x:50,50,31,19;"
                              data-frame_1="e:Linear.easeNone;st:1570;sp:400;sR:1570;"
                              data-frame_999="o:0;st:w;sR:7030;"
                              > 
                          </rs-layer>
                      </rs-slide>
                      
                      <rs-slide data-key="rs-2" data-title="Slide" data-thumb="images/slides/slider-mainbg-002.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:zoomout;sl:d;">
                        <img src="images/slides/slider-mainbg-002.jpg" title="sliderbg-02" width="1920" height="705" className="rev-slidebg" data-no-retina/>
                        <rs-layer
                            id="slider-1-slide-2-layer-1"
                            className="head-font" 
                            data-type="text"
                            data-rsp_ch="on"
                            data-xy="x:c;yo:263px,263px,159px,139px;"
                            data-text="w:normal;s:75,75,55,35;l:85,85,60,45;fw:600;"
                            data-frame_0="o:1;"
                            data-frame_0_chars="o:0;rX:-90deg;oZ:-50;"
                            data-frame_1="sp:900;"
                            data-frame_1_chars="e:Power4.easeInOut;d:10;oZ:-50;"
                            data-frame_999="o:0;st:w;sR:6600;"
                            >SAVE AFRICA
                        </rs-layer>
                        <rs-layer
                            id="slider-1-slide-2-layer-2"
                            className="ttm-bgcolor-skincolor" 
                            data-type="text"
                            data-rsp_ch="on"
                            data-xy="x:c;yo:205px,205px,122px,106px;"
                            data-text="w:normal;s:30,30,20,17;l:30,30,18,17;fw:300;"
                            data-padding="t:7,7,5,3;r:25,25,16,10;b:7,7,5,3;l:25,25,16,10;"
                            data-frame_0="o:1;"
                            data-frame_0_chars="o:0;rX:-90deg;oZ:-50;"
                            data-frame_1="st:40;sp:700;sR:40;"
                            data-frame_1_chars="e:Power4.easeInOut;d:10;oZ:-50;"
                            data-frame_999="o:0;st:w;sR:7060;"
                            >Welcome to Bypork
                        </rs-layer>
                        <rs-layer
                            id="slider-1-slide-2-layer-3" 
                            data-type="text"
                            data-color="#bababa"
                            data-rsp_ch="on"
                            data-xy="x:c;xo:0,0,0,-500px;yo:359px,359px,223px,112px;"
                            data-text="w:normal;s:17,17,14,11;l:24,24,19,15;a:center;"
                            data-dim="w:565px,565px,388px,239px;"
                            data-vbility="t,t,t,f"
                            data-frame_0="y:100%;"
                            data-frame_1="e:Linear.easeNone;st:1160;sp:500;sR:1160;"
                            data-frame_999="o:0;st:w;sR:7340;"
                            >Make Enough Money with our Investment Plans and Donate to Charity at Free Will. 
                        </rs-layer>
                        <a
                            id="slider-1-slide-2-layer-4" 
                            className="rs-layer ttm-btn-bgcolor-skincolor ttm-btn ttm-btn-size-md"
                            href="#" target="_self" rel="nofollow"
                            data-type="text"
                            data-rsp_ch="on"
                            data-xy="x:c;yo:453px,453px,292px,205px;"
                            data-text="w:normal;s:15,15,12,12;l:15,15,12,12;fw:600;"
                            data-padding="t:16,16,12,12;r:35,35,25,25;b:16,16,12,12;l:35,35,25,25;"
                            data-frame_0="y:100%;"
                            data-frame_1="e:Linear.easeNone;st:970;sp:500;sR:970;"
                            data-frame_999="o:0;st:w;sR:7530;"
                            data-frame_hover="bgc:#232323;boc:#232323;bos:solid;bow:1px,1px,1px,1px;sp:300ms;" 
                            >INVEST NOW
                        </a>
                        <rs-layer
                            id="slider-1-slide-2-layer-5"
                            className="ttm-bgcolor-white" 
                            data-type="shape"
                            data-rsp_ch="on"
                            data-xy="x:c;xo:-449px,-449px,-281px,-173px;yo:304px,304px,190px,117px;"
                            data-text="w:normal;s:20,20,12,7;l:0,0,15,9;"
                            data-dim="w:44px,44px,27px,16px;h:3px,3px,1px,1px;"
                            data-vbility="t,t,f,f"
                            data-frame_0="x:-50,-50,-31,-19;"
                            data-frame_1="e:Linear.easeNone;st:1030;sp:400;sR:1030;"
                            data-frame_999="o:0;st:w;sR:7570;"
                            > 
                        </rs-layer>
                        <rs-layer
                            id="slider-1-slide-2-layer-6"
                            className="ttm-bgcolor-white" 
                            data-type="shape"
                            data-rsp_ch="on"
                            data-xy="x:c;xo:451px,451px,282px,173px;yo:304px,304px,190px,117px;"
                            data-text="w:normal;s:20,20,12,7;l:0,0,15,9;"
                            data-dim="w:44px,44px,27px,16px;h:3px,3px,1px,1px;"
                            data-vbility="t,t,f,f"
                            data-frame_0="x:50,50,31,19;"
                            data-frame_1="e:Linear.easeNone;st:1570;sp:400;sR:1570;"
                            data-frame_999="o:0;st:w;sR:7030;"
                            > 
                        </rs-layer>
                    </rs-slide>
                </rs-slides>
            </rs-module>
        </rs-module-wrap>
        
        <section className="ttm-row first-about-section bg-img1 clearfix">
          <div className="container">
              <div className="row">
                  <div className="col-lg-5">
                      <div className="ttm_single_image-wrapper mr_95 res-991-mr-0 position-relative z-1 res-991-center">
                          <img className="img-fluid" src="images/single-img-one.png" title="single-img-one" alt="single-img-one"/>
                      </div>
                      <div className="ttm-play-icon-btn ttm-play-icon-btn-center style1">
                          {/* <a href="https:
                              <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md">
                                  <i className="flaticon flaticon-play-button-1"></i>
                              </div>
                          </a> */}
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="spacing-1 ttm-bgcolor-white bordertop-12px-solid skincolor-border">
                          <div className="section-title clearfix">
                              <div className="title-header">
                                  <h5>About Our Investment Plan</h5>
                                  <h2 className="title">We Provide Good Attractive Investment Plans </h2>
                              </div>
                              <div className="heading-seperator">
                                  <span></span>
                              </div>
                          </div>
                          <p>Eco-friendly products are, the products that do not harm the environ- ment. whether in their equipment production.</p>
                          <p>If anything’s hot in today’s economy, it’s saving money, including a broad range of green businesses helping people save environment.</p>
                          <div className="row no-gutters">
                              <div className="col-md-6 col-lg-6 col-sm-6">
                                  <div className="featured-icon-box style1 left-icon icon-align-top">
                                      <div className="featured-icon"> 
                                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                              <i className="flaticon flaticon-mill"></i> 
                                          </div>
                                      </div>
                                      <div className="featured-content">
                                          <div className="featured-title">
                                              <h5>20% Investment Plan</h5>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-6 col-sm-6">
                                  <div className="featured-icon-box style1 left-icon icon-align-top">
                                      <div className="featured-icon">
                                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                              <i className="flaticon flaticon-agriculture"></i> 
                                          </div>
                                      </div>
                                      <div className="featured-content">
                                          <div className="featured-title">
                                              <h5>25% Investment Plan</h5>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-6 col-sm-6">
                                  <div className="featured-icon-box style1 left-icon icon-align-top">
                                      <div className="featured-icon">
                                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                              <i className="flaticon flaticon-agronomy"></i>
                                          </div>
                                      </div>
                                      <div className="featured-content">
                                          <div className="featured-title">
                                              <h5>30% Investment Plan</h5>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-6 col-sm-6">
                                  <div className="featured-icon-box style1 left-icon icon-align-top">
                                      <div className="featured-icon">
                                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                              <i className="flaticon flaticon-field-1"></i>
                                          </div>
                                      </div>
                                      <div className="featured-content">
                                          <div className="featured-title">
                                              <h5>50% Investment Plan</h5>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row mt-30">
                              <div className="col-md-4 col-lg-4 col-sm-4">
                                
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>

        <section className="ttm-row zero-padding-section mt_85 res-991-mt-0 clearfix">
            <div className="container">
                <div className="row ttm-bgcolor-skincolor featured-icon-box-style2-row m-0">
                    <div className="col-lg-4">
                        <div className="featured-icon-box left-icon style2 ttm-bgcolor-white">
                            <div className="featured-icon">
                                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-clock"></i>
                                </div>
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <h5>Execellent Investment Timeline</h5>
                                </div>
                                <div className="featured-desc">
                                    <p>All about Investment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="featured-icon-box left-icon style2 ttm-bgcolor-white res-991-mt-20">
                            <div className="featured-icon"> 
                                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-farmer"></i> 
                                </div>
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <h5>Experianced Workers</h5>
                                </div>
                                <div className="featured-desc">
                                    <p>All about Pig Farming.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="featured-icon-box left-icon style2 ttm-bgcolor-white res-991-mt-20">
                            <div className="featured-icon">
                                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                    <i className="ti ti-cup"></i>
                                </div>
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <h5>Return On Investment</h5>
                                </div>
                                <div className="featured-desc">
                                    <p>Good return on Investment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

        <section className="ttm-row first-row-title-section bg-img2 clearfix">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                      <div className="text-center">
                          <div className="featured-icon">
                              <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg mb-0">
                                  <i className="flaticon flaticon-farmer fs-60"></i> 
                              </div>
                          </div>
                          
                          <div className="section-title row-title clearfix">
                              <div className="title-header">
                                  <h5 className="mb-10">ABOUT BYPORK</h5>
                                  <h2 className="title fw-700 mb-5">BYPORK Is Providing The Best </h2>
                                  <h2 className="title font-weight-normal"> Solution For Pig Farming </h2>
                              </div>
                          </div>

                          <Link to="/about" className="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-darkgrey mt-20 mr-10"> About Bypork</Link>
                          <Link to="/services/pig-farming" className="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-skincolor mt-20"> Our Services</Link>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <section className="ttm-row zero-padding-section position-relative z-1 clearfix">
          <div className="container">
              <div className="row no-gutters">
                  <div className="col-lg-6">
                      <div className="col-bg-img-one ttm-col-bgimage-yes ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-darkgrey ttm-left-span">
                          <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                              <div className="ttm-bg-layer-inner"></div>
                          </div>
                          <div className="layer-content">
                              <div className="spacing-2 ">
                                  <div className="section-title clearfix">
                                      <div className="title-header">
                                          <h5>Why Choose Us?</h5>
                                          <h2 className="title">Our Investment Plans Are Detailed And Affordable for anyone.</h2>
                                      </div>
                                      <div className="heading-seperator">
                                          <span></span>
                                      </div>
                                  </div>
                                  <p></p>
                                  <div className="mt-40">
                                      <div className="ttm-progress-bar" data-percent="90%">
                                          <div className="progress-bar-title">Feasible Polices</div>
                                          <div className="progress-bar-inner">
                                              <div className="progress-bar progress-bar-color-bar_skincolor"></div>
                                          </div>
                                          <div className="progress-bar-percent" data-percent="90">90%</div>
                                      </div>
                                      <div className="ttm-progress-bar" data-percent="80%">
                                          <div className="progress-bar-title">Access to Detailed Customer Support</div>
                                          <div className="progress-bar-inner">
                                              <div className="progress-bar progress-bar-color-bar_skincolor"></div>
                                          </div>
                                          <div className="progress-bar-percent" data-percent="80">80%</div>
                                      </div>

                                      <div className="ttm-progress-bar" data-percent="90%">
                                          <div className="progress-bar-title">Good growth per Investment Ratio.</div>
                                          <div className="progress-bar-inner">
                                              <div className="progress-bar progress-bar-color-bar_skincolor"></div>
                                          </div>
                                          <div className="progress-bar-percent" data-percent="90">90%</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 mt_40 mb_40 res-991-m-0">
                    <div className="col-bg-img-two ttm-col-bgimage-yes ttm-bg ttm-right-span border40-img skincolor-border res-991-d-none">
                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                        </div>
                        <div className="layer-content"></div>
                    </div>
                    <img src="images/bg-image/col-bgimage-2.jpg" className="ttm-equal-height-image" alt="bg-image"/>
                  </div>
              </div>
            </div>
        </section>

        <section className="ttm-row first-services-section ttm-bgcolor-grey clearfix">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4">
                      <div className="res-991-mb-30">
                          <div className="section-title clearfix">
                              <div className="title-header">
                                  <h5>WHY CHOOSE OUR PIG FARMING?</h5>
                                  <h2 className="title">A BRIEF RUNDOWN</h2>
                              </div>
                              <div className="heading-seperator">
                                  <span></span>
                              </div>
                          </div>
                          <p>Pigs are prolific livestock, Because of their reproduction ratio and strong immune system. They reproduce in numbers of 8's - 15's per year.</p>
                          <div className="mt-25">
                              <ul className="ttm-list ttm-list-style-icon">
                                  <li><i className="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">Their growth ratio is stunning they grow faster and produce more protein than their peers</span></li>
                                  <li><i className="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">They body mass ratio after buchering is at a whooping 70 - 80 percent</span></li>
                                  <li><i className="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">The pork Industry in West Africa is Valued at $3 Billion, yet around 80 % of that value is imported. That's $2.4 Billion in Market Share handing.</span></li>
                              </ul>
                          </div>
                        
                      </div>
                  </div>
                  <div className="col-lg-8">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="featured-icon-box left-icon icon-align-top style3 ttm-bgcolor-white">
                                  <div className="featured-icon">
                                      <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                          <i className="flaticon flaticon-agriculture"></i>
                                      </div>
                                  </div>
                                  <div className="featured-content">
                                      <div className="featured-title">
                                          <h5 className="mb-5">OUR INVESTMENT</h5>
                                      </div>
                                      <div className="featured-desc">
                                          <p>Here at Bypork our investment plan has been tailored to...</p>
                                      </div>
                                      <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i className="fa fa-chevron-right"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="featured-icon-box left-icon icon-align-top style3 ttm-bgcolor-white">
                                  <div className="featured-icon">
                                      <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                          <i className="flaticon flaticon-plant"></i>
                                      </div>
                                  </div>
                                  <div className="featured-content">
                                      <div className="featured-title">
                                          <h5 className="mb-5">INVESTMENT GROWTH</h5>
                                      </div>
                                      <div className="featured-desc">
                                          <p>We have shown a good track record in investment growth...</p>
                                      </div>
                                      <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i className="fa fa-chevron-right"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="featured-icon-box left-icon icon-align-top style3 ttm-bgcolor-white">
                                  <div className="featured-icon"> 
                                      <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                          <i className="flaticon flaticon-sprinkler"></i>
                                      </div>
                                  </div>
                                  <div className="featured-content">
                                      <div className="featured-title">
                                          <h5 className="mb-5">PIG FARMING</h5>
                                      </div>
                                      <div className="featured-desc">
                                          <p>Farming pigs is not just a business but a passion driven by...</p>
                                      </div>
                                      <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i className="fa fa-chevron-right"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="featured-icon-box left-icon icon-align-top style3 ttm-bgcolor-white">
                                  <div className="featured-icon"> 
                                      <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                          <i className="flaticon flaticon-plant-1"></i> 
                                      </div>
                                  </div>
                                  <div className="featured-content">
                                      <div className="featured-title">
                                          <h5 className="mb-5">GIVING TO CHARITY</h5>
                                      </div>
                                      <div className="featured-desc">
                                          <p>Society is the bed rock of our organisation, giving back 10% of...</p>
                                      </div>
                                      <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i className="fa fa-chevron-right"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="ttm-row first-testimonial-section ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img3 clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="col-bg-img-three ttm-bg z-2">
                          <div className="slick_slider testimonil-slide spacing-3" data-slick={testimonialSlick}>
                              
                              <div className="testimonials text-center"> 
                                  <div className="testimonial-content">
                                      <div className="testimonial-avatar">
                                          <div className="testimonial-img">
                                              <img className="img-center" src="images/testimonial/01.jpg" alt="testimonial-img"/>
                                          </div>
                                      </div>
                                      <div className="ttm-ratting-star">
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                      </div>
                                      <div className="testimonial-caption">
                                          <h6>Mr. Donald</h6>
                                          <label>Trader</label>
                                      </div>
                                      <blockquote>Service is definitely a bridge between the sophisticated computer dosing systems and areas where fustigation may be very basic up to intensive. It definitely makes fustigation more fun since some farmers.</blockquote>
                                  </div>
                              </div>
                              
                              {/* <div className="testimonials text-center"> 
                                  <div className="testimonial-content">
                                      <div className="testimonial-avatar">
                                          <div className="testimonial-img">
                                              <img className="img-center" src="images/testimonial/02.jpg" alt="testimonial-img"/>
                                          </div>
                                      </div>
                                      <div className="ttm-ratting-star">
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                      </div>
                                      <div className="testimonial-caption">
                                          <h6>Mrs. Igbokwe</h6>
                                          <label>Banker</label>
                                      </div>
                                      <blockquote>Service is definitely a bridge between the sophisticated computer dosing systems and areas where fustigation may be very basic up to intensive. It definitely makes fustigation more fun since some farmers.</blockquote>
                                  </div>
                              </div>
                              
                              <div className="testimonials text-center"> 
                                  <div className="testimonial-content">
                                      <div className="testimonial-avatar">
                                          <div className="testimonial-img">
                                              <img className="img-center" src="images/testimonial/03.jpg" alt ="testimonial-img"/>
                                          </div>
                                      </div>
                                      <div className="ttm-ratting-star">
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                      </div>
                                      <div className="testimonial-caption">
                                          <h6>Pricilia</h6>
                                          <label>Student</label>
                                      </div>
                                      <blockquote>Service is definitely a bridge between the sophisticated computer dosing systems and areas where fustigation may be very basic up to intensive. It definitely makes fustigation more fun since some farmers.</blockquote>
                                  </div>
                              </div> */}
                              
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="spacing-4">
                          
                          <div className="section-title clearfix">
                              <div className="title-header">
                                  <h5>WHAT WE OFFER</h5>
                                  <h2 className="title">What We Archived</h2>
                              </div>
                              <div className="heading-seperator">
                                  <span></span>
                              </div>
                          </div>
                          <p>Eco-friendly products are, the products that do not harm the whether. environment in their production,</p>
                          <div className="mt-25">
                              <ul className="ttm-list ttm-list-style-icon">
                                  <li><i className="fa fa-check-circle-o ttm-textcolor-white"></i><span className="ttm-list-li-content">We Built this online platform for people to securely farm pigs.</span></li>
                                  <li><i className="fa fa-check-circle-o ttm-textcolor-white"></i><span className="ttm-list-li-content">We Farm , Buy, Feed, Nuture, Insure and Sell Mature Pigs.</span></li>
                                  <li><i className="fa fa-check-circle-o ttm-textcolor-white"></i><span className="ttm-list-li-content">We Pay back investors Money plus high interest rates</span></li>
                                  <li><i className="fa fa-check-circle-o ttm-textcolor-white"></i><span className="ttm-list-li-content">We Gift 10% of our every investment in form of pork to the less / under privledged in our community</span></li>
                              </ul>
                          </div>
                          <Link to="/about" className="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-white mt-25"> About Bypork</Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* <div className="ttm-row zero-padding-section clearfix">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      
                      <div className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-skincolor ttm-right-span">
                          <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                              <div className="ttm-bg-layer-inner"></div>
                          </div>
                          <div className="layer-content">
                              
                              <div className="row slick_slider no-gutters">
                                  <div className="col-md-2">
                                      <div className="client-box ttm-box-view-boxed-logo">
                                          <div className="client">
                                              <div>
                                                  <img className="img-fluid" src="images/client/client-01.png" alt="image"/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-2">
                                      <div className="client-box ttm-box-view-boxed-logo">
                                          <div className="client">
                                              <div>
                                                  <img className="img-fluid" src="images/client/client-02.png" alt="image"/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-2">
                                      <div className="client-box ttm-box-view-boxed-logo">
                                          <div className="client">
                                              <div>
                                                  <img className="img-fluid" src="images/client/client-03.png" alt="image"/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-2">
                                      <div className="client-box ttm-box-view-boxed-logo">
                                          <div className="client">
                                              <div>
                                                  <img className="img-fluid" src="images/client/client-04.png" alt="image"/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-2">
                                      <div className="client-box ttm-box-view-boxed-logo">
                                          <div className="client">
                                              <div>
                                                  <img className="img-fluid" src="images/client/client-05.png" alt="image"/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-2">
                                      <div className="client-box ttm-box-view-boxed-logo">
                                          <div className="client">
                                              <div>
                                                  <img className="img-fluid" src="images/client/client-04.png" alt="image"/>
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
      </div> */}                      
        <div style={{clear:'both'}}></div>
        <br/><br/><br/>
        <Footer/>

        <a id="totop" href="#top">
          <i class="fa fa-angle-up"></i>
        </a>
      </div>
    );
}
