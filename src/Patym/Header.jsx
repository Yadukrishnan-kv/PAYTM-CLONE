import React from 'react'
import '../Patym/Header.css'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
 
   <header>
     <div className="logocontainer">
        <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg" alt="" />
     </div>
     <nav className='nav'>
        <ul>
            <li className="nav_list">
                <div className="nav_title">Paytm for Consumer</div>
                <div className="sub_nav">
                    <ul>
                        <li>
                           <div>Payments</div>
                            <div className="icons"><IoIosArrowForward /></div>
                        </li>
                        <li>
                            <div>Tickets Booking</div>
                            <div className="icons"><IoIosArrowForward /></div>
                        </li>
                        <li>
                            <div>Financial Services</div>
                            <div className="icons"><IoIosArrowForward /></div>

                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav_list">
                <div className="nav_title">Paytm For Business</div>
                <div className="sub_nav">
                    <ul>
                         <li>
                            <div>Consumer Payments</div>
                            <div className="icons"><IoIosArrowForward /></div>
                        </li>
                        <li>
                            <div>Business Payments</div>
                            <div className="icons"><IoIosArrowForward /></div>
                        </li>
                        <li>
                            <div>Business Software</div>
                            <div className="icons"><IoIosArrowForward /></div>

                        </li>
                        <li>
                            <div>Financial Services</div>
                            <div className="icons"><IoIosArrowForward /></div>

                        </li>
                        <li>
                            <div>Developer</div>
                            <div className="icons"><IoIosArrowForward /></div>

                        </li>
                        </ul>
                </div>
            </li>
            <li className="nav_list">
                <div className="nav_title">Investor Relations</div></li>
          
           <li className="nav_list">
                <div className="nav_title">Company</div>
                <div className="sub_nav">
                    <ul>
                       
                    <li>
                            <div>Contact Us</div>
                            <div className="icons"><IoIosArrowForward /></div>

                        </li>

                      <li>
                            <div>Abouts</div>
                            <div className="icons"><IoIosArrowForward /></div>
                        </li>
                        <li>
                            <div>CSR</div>
                            <div className="icons"><IoIosArrowForward /></div>
                        </li>
                        
                        <li>
                            <div>Blog</div>
                            <div className="icons"><IoIosArrowForward /></div>

                        </li>
                       
                        <li>
                            <div>Latest News</div>
                            <div className="icons"><IoIosArrowForward /></div>

                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav_list">
                <div className="nav_title">career</div></li>
         
            </ul>
          </nav>
              <Link to={'/signin'} style={{textDecoration:"none"}}><div className="signinbtn"><h4>Sign-In</h4>
             <div className="signinicon">
             <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg" alt="" />
            </div>
            </div></Link>
          </header>

    </div>
  )
}

export default Header