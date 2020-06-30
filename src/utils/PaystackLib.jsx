import axios from 'axios';
import Functions from './Functions';
import { serverEndPoint } from './Helpers';
    
const PaystackLib = {

    getReference: function () {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },

    confirmCheckout: async function (payment_transaction_id, transaction_id) {
        
        let data = `payment_transaction_id=${payment_transaction_id}&transaction_id=${transaction_id}`;
        const status = document.getElementById("checkout-status");

        let cookie = Functions.getCookie('lafazi_user_token');
        
        await axios({
            method: 'put',
            data: data,
            url: serverEndPoint+'user/checkout/confirm',
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'x-access-token' : cookie
            }
        }).then( async (response) => {
            status.innerHTML = `<p style='color:green'>${response.data.message}</p>`;
            window.location="/my-books";
        })
        .catch( (error) => {
            alert('Invalid request. Try again.');
        });
    },

    deleteTransaction: async function (transaction_id) {
        
        let cookie = Functions.getCookie('lafazi_user_token');
        
        await axios({
            method: 'delete',
            url: serverEndPoint+`user/transaction/delete/${transaction_id}`,
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'x-access-token' : cookie
            }
        }).then( (response) => {
        })
        .catch( (error) => {
        });
    }, 

    pushCart: function (carts) {
        let all_carts = [];
        
        carts.forEach(function(item, index) {
            all_carts.push(item);
        });

        return all_carts;
    },

    getDone: async function(firstname, lastname, phone, city, address, carts, reference_id) {
        
        const status = document.getElementById('checkout-status');
        const btn = document.getElementsByClassName('pay')[0];
        Functions.disableBtn(btn);
        
        let data = `firstname=${firstname}&lastname=${lastname}&phone=${phone}&city=${city}&address=${address}`;
        data = data+`&carts=${JSON.stringify(carts)}`;
        let cookie = Functions.getCookie('lafazi_user_token');
        
        await axios({
            method: 'post',
            data: data,
            url: serverEndPoint+'user/checkout',
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'x-access-token' : cookie
            }
        }).then( async (response) => {
            const transaction_id = response.data.data[0].transaction_id;
            
            if(response.data.status) {
                await this.confirmCheckout(reference_id, transaction_id);
            } else {
                await this.deleteTransaction(transaction_id);
            }
            Functions.enableBtn('Make Payment', btn);
        }).
        catch( (error) => {
            Functions.enableBtn('Make Payment', btn);
            status.innerHTML = "<p style='color:red'> Unable to make payment. Try again.</p>";
        });
    }, 

    getClose: function() {
        alert("Payment cancelled. Try again!");
    },

    getAmount: function (amount) {
        let charges = (1.5/100)*amount;
        let fee = (+amount) + (+charges);
        let paystack_amount = Math.ceil(fee*100);
        return paystack_amount;
    },

}

export default PaystackLib;

