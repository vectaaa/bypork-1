import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
import 'react-accessible-accordion/dist/fancy-example.css';
 
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function CharityScheme() {
    
    useEffect( () => {
        document.title = webTitle+" Charity Scheme";
    });
    
    return (

        <div>

            <div class="main-container">

                <Header/> 
                
                <section class="title-transparent product-title" style={{backgroundImage: `url(${window.location.origin + ('/assets/img/title-bg.jpg')})`}} >
                    <div class="container">
                        <div class="title-content">
                            <h1>Bineza Privacy Policy</h1>
                        </div>
                    </div>
                </section>
                <div class="clearfix"></div>

                <br/>
            
                <div className="container accordionText">
                    This Privacy Policy describes how your personal information is collected, used, and shared when you visit, register as a vendor, or make a purchase from www.bineza.com.
                    <br/><br/>
                    <h4> PERSONAL INFORMATION WE COLLECT </h4>
                    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
                    <br/><br/> We collect Device Information using the following technologies: <br/><p></p>
                    <ul>
                        <li> "Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org</li>
                        <li> "Log files" track actions occurring on the Site, and collect data such as your date/time stamps. </li>
                        <li> "Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site. </li>
                    </ul>
                    
                    We also collect data you give us voluntarily (for example, an email address). You may be asked to provide us information about yourself when you register for and/or use the Service. This information includes: first name, phone number, email (together "Required Information"), last name, photo, address details. <br/><br/>
                    To use our Service and register an account, you will need to provide Required Information. <br/>
                    You will be able to use the Service even if you do not give this data to us, but some Service’s functionality may be limited to you (for example, if you do not register an account, you will not be able to post ads, post a review). <br/> Sometimes you may also need to provide to us additional information in the comm itunication with our Support Team in order to fulfill your request (for example, if your account was previously blocked, we may ask you to confirm your identity by providing an ID document).<br/><br/>
                    By providing information about yourself within the registration process, you agree and understand that this data will be publicly available (including, for example, phone number). <br/>
                    Please do not provide personal data to your profile that you would not want to be publicly available. Users are responsible for all the information posted by them in public accounts. <br/>
                    You should carefully consider all the risks associated with the fact that you make certain information – in particular, phone number, the address, or information about the place of your exact location – publicly available.<br/>
                    When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Order Information. <br/><br/>

                    <h4> HOW DO WE USE YOUR PERSONAL INFORMATION? </h4>
                    We use the Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information and providing you with invoices and/or order confirmations).  <br/>
                    Additionally, we use this Information to: <br/><br/>
                    <ul>
                        <li> Provide our services to you seamlessly. </li>
                        <li> Communicate with you. </li>
                        <li> Customize your unique customer experience. </li>
                        <li> Screen our orders for potential risk or fraud. </li>
                        <li> Manage your account and provide you with customer support. </li> 
                        <li> When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services. </li>
                        <li> Research, study and analyze the customer’s use of our service. </li>
                    </ul>
                    
                    We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                    <br/><br/> 

                    <h4> SHARING YOUR PERSONAL INFORMATION </h4>
                    We share your Personal Information with third parties to help us use your Personal Information, as described above. <br/><br/>
                    For example, we use Google Analytics to help us understand how our customers use the website. <br/>
                    You can read more about how Google uses your Personal Information <a href='https://www.google.com/intl/en/policies/privacy/' target='_blank' className='text-primary'><b>here</b></a><br/>
                    You can also opt-out of Google Analytics <a href='https://tools.google.com/dlpage/gaoptout' className='text-primary'><b>here</b></a> . <br/><br/>
                    We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.<br/><br/>
                    In the event of a merger or acquisition, we may buy or sell asset or business offerings. Customers’ information is generally one of the transferred business assets in these types of transactions. <br/><br/>
                    We may also share such information with any affiliated entity (e.g. parent company or subsidiary) and may transfer such information in the course of a corporate transaction, such as the sale of our business, a divestiture, merger, consolidation, or asset sale, or in the unlikely event of bankruptcy. <br/><br/>
                    
                    <h4> How do we protect your data? </h4>
                    We work to make sure that that we follow the principles of data protection. We make sure that: <br/><br/>
                    <ul>
                        <li> Your personal data is used adequately, accurately and without prejudice to the dignity of a human person.</li>
                        <li> The data collected is processed in accordance with specific legitimate and lawful purposes consented by you. </li>
                        <li> Your data is stored only for the time in which it is reasonably needed. </li>
                        <li> The gathered data is secured against reasonably foreseeable hazards and breaches such as theft, cyberattack, viral attack, dissemination, manipulations of any kind, damage by rain, fire or exposure to other natural elements. </li>
                    </ul>
                    <br/><br/>

                    <h4> BEHAVIOURAL ADVERTISING </h4>
                    As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.  For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work. <br/>
                    You can opt out of targeted advertising by: <br/>
                    <ul>
                        <li> FACEBOOK - <a href='https://www.facebook.com/settings/?tab=ads' target='_blank' className='text-primary'><b>https://www.facebook.com/settings/?tab=ads</b></a> </li>
                        <li> GOOGLE - <a href='https://www.google.com/settings/ads/anonymous' target='_blank' className='text-primary'><b>https://www.google.com/settings/ads/anonymous</b></a> </li> 
                        <li> BING - <a href='https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads' target='_blank' className='text-primary'><b>https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</b></a> </li>
                    </ul>
                    
                    <br/>
                    Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at:  <a href='http://optout.aboutads.info/'  target='_blank' className='text-primary'><b>http://optout.aboutads.info</b></a><br/><br/>

                    <h4> DO NOT TRACK </h4>
                    Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser. <br/><br/>
                    
                    <h4> YOUR RIGHTS </h4>
                    As a user, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below. <br/> <br/>
                    Additionally, if you are a Nigerian resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.  
                    <br/>Additionally, please note that your information maybe be transferred outside of Nigeria. <br/><br/>
                    
                    <h4> DATA RETENTION </h4>
                    When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.<br/><br/>
                    
                    <h4> MINORS </h4>
                    The Site is not intended for individuals under the age of 16. <br/><br/> 
                    
                    <h4> CHANGES </h4>
                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. <br/><br/>

                    <h4> CONTACT INFORMATION </h4>
                    For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@bineza.com  or Message us through the website. 
                </div>
            </div>

            <div style={{clear: 'both'}}></div>
            <br/><br/>    
            
            <Footer/>

            <a href="#" class="scroll-up"><span class="ti-arrow-up"></span></a>

        </div>
    );
}
