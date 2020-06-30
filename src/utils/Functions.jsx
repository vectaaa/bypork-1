import React, { useEffect } from 'react';
import axios from 'axios';

document.body.style.overflow = "visible";

const Functions = {

    trimString: function(str) {
        return str.replace(/^\s+|\s+$/gm,'');
    }, 

    capitalizeFirstLetter: function (str) {
        return str.charAt(0).toUpperCase()+ str.slice(1);
    }, 

    capitalizeWord: function (str) {
        return str.toLowerCase().split(' ').map( word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    }, 

    Print: function (div)  {
        document.body.innerHTML = document.getElementById(div).innerHTML;
        window.print();
    }, 

    PrevBtn: function (current_div,next_div)  {
        document.getElementById(current_div).style.display = 'block';
        document.getElementById(next_div).style.display = "none";
    }, 

    NextBtn: function (current_div,next_div)  {
        document.getElementById(current_div).style.display = 'none';
        document.getElementById(next_div).style.display = "block";
    }, 

    isCharNumber: function (event) {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        if(/\D/.test(keyValue)) {
            event.preventDefault();
        }
    }, 
    
    disableBtn: function (btn)  {
        btn.innerHTML = 'Please wait...';
        btn.setAttribute('disabled','disabled');
    },
    
    enableBtn: function (label,btn)  {
        btn.innerHTML = label;
        btn.removeAttribute('disabled');
    },

    disableTheBtn: function (btn)  {
        btn.setAttribute('disabled','disabled');
    },
    
    enableTheBtn: function (btn)  {
        btn.removeAttribute('disabled');
    },

    getSize: function (bytes) {
        const fileSizes = ['B', 'KB', 'MB', 'GB', 'TB'];
        let index = 0;
    
        while(bytes >= 1024) {
            bytes = bytes/1024;
            index++;
        }
        const format_size = bytes.toFixed(2);
        const result = format_size+""+fileSizes[index];
        return result;
    },

    getDuration: function (duration) {
        return ((duration)/60).toFixed(1);
    },

    formatPrice: function (price) {
        return parseFloat(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },

    goBack: function() {
        window.history.back();
    },

    isEmpty: function(values) {
        let isAllFilled = values.every(x => x != "");
        let isFilled = values.every(x => x != "undefined");
        return (!isAllFilled || !isFilled) ? true: false;
    },

    isInt: function (value) {
        return !isNaN(value) && 
               parseInt(Number(value)) == value && 
               !isNaN(parseInt(value, 10));
    },

    setCookie: function(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },

    getCookie: function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    },

    deleteCookie: async function (name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },

    getUserType: function () {
        
        const customerCookie = Functions.getCookie('bineza_customer_token');
        const sellerCookie = Functions.getCookie('bineza_seller_token');

        if(customerCookie) {
            return 'customer'
        } else if(sellerCookie) {
            return 'seller';
        } else {
            return 'none';
        } 
    }
    
}

export default Functions;
