import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Navas() {
    
    return (
        <nav class="mobile-nav">
            <ul class="mobile-menu">
                <li class="current-menu-item"><a href="/">Home</a> </li>
                <li> <a href="/about">About us</a> </li>
                <li> <a href="/categories">Books</a> </li>
                <li> <a href="/register">Sign up</a> </li>
                <li> <a href="/login">Login</a> </li>
                <li> <a href="/contact">Contact us</a> </li>
            </ul>               
        </nav>
    );
}
