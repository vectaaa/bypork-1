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

export default function TermsAndConditions() {
    
    useEffect( () => {
        document.title = webTitle+" Terms And Conditions";
    });
    
    return (

        <div>

            <div class="main-container">

                <Header/> 
                
                <section class="title-transparent product-title" style={{backgroundImage: `url(${window.location.origin + ('/assets/img/title-bg.jpg')})`}} >
                    <div class="container">
                        <div class="title-content">
                            <h1>Bineza Terms And Conditions</h1>
                        </div>
                    </div>
                </section>
                <div class="clearfix"></div>

                <br/>
            
            <div className="container accordionText">
                Bineza Enterprise operates this website. These terms and conditions ("Terms", "Agreement") are an agreement between Bineza Enterprise herein after known as "Website Operator", "us", "we" or "our" and you herein after known as "User", "you" or "your". This Agreement sets forth the general terms and conditions of your use of the bineza.com website and any of its products or services (collectively, "Website" or "Services"). <br/><br/>
                By visiting our site and/ or purchasing something from us, you engage in our “Service.” You agree to be bound by the following terms and conditions (“Terms of Service,” “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.<br/><br/>
                Kindly read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, you may not access the website or use any services.<br/><br/>
                Any new features or tools added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. <br/><br/>
                It is your responsibility to check this page periodically for changes. Your continued use of the website following the posting of any changes constitutes acceptance of those changes.
                Please know that the headings/sub-headings used in this agreement are included for convenience only and will not limit or otherwise affect these terms.
                <br/><br/>

                <h4> Accounts and membership </h4>
                If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. <br/>
                We may, but have no obligation to, monitor and review new accounts before you may sign in and use our Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. <br/>
                We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. <br/> If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.<br/><br/>

                <h4> Changes and amendments </h4>
                We reserve the right to modify this Agreement or its policies relating to the Website or Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes. <br/><br/>
                
                <h4> User content </h4>
                We do not own any data, information or material ("Content") that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. <br/> We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you. 
                <br/> You grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you. <br/><br/> 
                Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable. You also grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose.<br/> <br/> 

                <h4> Backups </h4>
                We perform regular backups of the Website and Content and will do our best to ensure completeness and accuracy of these backups. In the event of the hardware failure or data loss we will restore backups automatically to minimize the impact and downtime. <br/><br/>
                
                <h4> Links to other websites </h4>
                Although this Website may link to other websites, we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked website, unless specifically stated herein. <br/> Some of the links on the Website may be "affiliate links". This means if you click on the link and purchase an item, Website Operator will receive an affiliate commission.<br/> 
                We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their websites. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any website which you access through a link from this Website. Your linking to any other off-site websites is at your own risk.<br/><br/>

                <h4> Prohibited uses </h4>
                In addition to other terms as set forth in the Agreement, you are prohibited from using the Website or its Content:  <br/>
                <ul>
                    <li> For any unlawful purpose. </li>
                    <li> To solicit others to perform or participate in any unlawful acts. </li> 
                    <li> To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances. </li> 
                    <li> o infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability. </li> 
                    <li> To submit false or misleading information. </li>
                    <li> o upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet. </li>
                    <li> To spam, phish, pharm, pretext, spider, crawl, or scrape. </li> 
                    <li> For any obscene or immoral purpose; or  </li>
                    <li> To interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses. </li>
                </ul>
                <br/>

                <h4> Age Limitation </h4> 
                We do not knowingly process personal data from persons under 16 years of age. If you learn that anyone younger than 16 has provided us with personal data, please reach out to us through our contact Information below. <br/> By Agreeing to these, it is implied that you are 18 years of age and above. <br/><br/>

                <h4> Intellectual property rights </h4>
                "Intellectual Property Rights" means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. <br/><br/>
                This Agreement does not transfer to you any intellectual property owned by Website Operator or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with Website Operator. <br/>
                All trademarks, service marks, graphics and logos used in connection with the Website or Services, are trademarks or registered trademarks of Website Operator or Website Operator licensors. Other trademarks, service marks, graphics and logos used in connection with the Website or Services may be the trademarks of other third parties. <br/>
                Your use of the Website and Services grants you no right or license to reproduce or otherwise use any Website Operator or third party trademarks.<br/><br/>

                <h4> Disclaimer of Warranties; Limitation of liability </h4>
                We do not guarantee, represent, or warrant that your use of our service will be uninterrupted, timely, secure, or error-free. We do not warrant that the results that may be obtained from the service's use will be accurate or reliable. <br/>
                You agree that we may remove the service for indefinite periods from time to time or cancel the service at any time without notice to you. <br/> You expressly agree that your use of, or inability to use, the product is at your sole risk. <br/>The products and services delivered to you (except as expressly stated by us) are provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. <br/>
                To the fullest extent permitted by applicable law, in no event will Bineza Enterprise, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages. <br/>
                To the maximum extent permitted by applicable law, the aggregate liability of Website Operator and its affiliates, officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount greater of one dollar or any amounts actually paid in cash by you to Website Operator for the prior one-month period prior to the first event or occurrence giving rise to such liability. <br/> The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.
                <br/><br/> 

                <h4>Indemnification</h4>
                You agree to indemnify Bineza Enterprise and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Website or Services or any willful misconduct on your part.<br/> <br/> 

                <h4> Security </h4>
                You agree to indemnify Bineza Enterprise and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with transactions between users and vendors from the website. <br/>
                You are wholly responsible for your security during direct or physical business relations as a user/buyer or vendor/seller on this platform. Bineza Enterprise shall not be held liable for theft, assault, battery or any other act that may constitute personal harm to vendor, buyer or any other third-party. <br/><br/>

                <h4> Severability </h4>
                All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. <br/> 
                If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.<br/><br/>
                
                <h4> Use of Communication </h4>
                The Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, “Communication Services”). <br/> You agree to use the Communication Services only to post, send, and receive messages and material that are proper and related to the particular Communication Service.<br/> 
                Bineza.com has no obligation to monitor the Communication Services. However, we reserve the right to review materials posted to a Communication Service and to remove any materials in its sole discretion. We reserve the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever. <br/>  
                We reserve the right to disclose any information as necessary to satisfy any applicable law, regulation, legal process, or governmental request. It would be best if you always exercise caution when giving any personally identifying information about yourself or your children in any Communication Service. <br/> <br/> 
                Website Operator does not control or endorse the content, messages or information found in any Communication Service and, therefore, we specifically disclaim any liability concerning the Communication Services and any actions resulting from your participation in any Communication Service. Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction, and/or dissemination. You are responsible for adhering to such limitations if you upload the materials.<br/> <br/> 
                
                <h4> Termination </h4>
                These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site. <br/> 
                If in our sole judgment you fail, or we suspect that you have been unable, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice, and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).  <br/> 
                To the maximum extent permitted by law, this agreement is governed by the laws of the Abuja, Nigeria and you as a result of this consent to the exclusive jurisdiction and venue of courts in Abuja in all disputes arising out of or relating to the use of the site.   <br/>  <br/> 
                Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.  <br/> 
                Bineza Enterprise performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of Bineza enterprise right to comply with governmental, court and law enforcement requests or requirements relating to your use of the site or information provided to or gathered by Bineza Enterprise concerning such use.  <br/> 
                Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Bineza Enterprise concerning the site.  <br/> It supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Website Operator for the site. It is the express wish to the parties that this agreement and all related documents be written in English. <br/> <br/> 

                <h4> Dispute resolution </h4>
                In the event that the user and Bineza Enterprise are not able to agree to a mutually agreeable solution, they will submit to a binding confidential mediation to be held in Abuja and conducted by a mutually agreed to mediator. <br/> The user and Bineza Enterprise agree and acknowledge that all provisions of this Agreement, including confidentiality provisions, shall be binding up through the end of this Mediation process. Costs of the Mediation shall be borne equally by all parties.<br/> 
                If parties can’t come to an agreement, they shall progress to litigation. The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Nigeria without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of Nigeria. <br/> The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in Abuja, Nigeria, and you hereby submit to the personal jurisdiction of such courts. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement. <br/> <br/> 
                
                <h4> Acceptance of these terms </h4>
                You acknowledge that you have read this Agreement and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Website and its Services. <br/><br/>
                
                <h4> Contacting Information </h4>
                If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, you may do so via the contact form, send an email to info@bineza.com. You can also send us a message through the website. 
                This document was last updated on June 19, 2020.<br/><br/>

                </div>
            </div>

            <div style={{clear: 'both'}}></div>
            <br/><br/>    
            
            <Footer/>

            <a href="#" class="scroll-up"><span class="ti-arrow-up"></span></a>

        </div>
    );
}
