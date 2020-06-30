import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Functions from './utils/Functions';

import ErrorBoundary from './utils/ErrorBoundary';
import Error404 from './components/Error404';
import Home from './components/Home';
import Login from './components/accounts/Login';
import Invest from './components/investments/Invest';
import Register from './components/accounts/Register';
import ForgotPassword from './components/accounts/ForgotPassword';
import ResetPassword from './components/accounts/ResetPassword';
import ActivatePasswordReset from './components/accounts/ActivatePasswordReset';
import ActivateAccount from './components/accounts/ActivateAccount';
import About from './components/About';
import PigFarming from './components/services/PigFarming';
import InvestmentPlans from './components/services/InvestmentPlans';
import CharityScheme from './components/services/CharityScheme';
import Contact from './components/Contact';
import Faq from './components/agreements/Faq';
import PrivacyPolicy from './components/agreements/PrivacyPolicy';
import TermsAndConditions from './components/agreements/TermsAndConditions';

export default () => {
  
  return (
    <div>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/services/pig-farming" component={PigFarming}/>
            <Route path="/services/investment-plans" component={InvestmentPlans}/>
            <Route path="/services/charity-scheme" component={CharityScheme}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route path="/activate-account/:code" component={ActivateAccount}/>
            <Route path="/activate-password-reset/:code" component={ActivatePasswordReset}/>
            <Route path="/reset-password/:code" component={ResetPassword}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/404" component={Error404} />
            <Route path="/faq" component={Faq}/>
            <Route path="/terms-and-conditions" component={TermsAndConditions}/>
            <Route path="/privacy-policy" component={PrivacyPolicy}/>
          </Switch> 
        </Router> 
      </ErrorBoundary>
    </div>
  );
}



