import React from 'react'
import axios from 'axios';
class Home extends React.Component
{
    render()
    {
    return (
            <>
            <section class="slides">
         <div id="carouselBasicExample" class="carousel slide carousel-fade"data-mdb-ride="carousel">
          
            <div class="carousel-indicators">
               <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" ></button>
               <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1" aria-label="Slide 2" ></button>
               <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2" aria-label="Slide 3"></button>
            </div>
       
            <div class="carousel-inner">
             
               <div class="carousel-item active">
                  <img src="img/banner-bg-img1.png" class="d-block w-100" alt="..." />
                  <div class="carousel-caption vdo-carousel-caption mb-5">
                     <div class="animated fadeInDown position-absolute carousel-custome">
                        <div class="container">
                           <div class="row">
                              <div class="col-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                                 <h2>General <br/>
                                    Hard Surface<br/>
                                    Cleaners
                                 </h2>
                                 <p class="mt-3">All purpose floor and wall cleaner</p>
                                 <h3 class="d-flex align-items-center">£60<span class="ms-4">£75</span></h3>
                                 <button class="btn btn-slider mt-3">Buy now</button>
                              </div>
                              <div class="col-6 d-flex align-items-end justify-content-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
                                 <figure class="position-relative">                           
                                    <img src="img/side1-product.png" class="img-fluid" alt=""/>
                                    <span class="badge bg-danger badge-dot">12% <br/>Off</span>
                                 </figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            
               <div class="carousel-item">
                  <img src="img/banner-bg-img1.png" class="d-block w-100" alt="..." />
                  <div class="carousel-caption vdo-carousel-caption mb-5">
                     <div class="animated fadeInDown position-absolute carousel-custome">
                        <div class="container">
                           <div class="row">
                              <div class="col-6">
                                 <h2>General <br/>
                                    Hard Surface<br/>
                                    Cleaners
                                 </h2>
                                 <p class="mt-3">All purpose floor and wall cleaner</p>
                                 <h3 class="d-flex align-items-center">£60<span class="ms-4">£75</span></h3>
                                 <button class="btn btn-slider mt-3">Buy now</button>
                              </div>
                              <div class="col-6 d-flex align-items-end justify-content-center">
                                 <figure class="position-relative">                           
                                    <img src="img/side1-product.png" class="img-fluid" alt=""/>
                                    <span class="badge bg-danger badge-dot">12% <br/>Off</span>
                                 </figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div class="carousel-item">
                  <img src="img/banner-bg-img1.png" class="d-block w-100" alt="..." />
                  <div class="carousel-caption vdo-carousel-caption mb-5">
                     <div class="animated fadeInDown position-absolute carousel-custome">
                        <div class="container">
                           <div class="row">
                              <div class="col-6">
                                 <h2>General <br/>
                                    Hard Surface<br/>
                                    Cleaners
                                 </h2>
                                 <p class="mt-3">All purpose floor and wall cleaner</p>
                                 <h3 class="d-flex align-items-center">£60<span class="ms-4">£75</span></h3>
                                 <button class="btn btn-slider mt-3">Buy now</button>
                              </div>
                              <div class="col-6 d-flex align-items-end justify-content-center">
                                 <figure class="position-relative">                           
                                    <img src="img/side1-product.png" class="img-fluid" alt=""/>
                                    <span class="badge bg-danger badge-dot">12% <br/>Off</span>
                                 </figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
           
         </div>
      </section>
      <section class="py-0 sec1-product">
         <div class="container-fluid">
            <div class="row row-cols-1 row-cols-md-2 g-3">
               <div class="d-flex mt-0">
                  <div class="card mb-3 p-3 pinkbg-card p-lg-5 d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                     <div class="row g-0">
                        <div class="col-md-8">
                           <div class="card-body">
                              <h5 class="card-title"> Buy Toilet Tissue <br />
                                 Online 
                              </h5>
                              <p class="card-text py-3">Toilet Paper at great prices.</p>
                              <a href="#" class="btn btn-primary">Buy now</a>
                           </div>
                        </div>
                        <div class="col-md-4 d-flex align-items-center">
                           <img src="img/toilet-tissue-online.png" alt="..." class="img-fluid" />
                        </div>
                     </div>
                  </div>
               </div>
               <div class=" d-flex mt-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
                  <div class="card mb-3 p-3 vialot-card p-lg-5  d-flex">
                     <div class="row g-0">
                        <div class="col-md-4 d-flex align-items-center">
                           <img src="img/buckets-bowls.png" alt="..." class="img-fluid" />
                        </div>
                        <div class="col-md-8 even-slide">
                           <div class="card-body">
                              <h5 class="card-title"> Mops, Buckets <br />
                                 & Bowls 
                              </h5>
                              <p class="card-text py-3">Buckets & Bowls from a great 
                                 Selection, buy online.
                              </p>
                              <a href="#" class="btn btn-primary">Buy now</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="d-flex mt-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
                  <div class="card mb-3 p-3 vialot-card p-lg-5 d-flex">
                     <div class="row g-0">
                        <div class="col-md-8">
                           <div class="card-body">
                              <h5 class="card-title"> Washing Up <br />
                                 Liquids
                              </h5>
                              <p class="card-text py-3">Recommended for general
                                 cleaning
                              </p>
                              <a href="#" class="btn btn-primary">Buy now</a>
                           </div>
                        </div>
                        <div class="col-md-4 d-flex align-items-center">
                           <img src="img/washing-liquids.png" alt="..." class="img-fluid" />
                        </div>
                     </div>
                  </div>
               </div>
               <div class=" d-flex mt-0">
                  <div class="card mb-3 p-3 pinkbg-card p-lg-5  d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                     <div class="row g-0">
                        <div class="col-md-4 d-flex align-items-center">
                           <img src="img/washroom-soaps.png" alt="..." class="img-fluid" />
                        </div>
                        <div class="col-md-8 even-slide">
                           <div class="card-body">
                              <h5 class="card-title"> Washroom <br />
                                 Soaps & <br />
                                 Cleaners 
                              </h5>
                              <p class="card-text py-3">Wide range of quality products</p>
                              <a href="#" class="btn btn-primary">Buy now</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="featured-products" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
         <div class="container">
            <div class="row">
               <h2 class="py-3 py-md-4">Featured Products</h2>
            
               <div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center" data-mdb-ride="carousel" >
                 
                  <div class="carousel-inner py-1">
                   
                     <div class="carousel-item active">
                        <div class="container">
                           <div class="row">
                              <div class="col-12 col-lg-3 col-md-12 my-3 d-flex">
                                 <a href="product-detail.html">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/atlas-green-detergent.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">10D - Atlas Green
                                          Detergent 10%
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£9.55<span class="ms-3">£9.55</span></h3>
                                    </div>
                                 </div>
                                 </a>
                              </div>
                              <div class="col-12 col-lg-3 col-md-12 my-3 d-none d-lg-flex">
                                 <a href="product-detail.html">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/dustbeater-replacement.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Dustbeater
                                          Replacement Hd
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£12.15<span class="ms-3">£19.55</span></h3>
                                    </div>
                                 </div>
                                 </a>
                              </div>
                              <div class="col-12 col-lg-3 col-md-12 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/swing-bin.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Swing Bin-Various
                                          Colours
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£29.55<span class="ms-3">£39.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-12 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/disposable-dish-cloths.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Disposable 
                                          Dish Cloths
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£18.15<span class="ms-3">£49.25</span></h3>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="container">
                           <div class="row">
                           
                              <div class="col-12 col-lg-3 col-md-12 my-3 d-flex d-lg-none">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/dustbeater-replacement.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Dustbeater
                                          Replacement Hd
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£12.15<span class="ms-3">£19.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              


                              <div class="col-12 col-lg-3 col-md-12 my-3 d-lg-flex d-none">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/atlas-green-detergent.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">10D - Atlas Green
                                          Detergent 10%
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£9.55<span class="ms-3">£9.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-6 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/dustbeater-replacement.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Dustbeater
                                          Replacement Hd
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£12.15<span class="ms-3">£19.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-6 ">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/swing-bin.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Swing Bin-Various
                                          Colours
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£29.55<span class="ms-3">£39.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-6 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/disposable-dish-cloths.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Disposable 
                                          Dish Cloths
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£18.15<span class="ms-3">£49.25</span></h3>
                                    </div>
                                 </div>
                              </div>




                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="container">
                           <div class="row">
                        
                              <div class="col-12 col-lg-3 col-md-12 my-3 d-flex d-lg-none">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/swing-bin.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Swing Bin-Various
                                          Colours
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£29.55<span class="ms-3">£39.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                            


                              <div class="col-12 col-lg-3 col-md-12 my-3 d-lg-flex d-none">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/atlas-green-detergent.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">10D - Atlas Green
                                          Detergent 10%
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£9.55<span class="ms-3">£9.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-6 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/dustbeater-replacement.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Dustbeater
                                          Replacement Hd
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£12.15<span class="ms-3">£19.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-6 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/swing-bin.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Swing Bin-Various
                                          Colours
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£29.55<span class="ms-3">£39.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-6 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/disposable-dish-cloths.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Disposable 
                                          Dish Cloths
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£18.15<span class="ms-3">£49.25</span></h3>
                                    </div>
                                 </div>
                              </div>




                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="container">
                           <div class="row">
                              <div class="col-12 col-lg-3 col-md-12 my-3 d-flex d-lg-none">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/disposable-dish-cloths.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Disposable 
                                          Dish Cloths
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£18.15<span class="ms-3">£49.25</span></h3>
                                    </div>
                                 </div>
                              </div>
                             


                              <div class="col-12 col-lg-3 col-md-12 my-3 d-lg-flex d-none">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/atlas-green-detergent.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">10D - Atlas Green
                                          Detergent 10%
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£9.55<span class="ms-3">£9.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-6 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/dustbeater-replacement.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Dustbeater
                                          Replacement Hd
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£12.15<span class="ms-3">£19.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-6 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/swing-bin.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Swing Bin-Various
                                          Colours
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£29.55<span class="ms-3">£39.55</span></h3>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-lg-3 col-md-6 my-3 d-none d-lg-flex">
                                 <div class="card w-100">
                                    <div class="product-image d-flex">
                                       <img src="img/disposable-dish-cloths.png" class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                       <h5 class="card-title">Disposable 
                                          Dish Cloths
                                       </h5>
                                       <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£18.15<span class="ms-3">£49.25</span></h3>
                                    </div>
                                 </div>
                              </div>




                           </div>
                        </div>
                     </div>
                  </div>
              
                  <div class="d-flex justify-content-center mb-4">
                     <button class="carousel-control-prev position-relative" type="button" data-mdb-target="#carouselMultiItemExample" data-mdb-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Previous</span>
                     </button>
                     <button class="carousel-control-next position-relative" type="button" data-mdb-target="#carouselMultiItemExample" data-mdb-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Next</span>
                     </button>
                  </div>
               </div>
            
            </div>
         </div>
      </section>
      <section class="info-sec">
         <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-0 g-lg-5">
               <div class="d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
                  <div class="card w-100">
                     <img src="img/delivery-truck.svg" class="card-img-top" alt="..." />
                     <div class="card-body">
                        <h5 class="card-title">FREE SHIPPING</h5>
                        <p>Orders over £50</p>
                     </div>
                  </div>
               </div>
               <div class="d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <div class="card w-100">
                     <img src="img/Layer_1.svg" class="card-img-top" alt="..." />
                     <div class="card-body">
                        <h5 class="card-title">BEST PRICE</h5>
                        <p>Guaranteed</p>
                     </div>
                  </div>
               </div>
               <div class="d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1800">
                  <div class="card w-100">
                     <img src="img/padlock.svg" class="card-img-top" alt="..." />
                     <div class="card-body">
                        <h5 class="card-title">100% SECURE</h5>
                        <p class="card-text">Online Shopping</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="best-sellers">
         <div class="container">
            <h2 class="text-center my-3 my-md-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">BEST SELLERS</h2>
            <div class="row row-cols-1 row-cols-md-2 g-1 g-lg-5">
               <div class="col d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <div class="card bg-dark text-white w-100 single-product">
                     <img src="img/best-seller.jpg" class="card-img" alt="..." />
                     <div class="card-img-overlay p-4 p-lg-5">
                        <h5 class="card-title">Dispensers</h5>
                        <p class="card-text">Works by pushing on base of
                           front face plate.
                        </p>
                        <a href="#" class="btn btn-primary btn-collections">View  collections</a>
                     </div>
                  </div>
               </div>
               <div class="col d-flex">
                  <div class="row g-3 g-md-4">
                     <div class="col-12 d-flex card-shadow" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                        <div class="col-md-4 d-flex align-items-center">
                           <img src="img/first-aid-kit.png" alt="..." class="img-fluid"/>
                        </div>
                        <div class="card mb-3 pinkbg-card p-3 d-flex w-100">
                           <div class="row g-0">
                              <div class="col-md-8">
                                 <div class="card-body">
                                    <h5 class="card-title"> Catering First <br />
                                       Aid Kit 
                                    </h5>
                                    <h3 class="d-flex align-items-center">£29.55<span class="ms-3">£63.55</span></h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-12 d-flex card-shadow" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
                        <div class="col-md-4 d-flex align-items-center">
                           <img src="img/safety-helmet.png" alt="..." class="img-fluid"/>
                        </div>
                        <div class="card mb-3 pinkbg-card p-3 d-flex w-100">
                           <div class="row g-0">
                              <div class="col-md-8">
                                 <div class="card-body">
                                    <h5 class="card-title"> Mark 2 <br />
                                       Safety Helmet 
                                    </h5>
                                    <h3 class="d-flex align-items-center">£19.55<span class="ms-3">£19.55</span></h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-12 d-flex card-shadow" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1800">
                        <div class="col-md-4 d-flex align-items-center">
                           <img src="img/visibility-workwear.png" alt="..." class="img-fluid"/>
                        </div>
                        <div class="card mb-3 pinkbg-card p-3 d-flex w-100">
                           <div class="row g-0">
                              <div class="col-md-8">
                                 <div class="card-body">
                                    <h5 class="card-title"> High Visibility <br />
                                       Workwear
                                    </h5>
                                    <h3 class="d-flex align-items-center">£23.55<span class="ms-3">£12.55</span></h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="mail-sec" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
         <div class="container">
            <div class="email-img">
               <h2 class="my-2 my-lg-5 text-center">Join our newsletter and get <br />
                  £5 discount for your first order
               </h2>
               <form class="input-group w-50 m-auto">
                  <input type="email" class="form-control" placeholder="Your-Email" aria-label="email"/>
                  <button class="btn btn-outline-primary email-btn" type="button" data-mdb-ripple-color="dark"> <img src="img/email.png" alt=""/> </button>
               </form>
            </div>
         </div>
      </section>
            </>
            );
       }
      }
      //export default Home;
      export default Home;
      