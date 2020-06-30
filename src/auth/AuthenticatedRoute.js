import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default function AuthenticatedRoute(props) {

    return (
        <Router>
            <Switch>
                <Route path={props.path} render={() => (
                    props.auth == "" ? (
                    <props.redirect/>
                    ) : (
                        <props.component/>
                    )
                )}/>
            </Switch>
        </Router>
    );
}