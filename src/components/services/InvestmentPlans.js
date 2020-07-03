import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import Functions from '../../utils/Functions';
import { serverEndPoint, webTitle } from '../../utils/Helpers';

export default function InvestmentPlans() {
    
    let [plans, setPlans] = React.useState('');

    const [values, setValues] = React.useState({
        plansLoaded: false,
    });

    async function getPlans() {
        
        await axios({
            method: 'get',
            url: serverEndPoint+`plans`,
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            }
        })
        .then( async (response) => {
            let details = response.data.data;
            
            if(response.status == 200) { 
                
                setPlans(details);
                
                setValues( values => ({
                    ...values, 
                    plansLoaded: true,
                }));
            }
        }).
        catch( (error) => {
            console.log(error);
        });
    } 
    
    useEffect( () => {
        getPlans();
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
                                
                                <div>
                                    
                                    {!values.plansLoaded?
                                        
                                        <div align="center" style={{margin:20}}>
                                            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                                        </div> :
                                        
                                        <div>
                                            {plans.length == 0 ?
            
                                                <div align="center" style={{marginTop:10, fontSize:16, color: '#FF465A'}}>
                                                    No investment plans yet
                                                </div> :

                                                <div id="invest-now" className="row no-gutters mt-50 res-767-mt-0">
                                                    {plans.map( (plan, index) => ( 
                                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                                            <div className="ttm-pricing-plan plan-box text-left clearfix">
                                                                <div className="ttm-ptablebox-title"><h3  align="center">{Functions.capitalizeFirstLetter(plan.name)}</h3></div>
                                                                <div className="ttm-ptablebox-desc" style={{fontSize: 20, color: '#99CC33'}}>&#8358;{Functions.formatPrice(plan.range_from)} - &#8358;{Functions.formatPrice(plan.range_to)} </div>
                                                                <div className="ttm-ptablebox-content">
                                                                    <div className="ttm-ptablebox-price-w">
                                                                        <div style={{fontSize: 20}}>{plan.roi}% ROI</div>
                                                                    </div>
                                                                    <div className="ttm-ptablebox-features">
                                                                        Duration of {plan.duration} months
                                                                    </div> <br/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            }
                                        </div>
                                    }
                                
                                </div>
                                
                                <br/><br/>
                                
                                <div align="center">
                                    <a href="/invest" className="btn btn-success btn-green btn-lg"> Invest Now <i className="fa fa-arrow-right"></i></a>
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
