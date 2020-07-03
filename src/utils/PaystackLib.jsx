import axios from 'axios';
import Functions from './Functions';
import { serverEndPoint } from './Helpers';
    
const PaystackLib = {

    getPaymentReference: function () {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },

    deleteInvestment: async function(investment_id) {
        
        await axios({
            method: 'delete',
            url: `${serverEndPoint}investment/delete/${investment_id}`,
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept' : 'application/json',
                // 'x-access-token' : token
            }
        }).then( response => {
            alert('deleted');
        }).
        catch( (error) => {
            alert('error');
        });
    }, 

    payInvestment: async function(investment_id, reference_id) {
        
        const data = `investment_id=${investment_id}&reference_id=${reference_id}`;
        const status = document.getElementById('invest-status');
        const btn = document.getElementById('invest-btn');
        
        await axios({
            method: 'put',
            url: `${serverEndPoint}investment/confirm`,
            data: data,
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept' : 'application/json',
                //'x-access-token' : token
            }
        }).then( async (response) => {
            Functions.enableBtn('Invest', btn);
            
            if(response.data.data.status == 'approved') {
                
                document.getElementById('invest-heading').style.display = 'none';
                document.getElementById('invest-now').style.display = 'none';
                document.getElementById('invest-form').reset();
                document.getElementById('invest-form').style.display = 'none';
                
                status.innerHTML = "<h2 style='font-size:20'><i className='fa fa-check'></i> Thank you for investing with Bypork.  <br/> <br/> Details of your interest shall be sent to your mail periodically.</h2>";

            } else {
                await PaystackLib.deleteInvestment(investment_id);
                status.innerHTML = `<p style='color:red'> Unable to complete payment. Try again.</p>`;
            }
        }).
        catch( async (error) => {
            await PaystackLib.deleteInvestment(investment_id);
            status.innerHTML = "<p style='color:red'> Unable to complete payment. Try again.</p>";
            return false;
        });
    }, 

    getClose: function() {
        alert("Payment cancelled. Try again!");
        window.location = '/invest';
    },

    getAmount: function (amount) {
        let charges;

        if(amount > 2000) {
            charges = (1.5/100)*amount;
            charges = charges+100;
        } else {
            charges = (1.5/100)*amount;
        }
        
        let fee = (+amount) + (+charges);
        let paystack_amount = Math.ceil(fee*100);
        return paystack_amount;
    },

}

export default PaystackLib;

