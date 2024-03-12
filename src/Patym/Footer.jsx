import React, { useState } from "react";
import "../Patym/Footer.css";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
function Footer() {
  const [isvisible, setisvisible] = useState(false);
  const show = () => {
    setisvisible(!isvisible);
  };
  const [isvisible1, setisvisible1] = useState(false);
  const show1 = () => {
    setisvisible1(!isvisible1);
  };
  const [isvisible2, setisvisible2] = useState(false);
  const show2 = () => {
    setisvisible2(!isvisible2);
  };
  const [isvisible3, setisvisible3] = useState(false);
  const show3= () => {
    setisvisible3(!isvisible3);
  };
  const [isvisible4, setisvisible4] = useState(false);
  const show4= () => {
    setisvisible4(!isvisible4);
  };
  const [isvisible5, setisvisible5] = useState(false);
  const show5= () => {
    setisvisible5(!isvisible5);
  };
  const [isvisible6, setisvisible6] = useState(false);
  const show6= () => {
    setisvisible6(!isvisible6);
  };
  const [isvisible7, setisvisible7] = useState(false);
  const show7= () => {
    setisvisible7(!isvisible7);
  };
  const [isvisible8, setisvisible8] = useState(false);
  const show8= () => {
    setisvisible8(!isvisible8);
  };
  return (
    <div>
      <div className="footer">
        <div className="footer1">
          <h2>
            Download Paytm App
            <br />
            to Pay from anywhere
          </h2>
          <img
            src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadApple.svg"
             alt=""
          />
          <img
            src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadGoogle.svg"
            alt=""
          />
        </div>
        <div className="footer2">
          <img
            src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/twitter.svg"
            alt=""
            style={{ width: "25px" }}
          />
          <img
            src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/instagram.svg"
            alt=""
            style={{ width: "25px" }}
          />
          <img
            src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/facebook.svg"
            alt=""
            style={{ width: "12px" }}
          />
        </div>
      </div>

      <div className="foot">
        <div className="foot1">
          {isvisible ? (
            <RxCross2 style={{ marginTop: "18px" }} />
          ) : (
            <FaPlus style={{ marginTop: "18px" }} />
          )}
          <div>
            <p onClick={show} style={{ marginTop: "18px" }}>
              Investor Relations
            </p>
            {isvisible && (
              <p className="foot_1">
                <p>Home</p>
                <p className="foot_1">Financials</p>
                <p className="foot_1">Filings & Press Releases</p>
                <p className="foot_1">News & Events</p>
                <p className="foot_1">Corporate Governance</p>
                <p>Resources</p>
              </p>
            )}
          </div>
        </div>

        <div className="foot1">
          {isvisible1 ? (
            <RxCross2 style={{ marginTop: "18px" }} />
          ) : (
            <FaPlus style={{ marginTop: "18px" }} />
          )}
          <div>
            <p onClick={show1} style={{ marginTop: "18px" }}>
              Company
            </p>
            {isvisible1 && (
              <p className="foot_1">
                <p>About Us</p>
                <p className="foot_1">CSR</p>
                <p className="foot_1">Blog</p>
                <p className="foot_1">Contact Us</p>
                <p className="foot_1">Terms & Conditions</p>
                <p>Sustainability</p>
              </p>
            )}
          </div>
        </div>

        <div className="foot1">
          {isvisible2 ? (
            <RxCross2 style={{ marginTop: "18px" }} />
          ) : (
            <FaPlus style={{ marginTop: "18px" }} />
          )}
          <div>
            <p onClick={show2} style={{ marginTop: "18px" }}>
              Important Updates
            </p>
            {isvisible2 && (
              <p className="foot_1">
                <p>Verified Latest Paytm News</p>
                <p className="foot_1">Is Paytm banned by RBI?</p>
                <p className="foot_1">
                  What will happen to Paytm UPI after
                   29 Feb?
                </p>
                <p className="foot_1">
                  What will happen to Paytm Wallet after
                 29 Feb?
                </p>
                <p className="foot_1">
                  What will happen to Paytm App after
                   29 Feb?
                </p>
              </p>
            )}
          </div>
        </div>




        <div className="foot1">
          <div>
            <p style={{ marginTop: "18px" }}>
            Career
            </p>
          </div>
        </div>


        <div className="foot1">
          {isvisible3 ? (
            <RxCross2 style={{ marginTop: "18px" }} />
          ) : (
            <FaPlus style={{ marginTop: "18px" }} />
          )}
          <div>
            <p onClick={show3} style={{ marginTop: "18px" }}>
            Recharge & pay bills

            </p>
            {isvisible3 && (
              <p className="foot_1">
                <p>Mobile Recharge</p>
                <p className="foot_1">Mobile Bill Payment</p>
                <p className="foot_1">Datacard Recharge</p>
                <p className="foot_1">Datacard Bill Payment</p>
                <p className="foot_1">Dth Recharge</p>
                <p>Electricity Bill Payment</p>
              </p>
            )}
          </div>
        </div>


        <div className="foot1">
          {isvisible4 ? (
            <RxCross2 style={{ marginTop: "18px" }} />
          ) : (
            <FaPlus style={{ marginTop: "18px" }} />
          )}
          <div>
            <p onClick={show4} style={{ marginTop: "18px" }}>
            Pay Loan EMI, Insurance Premiums & Education Fee

            </p>
            {isvisible4 && (
              <p className="foot_1">
                <p>Pay Loan EMI</p>
                <p className="foot_1">Pay Insurance Premium</p>
               
              </p>
            )}
          </div>
        </div>

        
        <div className="foot1">
          {isvisible5 ? (
            <RxCross2 style={{ marginTop: "18px" }} />
          ) : (
            <FaPlus style={{ marginTop: "18px" }} />
          )}
          <div>
            <p onClick={show5} style={{ marginTop: "18px" }}>
            Book Travel & Entertainment

            </p>
            {isvisible5 && (
              <p className="foot_1">
                <p>Movie Ticket Booking</p>
                <p className="foot_1">Bus Ticket Booking</p>
                <p className="foot_1">Flight Ticket Booking</p>
                <p className="foot_1">Train Ticket Booking</p>
                <p className="foot_1">Event Booking</p>
                <p>Upcoming movies</p>
              </p>
            )}
          </div>
        </div>

        <div className="foot1">
          {isvisible6 ? (
            <RxCross2 style={{ marginTop: "18px" }} />
          ) : (
            <FaPlus style={{ marginTop: "18px" }} />
          )}
          <div>
            <p onClick={show6} style={{ marginTop: "18px" }}>
            Investments & Miscellaneous


            </p>
            {isvisible6 && (
              <p className="foot_1">
                <p>Mutual Fund Investments</p>
                <p className="foot_1">Fee Payment</p>
                <p className="foot_1">Google Play Recharge</p>
                <p className="foot_1">Fastag</p>
                <p className="foot_1">QR Code Scanner</p>
                <p>Free Credit Score</p>
              </p>
            )}
          </div>
        </div>

        
        <div className="foot1">
          {isvisible7 ? (
            <RxCross2 style={{ marginTop: "18px" }} />
          ) : (
            <FaPlus style={{ marginTop: "18px" }} />
          )}
          <div>
            <p onClick={show7} style={{ marginTop: "18px" }}>
            Loans and Credit Cards


            </p>
            {isvisible7 && (
              <p className="foot_1">
                <p>Postpaid</p>
                <p className="foot_1">Credit Cards</p>
                <p className="foot_1">Personal Loan</p>
                <p className="foot_1">Credit Report</p>
                
              </p>
            )}
          </div>
        </div>
          
        <div className="foot1">
          {isvisible8 ? (
            <RxCross2 style={{ marginTop: "18px" }} />
          ) : (
            <FaPlus style={{ marginTop: "18px" }} />
          )}
          <div>
            <p onClick={show8} style={{ marginTop: "18px" }}>
            Financial Tools & Calculators

            </p>
            {isvisible8 && (
              <p className="foot_1">
                <p>EMI Calculator</p>
                <p className="foot_1">Personal Loan EMI Calculator</p>
                <p className="foot_1">Home Loan EMI Calculato</p>
                <p className="foot_1">Car Loan EMI Calculator</p>
                <p className="foot_1">IFSC Code Finder</p>
                <p>Financial Tools & Calculators</p>
              </p>
            )}
          </div>
        </div>



      </div>
    </div>
  );
}

export default Footer;
