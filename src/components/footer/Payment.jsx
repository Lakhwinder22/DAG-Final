import React from 'react';
import { Link } from 'react-router-dom';
const Payment = () => {
  const openLinkInNewTab = () => {
    window.open('https://pages.razorpay.com/edudag', '_blank');
  };
  return (
    <div className='Paymentmain'>
      <div className='pagesection'>
        <div className='container' >
          <div className='row'>
            <div className='col'>
              <div>
                <h2></h2>
                <br></br>
                <strong>Make Online Payment Safe And Secure with our World class Payment Gateway</strong>
                <br></br>
                <br></br>
                 
                <div>
           
                  <button onClick={openLinkInNewTab} className='PaymentBtn'>Pay by Razorpay </button>
                </div>
                
              </div>
              <br></br>
              <div className='PaymentCard'>
                <h5>how can we help you?</h5>
                <h7>Contact us at the Direct Admission Online nearest to you or submit a business inquiry online.</h7>
                <br></br>
                <br></br>
                <Link to='/contact'>
                  <button type='submit'>Contact Now</button>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Payment
