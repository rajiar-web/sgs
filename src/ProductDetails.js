import React from 'react';

class ProductDetails extends React.Component 
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
                        <li class="breadcrumb-item" aria-current="page"><a href="#">Cleners </a></li>
                        <li class="breadcrumb-item active" aria-current="page">Floor Gels </li>
                     </ol>
                  </nav>
               </div>
               <div class="col-5 col-lg-5 single-product-prev" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <figure class="w-100">
                     <img src="img/detail-product.png" alt="" class="img-fluid"/>
                     <span class="badge bg-danger badge-dot">12% <br/>Off</span>
                  </figure>
               </div>
               <div class="col-7 col-lg-7 single-product-disc ps-2 ps-lg-5"  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
                  <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">Lem - evans lemon gel</h2>
                  <h3 class="d-flex align-items-center justify-content-start justify-content-lg-start mb-1 mb-lg-4">£29.55<span class="ms-3">£39.55</span></h3>
                  <form class="mb-3 mb-lg-5">
                     <div class="row">
                        <div class="col-12 d-block d-md-flex align-items-center">
                           <label for="qtynumber" class="me-0 me-md-4">QTY</label>
                           <div class="">
                              <div class="value-button border-end-0" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                              <input type="number" id="number" name="qtynumber" value="0" />
                              <div class="value-button border-start-0" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                           </div>
                           <button type="button" class="btn btn-primary qty-btn ms-0 ms-md-4 mt-3 mt-lg-0">Buy now</button>
                        </div>
                     </div>
                  </form>
                  <ul>
                     <li>Neutral Cleaning Gel</li>
                     <li>General purpose floor and wall cleaning gel and deodoriser</li>
                     <li>Ideal for damp mopping and spray cleaning</li>
                     <li>Distinctive long lasting citrus fragrance</li>
                     <li>5 Ltr</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
      <section class="info-sec detail-info">
         <div class="container">
               <div class="detail-product-info">
            <div class="row row-cols-1 row-cols-md-3 g-0 g-lg-5 p-5 p-lg-3">
               <div class="d-flex aos-init aos-animate" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
                  <div class="card w-100">
                     <img src="img/delivery-truck.svg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">FREE SHIPPING</h5>
                        <p>Orders over £50</p>
                     </div>
                  </div>
               </div>
               <div class="d-flex aos-init aos-animate" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <div class="card w-100">
                     <img src="img/Layer_1.svg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">BEST PRICE</h5>
                        <p>Guaranteed</p>
                     </div>
                  </div>
               </div>
               <div class="d-flex aos-init aos-animate" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1800">
                  <div class="card w-100">
                     <img src="img/padlock.svg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">100% SECURE</h5>
                        <p class="card-text">Online Shopping</p>
                     </div>
                  </div>
               </div>
               </div>
            </div>
         </div>
      </section>
      <section class="related-product">
         <div class="container">
            <div class="row">
               <h2 class="my-2 mb-lg-5"  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">Related Products</h2>
               <div class="col-12 col-lg-3 col-md-12 my-3 d-flex aos-init aos-animate" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <div class="card w-100">
                     <div class="product-image d-flex">
                        <img src="img/atlas-green-detergent.png" class="card-img-top" alt="..."/>
                     </div>
                     <div class="card-body">
                        <h5 class="card-title">10D - Atlas Green
                           Detergent 10%
                        </h5>
                        <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£9.55<span class="ms-3">£9.55</span></h3>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-lg-3 col-md-12 my-3 d-flex aos-init aos-animate" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <div class="card w-100">
                     <div class="product-image d-flex">
                        <img src="img/dustbeater-replacement.png" class="card-img-top" alt="..."/>
                     </div>
                     <div class="card-body">
                        <h5 class="card-title">Dustbeater
                           Replacement Hd
                        </h5>
                        <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£12.15<span class="ms-3">£19.55</span></h3>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-lg-3 col-md-12 my-3 d-flex aos-init aos-animate" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <div class="card w-100">
                     <div class="product-image d-flex">
                        <img src="img/swing-bin.png" class="card-img-top" alt="..."/>
                     </div>
                     <div class="card-body">
                        <h5 class="card-title">Swing Bin-Various
                           Colours
                        </h5>
                        <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£29.55<span class="ms-3">£39.55</span></h3>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-lg-3 col-md-12 my-3 d-flex aos-init aos-animate" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <div class="card w-100">
                     <div class="product-image d-flex">
                        <img src="img/atlas-green-detergent.png" class="card-img-top" alt="..."/>
                     </div>
                     <div class="card-body">
                        <h5 class="card-title">10D - Atlas Green
                           Detergent 10%
                        </h5>
                        <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£9.55<span class="ms-3">£9.55</span></h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </div>
         )
        
        }
        }
        
        
        
        export default ProductDetails;