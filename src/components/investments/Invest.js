import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Header from '../navs/Header';
import Footer from '../navs/Footer';
import Functions from '../../utils/Functions';
import PaystackLib from '../../utils/PaystackLib';
import PaystackButton from 'react-paystack';
import { serverEndPoint, webTitle, paystackKey } from '../../utils/Helpers';

export default function Invest() {
    
	const history = useHistory();
    let [plans, setPlans] = React.useState('');

    const [values, setValues] = React.useState({
        plansLoaded: false,
        selected: false,        
        plan_id: '',
        reference_id: '',
        investment_id: '',
        amount: '',
        plan_name: '',
        business: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
    });

    async function selectPlan(plan_id, plan_name) {
       setValues({
           ...values,
           plan_name: Functions.capitalizeFirstLetter(plan_name),
           plan_id: plan_id,
           selected: true,
       });
    }

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setValues(values => ({...values, [name] : value}));
    }

    function Invest(event) {
        event.preventDefault();
        const status = document.getElementById('invest-status');
        const btn = document.getElementById('invest-btn');
        const pay_btn = document.getElementsByClassName('pay-btn')[0];
        
        const { firstname, lastname, business, amount, plan_id, phone, email } = values; 
        const allValues = [firstname, lastname, amount, business, plan_id, phone, email];
        const isValueEmpty = Functions.isEmpty(allValues);

        if(isValueEmpty) {
            status.innerHTML = "<p style='color:red'> Fill all fields </p>";
            return false;
        } else {
            
            Functions.disableBtn(btn);
            const data = `business=${business}&amount=${amount}&plan_id=${plan_id}&firstname=${firstname}&lastname=${lastname}&phone=${phone}&email=${email}`; 
            
            axios({
                method: 'post',
                url: `${serverEndPoint}invest`,
                data: data,
            })
            .then(response => {
                const details = response.data.data;
            
                if(response.status == 201) {
                    
                    const reference_id = PaystackLib.getPaymentReference();
                    status.innerHTML = '';  
                    setValues({
                        ...values,
                        investment_id: details.id,
                        reference_id: reference_id,
                    });
                    
                    setTimeout(function() {
                        pay_btn.click();
                    }, 1000);

                } else {
                    Functions.enableBtn('Invest', btn);
                    status.innerHTML = `<p style='color:red'>${response.data.data.message}</p>`;
                }
            }).
            catch( (error) => {
                console.log(error);
                Functions.enableBtn('Invest', btn);
                status.innerHTML = "<p style='color:red'> Investment not successful. Try again. </p>";
            });
        }     
    }

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
                                
                                <h3 id="invest-heading"> Select an Investment Plan </h3>

                                <div>
                                    
                                    {!values.plansLoaded?
                                        
                                        <div align="left" style={{margin:20}}>
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
                                                                <div className="ttm-ptablebox-title"><h3>{Functions.capitalizeFirstLetter(plan.name)}</h3></div>
                                                                <div className="ttm-ptablebox-desc" style={{fontSize: 18, color: '#99CC33'}}>&#8358;{Functions.formatPrice(plan.range_from)} - &#8358;{Functions.formatPrice(plan.range_to)} </div>
                                                                <div className="ttm-ptablebox-content">
                                                                    <div className="ttm-ptablebox-price-w">
                                                                        <div style={{fontSize: 20}}>{plan.roi}% ROI</div>
                                                                    </div>
                                                                    <div className="ttm-ptablebox-features">
                                                                        Duration of {plan.duration} months
                                                                    </div> <br/>
                                                                </div>
                                                                <div className="price_btn">
                                                                    <button className="btn btn-success btn-green btn-block" onClick={selectPlan.bind(this, plan.id, plan.name)}>Select</button>
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
                                
                                {values.selected ?
                                
                                    <div>
                                        <form name="checkout" id="invest-form" method="post" class="checkout row" action="#">
                                            <div class="col-lg-12">
                                                <h4>Investor Details</h4>
                                                
                                                <div class="row">

                                                    {/* <div>Kindly fill the form below appropriately</div>  <br/><br/> <br/><br/> */}
                                                    
                                                    <div style={{clear: 'both'}}></div><br/><br/>

                                                    <div class="col-sm-6">
                                                        <div class="form-group"><br/>
                                                            <label>Selected Plan<abbr>*</abbr></label>
                                                            <input type="text" name="plan" class="form-control border" value={values.plan_name} style={{backgroundColor: '#eee'}} readOnly/>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-sm-6">
                                                        <div class="form-group"><br/>
                                                            <label>Amount to be invested<abbr>*</abbr></label>
                                                            <input type="text" name="amount" class="form-control border" onChange={onChangeHandler} onKeyPress={Functions.isCharNumber} inputmode="numeric" pattern="[0-9]*"/>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>First Name<abbr>*</abbr></label>
                                                            <input type="text" name="firstname" class="form-control border" onChange={onChangeHandler}/>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Last Name<abbr>*</abbr></label>
                                                            <input type="text" name="lastname" class="form-control border" onChange={onChangeHandler}/>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Email<abbr>*</abbr></label>
                                                            <input type="email" name="email" class="form-control border" onChange={onChangeHandler}/>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Phone<abbr>*</abbr></label>
                                                            <input type="text" name="phone" class="form-control border" onChange={onChangeHandler}/>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label>Business<abbr>*</abbr></label>
                                                            <input type="text" name="business" class="form-control border" onChange={onChangeHandler}/>
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>

                                            <div class="container" align="center">
                                                <br/>
                                                <button class="btn btn-success btn-green btn-lg" id="invest-btn" onClick={Invest}> Invest </button> <br/><br/>
                                            </div>
                                        </form>

                                        <div style={{display: 'none'}}>
                                            <PaystackButton
                                                text="Make Payment"
                                                className= 'pay-btn'
                                                callback={() => PaystackLib.payInvestment(values.investment_id, values.reference_id)}
                                                close={() => PaystackLib.getClose()}
                                                disabled={false} 
                                                embed={false}
                                                reference={values.reference_id}
                                                email={values.email}
                                                amount={PaystackLib.getAmount(values.amount)}
                                                paystackkey={paystackKey}
                                                tag="button"
                                            />
                                        </div>
                                    </div>
                                 : null  
                                }

                                <div align="center" id="invest-status"></div>
                                    
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
