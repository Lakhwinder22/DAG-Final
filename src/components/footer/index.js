import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import Facebook1 from '../../images/Facebook1.png';
import Youtube1 from '../../images/Youtube1.png';
import Insta1 from '../../images/Insta1.png';
import LinkedIn from '../../images/LinkedIn.png';
import Address from '../../images/Address.png';
import Mail from '../../images/Mail.png';
import Phone1 from '../../images/Phone1.png';

const FooterPagePro = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <MDBFooter color="black" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#f9e10b" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h5 className="mb-0 black-text">
                <strong>Get connected with us on social networks!</strong>
              </h5>
            </MDBCol>
            <br />
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0" href="https://www.facebook.com/directadmissiononline/">
                <img src={Facebook1} alt="" height={23} width={23}></img>
              </a>
              <a className="li-ic" href="https://www.linkedin.com/company/direct-admission/">
                <img src={LinkedIn} alt="" height={20} width={27}></img>
              </a>
              <a className="ins-ic" href="https://www.instagram.com/directadmissionglobal/?igshid=MzRlODBiNWFlZA%3D%3D">
                <img src={Insta1} alt="" height={23} width={23}></img>
              </a>
              <a className="tw-ic" href="https://www.youtube.com/channel/UC0VfvHrQizUzkLiv5zZkm-A?view_as=subscriber">
                <img src={Youtube1} alt="" height={25} width={23}></img>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Company name</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <h7><strong>Direct Admission Global</strong></h7>
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Services</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <Link to="/mbaconsultants" onClick={scrollToTop}>MBA Counseling</Link>
            </p>
            <p>
              <Link to="/sop" onClick={scrollToTop}>SOP/LOR</Link>
            </p>
            <p>
              <Link to="/mock" onClick={scrollToTop}>Mock</Link>
            </p>
            <p>
              <Link to="/awt" onClick={scrollToTop}>AWT</Link>
            </p>
            <p>
              <Link to="/scholarship" onClick={scrollToTop}>Scholarship</Link>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <Link to="/book" onClick={scrollToTop}>Book An Appointment</Link>
            </p>
            <p>
              <Link to="/application" onClick={scrollToTop}>Application Form</Link>
            </p>
            <p>
              <Link to="/payment" onClick={scrollToTop}>Payment</Link>
            </p>
            <p>
              <Link to="/career" onClick={scrollToTop}>Career</Link>
            </p>
            <p>
              <Link to="/blog" onClick={scrollToTop}>Blog</Link>
            </p>
          </MDBCol>
          <br />
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <img src={Address} alt="" height={20} width={20}></img> Direct Admission Global, 136, Second Floor, Vishal House, Block C, Adjacent to Bluebells School International, Zamrudpur, East of Kailash, New Delhi - 110048
            </p>
            <p>
              <img src={Mail} alt="" height={20} width={20}></img>email@thedirectadm.com
            </p>
            <p>
              <img src={Phone1} alt="" height={20} width={20}></img>1800-3000-2688 (Tollfree)
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center py-3">
        <MDBContainer fluid>
          <p className="mb-0">© {new Date().getFullYear()} Direct Admission Global. All rights reserved.</p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;
