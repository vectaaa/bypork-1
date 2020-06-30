import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import 'react-accessible-accordion/dist/fancy-example.css';
import { serverEndPoint, webTitle } from '../../utils/Helpers';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Faq() {
    
    useEffect( () => {
        document.title = webTitle+" Frequently Asked Questions";
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
                                    <h1 class="title">Frequently Asked Questions</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                     
            </div>

            <div class="site-main">

            <section class="ttm-row faqpage-section clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center clearfix">
                                <div class="title-header mb-50">
                                    <h5>WHAT WE OFFER</h5>
                                    <h2 class="title">Do you have any Questions?</h2>
                                </div>
                                <div class="heading-seperator">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-lg-6">
                            
                            <div class="ttm_single_image-wrapper">
                                <img class="img-fluid" src="images/single-img-eight.jpg" title="single-img-eight" alt="single-img-eight"/>
                            </div>
                            <div class="ttm-play-icon-btn ttm-play-icon-btn-center">
                                <div class="ttm-play-icon-animation">
                                    <a href="https://youtu.be/7e90gBu4pas" target="_self" class="ttm_prettyphoto">
                                        <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-md ttm-icon_element-style-round">
                                            <i class="ti ti-control-play"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <Accordion allowZeroExpanded="true">
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is Bypork all about?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='accordionText'>
                                            Eco-friendly products are, the products that do not harm the environ- ment. whether in their equipment production.

                                            If anything’s hot in today’s economy, it’s saving money, including a broad range of green businesses helping people save environment.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is Bypork all about?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='accordionText'>
                                            Eco-friendly products are, the products that do not harm the environ- ment. whether in their equipment production.

                                            If anything’s hot in today’s economy, it’s saving money, including a broad range of green businesses helping people save environment.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is Bypork all about?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='accordionText'>
                                            Eco-friendly products are, the products that do not harm the environ- ment. whether in their equipment production.

                                            If anything’s hot in today’s economy, it’s saving money, including a broad range of green businesses helping people save environment.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>                            
                            </div>
                        </div>
                    </div>
                </section>
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
