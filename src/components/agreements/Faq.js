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

export default function Faq() {
    
    useEffect( () => {
        document.title = webTitle+" Frequently Asked Questions";
    });
    
    return (

        <div  className="page-wrapper">

            <div>

                <Header/> 
                <div className="clearfix"></div>
			
                <section class="title-transparent product-title" style={{backgroundImage: `url(${window.location.origin + ('/assets/img/title-bg.jpg')})`}} >
                    <div class="container">
                        <div class="title-content">
                            <h1>Frequently Asked Questions on Bineza</h1>
                        </div>
                    </div>
                </section>
                <div class="clearfix"></div>

                <br/><br/>
            
            <div className="col-md-12 col-sm-12 col-xs-12">

                <h4 align="center"> For New Users </h4> <br/>
                <div className="col-md-6 col-sm-6 col-xs-12 container">
                    <Accordion allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What is Bineza all about?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    Bineza is a marketplace that has the aim of connecting students (buyers and sellers) in different higher institutions in Nigeria, i.e universities, colleges of education and polytechnics to a common goal of buying and selling goods and services. Bineza is an online platform that acts as a middleman between product or service sellers and customers.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Does Bineza have any store?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    No, Bineza does not have any physical store. 
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Does Bineza deliver goods to buyers?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    No, Bineza is not responsible for the delivery of goods or service to buyers. Bineza only acts as a middleman and is not responsible for delivering goods or services to buyers.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How can I become a seller on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    To become a seller, you need to register as one with the following simple steps:
                                    <ul>
                                       <li> Visit the website www.bineza.com. </li>
                                       <li> Tap on the "4 horizontal lines" at the top left corner of the site, a drop down menu bar will appear. </li>
                                       <li> Tap on "Sign Up". </li>
                                       <li> Now fill in the form. Select the option "as a seller" in the "Register As" field. </li>
                                       <li> Ensure you fill all the fields correctly,  tap on "REGISTER NOW" and there, you're now a seller on Bineza. Welcome on-board. </li>
                                    </ul>
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How can I become a customer on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    Anybody can be a customer on Bineza, you don't necessarily need to register as a customer, but you'll be required to register as a customer so you can post reviews on any product or service of your choice. You can register as a customer with the following simple steps:
                                    <ul>
                                       <li> Visit the website www.bineza.com. </li>
                                       <li> Tap on the "4 horizontal lines" at the top left corner of the site, a drop down menu bar will appear. </li>
                                       <li> Tap on "Sign Up". </li>
                                       <li> Now fill in the form. Select the option "as a customer" in the "Register As" field. </li>
                                       <li> Ensure you fill all the fields correctly,  tap on "REGISTER NOW" and there, you're now a customer on Bineza. Welcome on-board. </li>
                                    </ul>
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How can I post an ad on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    To post an ad on Bineza, you need to be registered as a seller.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can I become a seller and also a customer on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    Yes, you can.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How can I become a seller and also a customer on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    By registering as any, you can use the same details to register as both.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion> 
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12  container">
                    <Accordion allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can I have more than one account on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    No, you can't. You can only have a single account each, either as a customer or as a seller.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What does the "see more" button on Bineza categories mean?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                The "see more" button enables users to access more options for the goods and services listing.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What does the "Latest ads" mean?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                These are the most recent ads uploaded by sellers on Bineza.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What does the "see more" button on Bineza categories mean?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                The "see more" button enables users to access more options for the goods and services listing.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What does "Related Ads" mean?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                They are ads related to the ad you're currently viewing.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What does the "top sellers of the month" mean on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                These are the sellers with the highest cumulative ratings of the month.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I be listed amongst the top sellers of the month?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                All you need to do is satisfy your customers and have them reflect their satisfaction on the reviews section of your products.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How do I receive updates from Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Updates will be sent to you through your email.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div style={{clear: 'both'}}></div>
                <br/>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <Accordion allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I contact Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    You can contact Bineza through the following:
                                    <ul>
                                        <li>Email: info@bineza.com</li>
                                        <li> Phone: +2348131394079</li>
                                        <li> Facebook: @binezanigeria </li>
                                        <li> Instagram: @binezanigeria </li>
                                        <li> Twitter: @binezanigeria </li>
                                    </ul>
                                    You can also send us a message by accessing the "Contact Us" page from the menu bar. 
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <div style={{clear: 'both'}}></div>
            <br/><br/><br/>

            <div className="col-md-12 col-sm-12 col-xs-12">

                <h4 align="center"> For Sellers </h4> <br/>
                <div className="col-md-6 col-sm-6 col-xs-12 container">
                    <Accordion allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I view my profile on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account, tap the menu button on the top left corner of the site and tap "Settings", now tap the "My Profile" button.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I edit my profile on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account, tap the menu button on the top left corner of the site and tap "Settings", now tap the "Edit Profile" button, edit your profile and save the changes.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I post an ad on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your seller's account and tap on "My Ads" on the menu. Now tap on the "ADD NEW ADS" button, fill in all the required fields and tap the "Add" button, you'll be required to add a picture to the ad, after doing that, tap the "Upload" button and your ad goes live.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What is the limit to the amount of pictures I can post for an ad?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                The limit is 5.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What is the limit to the amount of ads I can post on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                There is currently no limit to the amount of ads you can post on Bineza.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                What happens after I post an ad on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Your ad goes live and is listed amongst all other ads.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I post effective ads on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                To post effective ads on Bineza, you need to follow the following instructions:
                                <ul>
                                    <li> Ensure your contact details are correct and up to date so your customers can easily reach you. </li>
                                    <li> Ensure you post relevant and appropriate pictures. </li>
                                    <li> Ensure you post clear and high quality pictures. </li>
                                    <li> Ensure you have a complete profile so as to look more professional. </li>
                                    <li> Ensure you post your ads in the correct categories, so they can be seen by the right customers. </li>
                                    <li> Ensure you have clear and detailed description of your goods and services. </li>
                                    <li> Avoid over pricing. Check out the market value for the products and services you're offering and price them accordingly. </li>
                                    <li> Ensure you reply every enquiry on your products and services and reply quickly so you don't lose a potential customer. </li>
                                    <li> Always ask your satisfied customers to leave a review on the product or service you offered them. </li>
                                </ul>
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                I can't see my ad. Why?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                This is because your ad has been deleted. Ensure your ads are appropriate.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are the rules of posting ads on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                While there are currently no rules of posting, Bineza reserves the right to delete an ad if it is found inappropriate.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion> 
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12 container">
                    <Accordion allowZeroExpanded="true">
                    <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How long does my ad remain on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Currently for as long as until it is sold.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I edit my ad on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account and tap the "My Ads" button on the menu. Go to the product or service you wish to edit and tap the "Edit" button. Edit the product or service and save the changes.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I delete an ad on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account and tap the "My Ads" button on the menu. Go to the product or service you wish to delete and tap the "Delete" button, then press "Ok".
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I be listed amongst the top sellers of the month on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                By simply satisfying your customers and also getting those customers to give you good ratings and reviews.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I view my ads on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account and tap the "My Ads" button on the menu bar.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I delete or add a new picture for my ad on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account and tap on "My Ads". Select the ad you want to add a picture to or delete a picture from. To add a new picture, tap on "ADD NEW PICTURES", then choose the picture you wish to add and tap "Upload". Please note, you can only have a maximum of 5 pictures for a single ad. To delete a picture, tap on "Delete" underneath the picture you want to delete and tap "Ok".
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I change my password on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account and tap the menu bar. Now tap on "Settings" and tap the "Change Password" button, fill in all the required fields and save the changes.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                I forgot my password. How can I retrieve my account?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                While in the login area, tap the "Forgot Password" button. Select the "As a Seller" option and enter your email address, ensure your email address is correct. You'll receive a password reset email, enter a different password and save the changes. 
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                I can't find my higher institution on Bineza. Why is that?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    If you don't find your higher institution on Bineza, contact us to make the update. We sincerely apologise.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            
                <div style={{clear: 'both'}}></div>
                <br/><br/>    
            
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <Accordion allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I be safe as a seller on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    While Bineza does not guarantee safety, we would advice you to double check the payments by customers. Try getting your Bank app instead of receiving just alerts via SMS. Also initiate a cash payment with your customers. Also, you are adviced to meet up with your customers in safe and secure areas to avoid unpleasant situations.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <div style={{clear: 'both'}}></div>
            <br/><br/>    
            
            <div className="col-md-12 col-sm-12 col-xs-12">

                <h4 align="center"> For Customers </h4> <br/>
                <div className="col-md-6 col-sm-6 col-xs-12 container">
                    <Accordion allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I post a review on a product on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account, tap on the product you wish to review, now scroll to the bottom of the page and fill in the "Rate Ads" fields and tap "SUBMIT" when you're done. Please note, you can only post reviews when you register as a customer.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                I can't post a review on a product on Bineza. Why?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                You need to register as a customer to post reviews.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I report an illegal activity on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Send us a message through any of our contact information
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                Why can't I search for product in the search area?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                To search for products, you need to search by higher institution. That is, if you want to search for a product or service from a particular higher institution, you need to select the higher institution of your choice and type in the product or service you're searching for and tap "Search". If you want to generalize your search, then select the "All Institutions" option and type the product or service you're searching for, then tap "Search".
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I make a purchase on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                If you're interested in a product or service, simply give the seller a call or send an SMS.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can I make a purchase from a seller in another higher institution?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    Yes you can.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I view my profile on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                    Login to your account, tap the menu button on the top left corner of the site and tap "Settings", now tap the "My Profile" button.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I edit my profile on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account, tap the menu button on the top left corner of the site and tap "Settings", now tap the "Edit Profile" button, edit your profile and save the changes.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion> 
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12 container">
                    <Accordion allowZeroExpanded="true">
                    <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I contact a seller?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Sellers are required to attach their phone numbers to their ads. You can contact them through their phone numbers. Simply tap the "Call" button or "SMS" button attached to the ad.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I change my password on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Login to your account and tap the menu bar. Now tap on "Settings" and tap the "Change Password" button, fill in all the required fields and save the changes.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                I forgot my password. How can I retrieve my account?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                While in the login area, tap the "Forgot Password" button. Select the "As a Customer" option and enter your email address, ensure your email address is correct. You'll receive a password reset email, enter a different password and save the changes.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                I can't find my higher institution on Bineza. Why is that?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                If you don't find your higher institution on Bineza, contact us to make the update. We sincerely apologise.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I view a seller's profile on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                While in the product page of the seller, tap on the seller's store name. That can be found beside the seller's profile picture on the product page.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I view a seller's rating on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                Simply visit the seller's profile. A rating is a number in decimal accompanied with a star symbol.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                Are there any rules concerning posting of reviews on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                While there are no rules concerning posting of reviews on Bineza, you're advised to always post sincere reviews.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                How can I be safe as a customer on Bineza?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='accordionText'>
                                While Bineza does not guarantee safety, you advised to take the following precautionary measures: <br/>
                                <ul>
                                    <li> Avoid payment before delivery. If you must pay before delivery, ensure the seller is trustworthy. Do your background check and ask questions. </li>
                                    <li> Meet with sellers in a safe and secure locations so as to avoid unpleasant situations. </li>
                                    <li> Double check the product or service before paying for it. </li>
                                    <li> Be smart, watch out for negative signs and be observant. </li>
                                    <li> If you are paying for a service, try discussing a 50% initial deposit with your sellers, so you won't lose all your money if a transaction fails. </li> 
                                </ul>
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        
                    </Accordion>
                </div>
            
                <div style={{clear: 'both'}}></div>
                <br/><br/>    
            
            </div>

            <div style={{clear: 'both'}}></div>
            <br/>
                
            
            <Footer/>

                <a href="#" class="scroll-up"><span class="ti-arrow-up"></span></a>

            </div>
        </div>
    );
}
