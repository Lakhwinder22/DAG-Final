import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Facebook2 from '../../images/Facebook1.png';
import Youtube2 from '../../images/Youtube1.png';
import LinkedIn2 from '../../images/LinkedIn.png';
import Insta2 from '../../images/Insta1.png';
import Address1 from '../../images/Address.png';
import Phone2 from '../../images/Phone1.png';
import Mail1 from '../../images/Mail.png';

const Contact = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendContact = async (e) => {
    e.preventDefault();
    const res = await fetch("/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, phone, email, message
      })
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log("error")
    } else {
      setShow(true);
      // setEmail("")
      console.log("Email sent")
    }
  };
  return (
    <>
      {
        show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          Your Request is Succesfully Send
        </Alert> : ""
      }
      <div className='pagesection'>
        <div className='container' >
          <div className='row'>
            <div className='col'>
              <h2><strong>Our Contact Details</strong></h2>
              <br></br>
              <div className='officeMain'>
              <div className='office'>
                <h5><strong>HEAD OFFICE (OPERATING ADDRESS)</strong></h5>
                <br></br>
                <p><strong><img src={Address1} alt='place' width={23} height={23}></img>Direct Admission Global, 136, Second Floor, Vishal House, Block C, Adjacent to Bluebells School International, Zamrudpur, East of Kailash, New Delhi - 110048</strong>
                  <br></br>
                  <br></br>
                  <strong> <img src={Phone2} alt='place' width={23} height={23}></img> 1800-3000-2688 (Tollfree)</strong>
                  <br></br>
                  <br></br>
                  <img src={Mail1} alt='place' width={23} height={23}></img><strong> email@thedirectadm.com</strong>
                </p>
                <div className='ContactImg'>
                <a className="fb-ic ml-0" href="https://www.facebook.com/directadmissiononline/">
                  <img src={Facebook2} alt="place" height={23} width={23} ></img>
                </a>
                <a className="li-ic" href="https://www.linkedin.com/company/direct-admission/">
                  <img src={LinkedIn2} alt="place" height={20} width={27} ></img>
                </a>
                <a className="ins-ic" href="https://www.instagram.com/directadmissionglobal/?igshid=MzRlODBiNWFlZA%3D%3D">
                  <img src={Insta2} alt="place" height={23} width={23} ></img>
                </a>
                <a className="tw-ic" href="https://www.youtube.com/channel/UC0VfvHrQizUzkLiv5zZkm-A?view_as=subscriber">
                  <img src={Youtube2} alt="place" height={25} width={23} ></img>
                </a>
                </div>
               
              </div>
              <div className='labl'>
               
                <form >
                <h3> <strong>Drop Us A Qurey</strong></h3>
                  <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </label>
                  <br />
                  <label>
                    Phone:
                    <input type="Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </label>
                  <br />
                  <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>
                  <br />
                  <label>
                    Message:
                    <textarea type="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                  </label>
                  <br />
                  <button type="submit" variant="primary" onClick={sendContact}>Submit</button>
                </form>
              </div>
            </div>
            <div className='office1'>
              <h5><strong> REGISTERED ADDRESS</strong></h5>
              <p>
                <strong> <img src={Address1} alt='place' width={20} height={20}></img>Direct Admission A 47, Kalu Sarai,New Azad Apartments,Cheema House, Hauz Khas Delhi-110016</strong>
                {/* <strong>1800-3000-2688 (Tollfree)</strong> */}
                {/* <br></br> */}
                {/* <strong>email@thedirectadm.com</strong> */}
              </p>
            </div>
            </div>
             
            
  
           
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;




