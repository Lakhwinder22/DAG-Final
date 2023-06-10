import React from 'react';
import {Link} from 'react-router-dom';
const Payment = () => {
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
              <button type='submit' className='PaymentBtn'>Pay by Razorpay Rs 33000/-</button>
              <br/><br/>
              <button type='submit' className='PaymentBtn'>Pay by Razorpay</button>
              </div>
              <br></br>
              <div className='PaymentCard'>
                <h5>how can we help you?</h5>
                <h7>Contact us at the Direct Admission Online nearest to you or submit a business inquiry online.</h7>
                <br></br>
                <br></br>
                <Link to ='/contact'>
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
