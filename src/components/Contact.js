import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Header from './navs/Header';
import Footer from './navs/Footer';
import Functions from '../utils/Functions';
import { serverEndPoint, webTitle } from '../utils/Helpers';

export default function Contact() {
    
	const history = useHistory();
    
    const [values, setValues] = React.useState({
        fullname: '',
        subject: '',
        email: '',
        message: '',
    });

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setValues(values => ({...values, [name] : value}));
    }

    async function sendMessage(event) {
    
        event.preventDefault();
        const status = document.getElementById('contact-status');
        const btn = document.getElementById('contact-btn');
          
        const { email, subject, fullname, message } = values;        
        const allValues = [email, subject, fullname, message];
        const isValueEmpty = Functions.isEmpty(allValues);

        if(isValueEmpty) {
            status.innerHTML = "<p style='color:red'> Fill all fields </p>";
            return false;
        } else {
            
            Functions.disableBtn(btn);
            const data = `fullname=${fullname}&subject=${subject}&email=${email}&message=${message}`; 
            
            axios({
                method: 'post',
                url: `${serverEndPoint}contact-us`,
                data: data,
            })
            .then( async (response) => {
                Functions.enableBtn('Send Message', btn);
                
                if(response.status == "200") {
                    status.innerHTML = `<p style='color:green'>Message sent. We shall get back to you shortly</p>`;
                    document.getElementById('contact-form').reset();
                } else {
                    status.innerHTML = `<p style='color:red'>Message not sent. Try again.</p>`;
                }
            })
            .catch( (error) => {
                Functions.enableBtn('Send message', btn);
                status.innerHTML = "<p style='color:red'>Message not sent. Try again.</p>";
            });
        }     
    }

	useEffect( () => {
		document.title = webTitle+" Contact Us";
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
                                  <h1 class="title">Contact Us</h1>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>                     
          </div>

          <section class="ttm-row contact-box-section ttm-bgcolor-grey clearfix">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-4">
                          <div class="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                              <div class="featured-icon">
                                  <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                                      <i class="flaticon flaticon-phone-call"></i>
                                  </div>
                              </div>
                              <div class="featured-content">
                                  <div class="featured-title">
                                      <h5>Phone</h5>
                                  </div>
                                  <div class="featured-desc">
                                      <p><a href="tel:+2349037174880">+2349037174880</a></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4">
                          
                          <div class="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                              <div class="featured-icon"> 
                                  <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                                      <i class="flaticon flaticon-envelope"></i>
                                  </div>
                              </div>
                              <div class="featured-content">
                                  <div class="featured-title">
                                      <h5>Email Us</h5>
                                  </div>
                                  <div class="featured-desc">
                                      <p><a href="mailto:info@bypork.com">info@bypork.com</a></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                            <div class="featured-icon"> 
                                <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                                    <i class="flaticon flaticon-placeholder"></i>
                                </div>
                            </div>
                            <div class="featured-content">
                                <div class="featured-title">
                                    <h5>Address</h5>
                                </div>
                                <div class="featured-desc">
                                    <b>Imo office</b>
                                    <p>Mr. Nmezi's road off 30-30 Eziobodo-elu Owerri west Imo state, Nigeria.</p>
                                    <b>Lagos office</b>
                                      <p>Lagos Island</p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </section>
          
            <section class="ttm-row contact-form-section clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title clearfix">
                                <div class="title-header">
                                    <h2 class="title">Contact Us</h2>
                                </div>
                                <div class="heading-seperator">
                                    <span></span>
                                </div>
                            </div>
                            <p>Our Team is happy to answer your questions. Fill out the form, and we’ll be in touch as soon as possible.</p>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="spacing-6 ttm-bgcolor-grey mt-0 mb-0">
                                        <form id="contact-form" class="row ttm-quote-form clearfix" method="post" action="#">
                                            <div class="col-sm-6 col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control with-border bg-white" name="fullname" placeholder="Full Name" required="required"  onChange={onChangeHandler}/>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-6">
                                                <div class="form-group">
                                                    <input name="email" type="email" placeholder="Email Address" required="required" class="form-control with-border bg-white" onChange={onChangeHandler}/>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-12">
                                                <div class="form-group">
                                                    <input name="subject" type="text" placeholder="Subject" required="required" class="form-control with-border bg-white" onChange={onChangeHandler}/>
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-md-12">
                                                <div class="form-group">
                                                    <textarea name="message" rows="7" placeholder="Write A Message" required="required" class="form-control with-border bg-white" onChange={onChangeHandler}></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="text-left">
                                                    <button type="button" id="contact-btn" onClick={sendMessage} class="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-darkgrey w-100">
                                                        <i className="fa fa-location-arrow"></i> Send Message
                                                    </button>
                                                </div>
                                                <br/>
                                                <div id="contact-status" align="center"></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ttm-row zero-padding-section clearfix">
                          <div class="container-fluid">
                              <div class="row">
                                  <div class="col-md-12">
                                      <div class="map-wrapper">
                                          <div id="map_canvas"></div>
                                      </div>
                                  </div>
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
