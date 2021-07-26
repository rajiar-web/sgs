import React, { useState }  from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Footer() 
{

    
    
    
      
	
        return(
           <div>
         <footer>
         <div class="container">
            <div class="row row-cols-1 row-cols-lg-4 row-cols-sm-2">
               <div class="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                  <h2>Information</h2>
                  <ul>
                     <li><a href="#"> Delivery information </a></li>
                     <li><a href="#"> Privacy Policy</a></li>
                     <li><a href="#"> Terms & Conditions</a></li>
                  </ul>
               </div>
               <div class="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
                  <h2>Account</h2>
                  <ul>
                     <li><a href="#"> My account </a></li>
                     <li><a href="#"> My orders</a></li>
                     <li><a href="#"> Returns</a></li>
                     <li><a href="#"> Shipping</a></li>
                     <li><a href="#"> Wishlist</a></li>
                  </ul>
               </div>
               <div class="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1600">
                  <h2>Store</h2>
                  <ul>
                     <li><a href="#"> Bestsellers </a></li>
                     <li><a href="#"> Discount</a></li>
                     <li><a href="#"> Latest products</a></li>
                  </ul>
               </div>
               <div class="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="2000">
                  <h2>Need help</h2>
                  <ul class="mb-2">
                     <li class="phn"><a href="tel:01513488990"> 0151 348 8990 </a></li>
                     <li>Monday - Friday : 9AM - 5PM</li>
                     <li>Saturday :  10 AM - 4 AM</li>
                  </ul>
                  <ul class="d-flex justify-content-center justify-content-sm-start">
                     <li>
                        <a href="#" class="px-2" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                        </a>
                     </li>
                     <li>
                        <a href="#" class="px-2" target="_blank">
                        <i class="fab fa-twitter"></i>
                        </a>
                     </li>
                     <li>               
                        <a href="#" class="px-2" target="_blank">
                        <i class="fab fa-youtube"></i>
                        </a>
                     </li>
                     <li>
                        <a href="#" class="px-2" target="_blank">
                        <i class="fab fa-instagram"></i>
                        </a>
                     </li>
                     <li>
                        <a href="#" class="px-2" target="_blank">
                        <i class="fab fa-linkdin"></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
 
 <section class="payment-foot">
<div class="container">
   <div class="row">
      <div class="col-12 col-md-8 d-flex align-items-center">
         <p>Copyright © 2021 Specialist Global Systems. All Rights Reserved. | Powered By Hintt</p>
      </div>
      <div class="col-12 col-md-4 payment-footer">
         <img src="img/payment-ico.svg" class="img-fluid" alt="" />
      </div>
   </div>
</div>
</section> 
</div>
      )
        
    
}



export default Footer;

