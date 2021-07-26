import React from 'react';

class Cart extends React.Component 
{
    

    render() 
    {
         
      return(
        
        <div>


    
      <section class="single-product-sec">
         <div class="container">
            <div class="row col-12">
               <div class="col-12 mt-3 mt-lg-5 mb-2 mb-lg-3" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="600">
                  <nav class="arrow-devider" aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                     </ol>
                  </nav>
               </div>
            </div>
            
          
            <div class="row row-cols-1 row-cols-md-2 checkout-page cart-page" >
               <div class="col coupen-box mb-4 cart-items">
                  <div class="row row-cols-1">
                  <div class="col px-4 py-2 ">
                     <div class="row p-3 card-white">
                        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
                           <img src="img/atlas-green-detergent.png" class="img-thumbnail" alt=""/>
                        </div>
                        <div class="col-12 col-md-9">
                        <div class="row row-cols-2 py-3">
                           <p class="coupen-title">10D - Atlas Green etergent</p>
                           <p class="d-flex expect-date justify-content-end">Delivery in 2 days, Sun</p>
                           <p class="mt-3 price-product-checkout d-flex align-items-center">	£9.55 <span class="ms-2">£9.55</span></p>
                           <div class="col-12 d-block d-lg-flex align-items-center">
                              <label for="qtynumber" class="me-0 me-md-4">QTY</label>
                              <div class="border-1">
                                 <div class="value-button border-end-0" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                 <input type="number" id="number" name="qtynumber" value="0"/>
                                 <div class="value-button border-start-0" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                              </div>
                              <button type="button" class="btn btn-primary remove-btn qty-btn ms-0 ms-md-4 mt-3 mt-lg-0" data-mdb-toggle="popover" data-mdb-placement="bottom" data-mdb-content="Item Removed">Remove</button>
                           </div>
                        </div>
                        </div>
                     </div>
                  </div>

               </div>
               </div>


               <div class="col">
                  <h2 class="mb-3 mb-lg-4">Your order</h2>
                  <table class="table table-striped border">
                     <thead>
                       <tr>
                         <th scope="col">Product</th>
                         <th scope="col">Subtotal</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <th scope="row">10D - Atlas Green etergent</th>
                         <td>£9.55</td>
                       </tr>
                   
                       <tr>
                         <th scope="row">Dustbeater Replacement Hd</th>
                         <td>£12.15</td>
                       </tr>
                       <tr>
                         <th scope="row" class=" txt-bold">Total</th>
                         <td class=" txt-bold">£21.7</td>
                       </tr>
                     </tbody>
                   </table>
                   <div class="col d-flex justify-content-lg-end justify-content-center">
                     <a href="checkout-page.html" class="btn btn-dark text-right mt-3 mt-lg-3 place-ordr">Proceed to checkout</a>
                  </div>
               </div>
            </div>
         </div>
      </section>


        </div>



)
        
}
}



export default Cart;