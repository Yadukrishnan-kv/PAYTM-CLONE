import React from 'react'
import '../Patym/Body.css'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
function Body() {
  return (
    
    
    <div>
    
    <div className="container">

      {/* first section */}
       <div className="left">
                <img src="https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png" alt=""   className="section_1_logo" />
           <div className="left1">
               <h1 className="section_1_h1">India's Most-loved<br/>Payments App</h1>
               <p className="section_1_p">Recharge & pay bills, book flights & movie tickets,<br/> open a savings account, invest in stocks & mutual<br/> funds, and do a lot more.</p>
          </div>
          <div className="left2">
               <a href="https://apps.apple.com/in/app/paytm-secure-upi-payments/id473941634" style={{textDecoration:"none",color:"white"}}><span>Download Patym App</span>
               <FaApple  style={{marginLeft:"20px"}}/>
               <BiLogoPlayStore style={{marginLeft:"5px"}} />
               </a>
          </div>
       </div>
       <div className="right">
        <    img src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1706796536129.png" alt="" />
       </div>
       </div>
     
       {/* /second section/ */}

           <div className="container_2">
               <h1>
                Recharge & Pay Bills on Paytm.
               </h1>
               <div className="container_2_items">
                <div className="box_1">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://paytm.com/recharge" style={{textDecoration:"none",color:"white"}}>
                  <span>Recharge <br/>Prepaid<br/> Mobile</span></a>
                </div>
                
                
                <div className="box_2">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://paytm.com/electricity-bill-payment" style={{textDecoration:"none",color:"white"}}>
                  <span>Pay <br/>Electricit<br/> Bill</span></a>
                </div>
                <div className="box_3">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://paytm.com/dth-recharget" style={{textDecoration:"none",color:"white"}}>
                  <span>Recharge <br/>DTH<br/> Connection</span></a>
                </div>
                <div className="box_4">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://paytm.com/cylinder-gas-recharge" style={{textDecoration:"none",color:"white"}}>
                  <span>Book<br/>Gas<br/> Cylinder</span></a>
                </div>
                <div className="box_5">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/1269194/1672827522093.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://paytm.com/broadband-bill-payment" style={{textDecoration:"none",color:"white"}}>
                  <span>Pay<br/>Boardcast&<br/> Landline</span></a>
                </div>
                <div className="box_6">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/1269198/1672828917034.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://paytm.com/education" style={{textDecoration:"none",color:"white"}}>
                  <span>Pay<br/>Educational<br/>Fee</span></a>
                </div>
                <div className="box_7">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://paytm.com/" style={{textDecoration:"none",color:"white"}}>
                  <span>All<br/>Payment<br/></span></a>
                </div>
                </div>
                

           </div>
           <div className="container_3">
               <h1>
               Book & Buy on Paytm.
               </h1>
               <div className="container_3_items">
                <div className="box_01">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://paytm.com/movies" style={{textDecoration:"none",color:"white"}}>
                  <span>Movies <br/>Tickets</span></a>
                </div>
                
                
                <div className="box_02">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://tickets.paytm.com/flights/" style={{textDecoration:"none",color:"white"}}>
                  <span>Flights <br/>Tickets</span></a>
                </div>
                <div className="box_03">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://tickets.paytm.com/bus/" style={{textDecoration:"none",color:"white"}}>
                  <span>Bus <br/>Tickets</span></a>
                </div>
                <div className="box_04">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/729997/1696910636390.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://tickets.paytm.com/trains/" style={{textDecoration:"none",color:"white"}}>
                  <span>Train<br/>Tickets</span></a>
                </div>
                <div className="box_05">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/729998/1666185237748.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://paytminsurance.co.in/" style={{textDecoration:"none",color:"white"}}>
                  <span>Buy<br/>Insurance</span></a>
                </div>
                <div className="box_6">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://tickets.paytm.com/international-flights/" style={{textDecoration:"none",color:"white"}}>
                  <span>International<br/>Flights</span></a>
                </div>
                <div className="box_7">
                  <img src="https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png" alt="" style={{width:"60px" ,marginLeft:"10px"}} />
                  <a href="https://www.paytmmoney.com/" style={{textDecoration:"none",color:"white"}}>
                  <span>Invest<br/>Stocks<br/></span></a>
                </div>
                </div>
            </div>

            {/* /section4/ */}

            <div className="title">
              <h1>Paytm Payment Instruments</h1>
              <div className="container_4">
              <div className="container_left">
                  <div className="container_left_1">
                     <img src="https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png" alt="" style={{width:"80px",height:"80px"}} />
                     <span>Patym <br/> Wallets</span>
                </div>
              <div className="container_left_2">
                <span>The Fastest Way to<br/> Pay In-store & Online.</span>
              </div>
              <div className="container_left_3">
                <span>Load up your Paytm Wallet for free and make payments<br/> in a jiffy at over 21 million stores, websites and apps</span>
              </div>
              <div className="container_left_4">
              <div className="left2">
              <a href="https://apps.apple.com/in/app/paytm-secure-upi-payments/id473941634" style={{textDecoration:"none",color:"white"}}><span>Download Patym App</span>
              <FaApple  style={{marginLeft:"20px"}}/>
               <BiLogoPlayStore style={{marginLeft:"5px"}} />
               </a>
               </div>
              </div>
              </div>
              <div className="container_right">
                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png" alt="" />
              </div>
            </div>
            
            <div className="container_4">
              <div className="container_left">
                  <div className="container_left_1">
                     <img src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png" alt="" style={{width:"80px",height:"80px"}} />
                     <span>UPI Money<br/>Transfer</span>
                </div>
              <div className="container_left_2">
                <span>Pay anyone directly<br/> from your bank<br/> account.</span>
              </div>
              <div className="container_left_3">
                <span>Pay anyone, everywhere. Make contactless & secure<br/> payments in-stores or online using Paytm Wallet or<br/>Directly from your Bank Account. Plus, send & receive<br/>money from anyone.</span>
              </div>
              <div className="container_left_4">
              <div className="left2">
              <a href="https://apps.apple.com/in/app/paytm-secure-upi-payments/id473941634" style={{textDecoration:"none",color:"white"}}><span>Download Patym App</span>
              <FaApple  style={{marginLeft:"20px"}}/>
               <BiLogoPlayStore style={{marginLeft:"5px"}} />
               </a>
               </div>
              </div>
              </div>
              <div className="container_right">
                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png" alt="" />
              </div>
            </div>



            
            </div>


           
             
            
            
    </div>



      

   
  )
}

export default Body