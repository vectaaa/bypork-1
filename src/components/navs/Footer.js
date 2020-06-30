import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

export default function Footer() {
    
    return (
        <footer className="footer widget-footer clearfix">
            <div className="bottom-footer-text ttm-textcolor-white">
                <div className="container">
                    <div className="row copyright">
                        <div className="col-md-12">
                            <div className="text-center">
                                <span>Copyright © 2020&nbsp;<a href="#">Bypork</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}
