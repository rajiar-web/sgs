import React, { Component } from 'react';
class Header extends React.Component 
{
  
    render() 
    {
      return(
        <div>
        <section class="top-banner" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
         <div class="container">
             <div class="row">
               <div class="col-12 d-block d-md-flex justify-content-between">
                  <ul class="d-flex d-md-flex info">
                      <li><a href="mailto:specialistmattress@live.com"></a>specialistmattress@live.com</li>
                      <li class="d-none d-sm-block">Sales : <a href="tel:0800 015 5585">0800 015 5585</a></li>
                      <li class="m-right">Support : <a href="tel:0151 348 8990">0151 348 8990</a></li>
                   </ul>
                   <ul class="d-none d-md-flex">
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
       </section>
      <header>
         <div class="col-12" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
            <div class="container">
               <nav class="navbar navbar-expand-lg navbar-light">
                  
                  <div class="container-fluid">
                    
                     <a class="navbar-brand" href="index.html"><img src="img/logo.svg" alt="" /></a>
                   
                     <form class="d-md-flex input-group w-50 form-search d-none">
                        <input type="search" class="form-control" placeholder="Search Products" aria-label="Search" />
                        <button class="btn btn-outline-primary search-btn" type="button" data-mdb-ripple-color="dark"><i class="fas fa-search"></i></button>
                     </form>
                     <div class="d-none d-md-flex">
                       
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                           <li class="nav-item mx-3 mx-xl-5 mx-lg-3 mx-md-3">
                              <a class="nav-link sign-in" href="login-signup"><i class="far fa-user mx-2"></i>Sign In / Sign Up</a>
                           </li>
                           <li class="nav-item">
                              <a href="" class="cart">
                              <i class="fas fa-cart-arrow-down"></i>
                              <span class="badge rounded-pill badge-notification bg-danger">0</span>
                              </a>
                           </li>
                        </ul>
                      
                     </div>
                  
                  </div>
                
               </nav>
            </div>
         </div>
      </header>
      <div class="droopmenu-navbar custom-menu">
         <div class="droopmenu-inner container d-flex  justify-content-between" >
            <div class="d-flex align-items-center d-md-none">
               <form class="d-flex input-group w-50 form-search">
                  <input type="search" class="form-control" placeholder="Search Products" aria-label="Search" />
                  <button class="btn btn-outline-primary search-btn" type="button" data-mdb-ripple-color="dark"><i class="fas fa-search"></i></button>
               </form>
               <div>
               
                  <ul class="mb-2 mb-lg-0 d-flex align-items-center">
                     <li class="nav-item mx-3 mx-xl-5 mx-lg-3 mx-md-3">
                        <a class="nav-link sign-in" href="#"><i class="far fa-user mx-2"></i></a>
                     </li>
                     <li class="nav-item">
                        <a href="" class="cart">
                        <span class="badge rounded-pill badge-notification bg-danger">0</span>
                        <i class="fas fa-cart-arrow-down"></i>
                        </a>
                     </li>
                  </ul>
              
               </div>
            </div>
            <div class="droopmenu-header">
               <a href="#" class="droopmenu-toggle"></a>                
            </div>
          
            <div class="droopmenu-nav">
               <ul class="droopmenu">
                  <li><a href="#">All Products</a></li>
                  <li>
                     <a href="#">Tissues & Towels</a>
                     <ul class="droopmenu-grid droopmenu-grid-4">
                        <li class="droopmenu-grid-container">
                           <div class="droopmenu-row">
                              <ul class="droopmenu-col droopmenu-col6">
                                 <li>
                                    <h4> SWEATERS </h4>
                                 </li>
                                 <li><a href="#">Light Sweaters</a></li>
                                 <li><a href="#">Woolen Sweaters</a></li>
                                 <li><a href="#">Knitwear Sweaters</a></li>
                                 <li><a href="#">Cardigans Sweaters</a></li>
                                 <li><a href="#">Hoodie Sweaters</a></li>
                              </ul>
                              <ul class="droopmenu-col droopmenu-col6">
                                 <li>
                                    <h4> TSHIRTS </h4>
                                 </li>
                                 <li><a href="#">Polo Tshirts</a></li>
                                 <li><a href="#">Henley Tshirts</a></li>
                                 <li><a href="#">V-neck Tshirts</a></li>
                                 <li><a href="#">Striped Tshirts</a></li>
                                 <li><a href="#">Hooded Tshirts</a></li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="#">Cleaners</a>
                     <ul class="droopmenu-grid droopmenu-grid-4">
                        <li class="droopmenu-grid-container">
                           <div class="droopmenu-row">
                              <ul class="droopmenu-col droopmenu-col6">
                                 <li>
                                    <h4> SWEATERS </h4>
                                 </li>
                                 <li><a href="#">Light Sweaters</a></li>
                                 <li><a href="#">Woolen Sweaters</a></li>
                                 <li><a href="#">Knitwear Sweaters</a></li>
                                 <li><a href="#">Cardigans Sweaters</a></li>
                                 <li><a href="#">Hoodie Sweaters</a></li>
                              </ul>
                              <ul class="droopmenu-col droopmenu-col6">
                                 <li>
                                    <h4> TSHIRTS </h4>
                                 </li>
                                 <li><a href="#">Polo Tshirts</a></li>
                                 <li><a href="#">Henley Tshirts</a></li>
                                 <li><a href="#">V-neck Tshirts</a></li>
                                 <li><a href="#">Striped Tshirts</a></li>
                                 <li><a href="#">Hooded Tshirts</a></li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="#">Wet Wipes</a>
                     <ul>
                        <li>
                           <a href="#">Women Accessories</a>
                           <ul>
                              <li><a href="#">Belts</a></li>
                              <li><a href="#">Bags</a></li>
                              <li><a href="#">Jewelery</a></li>
                              <li><a href="#">Hats</a></li>
                              <li><a href="#">Eyewear</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="#">Mens Accessories</a>
                           <ul>
                              <li><a href="#">Belts</a></li>
                              <li><a href="#">Hats</a></li>
                              <li><a href="#">Eyewear</a></li>
                           </ul>
                        </li>
                        <li><a href="#">Teens Accesories</a></li>
                        <li><a href="#">Kids Accesories</a></li>
                     </ul>
                  </li>
                  <li>
                     <a href="listing.html"> Toilet Rolls</a>
                     <ul>
                        <li class="droop-left">
                           <a href="#">Womens</a>
                           <ul>
                              <li><a href="#">Sandals</a></li>
                              <li class="droop-left">
                                 <a href="#">Sneakers</a>
                                 <ul>
                                    <li><a href="#">Adidas</a></li>
                                    <li><a href="#">Converse</a></li>
                                    <li><a href="#">Saint Laurent</a></li>
                                    <li><a href="#">Timberland</a></li>
                                    <li><a href="#">Reebok</a></li>
                                    <li><a href="#">Puma</a></li>
                                    <li><a href="#">Nike</a></li>
                                 </ul>
                              </li>
                              <li><a href="#">Wedges</a></li>
                              <li><a href="#">Heels</a></li>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Flats</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="#">Mens</a>
                           <ul>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Sneakers</a></li>
                              <li><a href="#">Formal</a></li>
                           </ul>
                        </li>
                        <li><a href="#">Teens</a></li>
                        <li><a href="#">Kids</a></li>
                     </ul>
                  </li>
                  <li>
                     <a href="#"> Floor Care</a>
                     <ul>
                        <li class="droop-left">
                           <a href="#">Womens</a>
                           <ul>
                              <li><a href="#">Sandals</a></li>
                              <li class="droop-left">
                                 <a href="#">Sneakers</a>
                                 <ul>
                                    <li><a href="#">Adidas</a></li>
                                    <li><a href="#">Converse</a></li>
                                    <li><a href="#">Saint Laurent</a></li>
                                    <li><a href="#">Timberland</a></li>
                                    <li><a href="#">Reebok</a></li>
                                    <li><a href="#">Puma</a></li>
                                    <li><a href="#">Nike</a></li>
                                 </ul>
                              </li>
                              <li><a href="#">Wedges</a></li>
                              <li><a href="#">Heels</a></li>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Flats</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="#">Mens</a>
                           <ul>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Sneakers</a></li>
                              <li><a href="#">Formal</a></li>
                           </ul>
                        </li>
                        <li><a href="#">Teens</a></li>
                        <li><a href="#">Kids</a></li>
                     </ul>
                  </li>
                  <li>
                     <a href="#"> Washroom items</a>
                     <ul>
                        <li class="droop-left">
                           <a href="#">Womens</a>
                           <ul>
                              <li><a href="#">Sandals</a></li>
                              <li class="droop-left">
                                 <a href="#">Sneakers</a>
                                 <ul>
                                    <li><a href="#">Adidas</a></li>
                                    <li><a href="#">Converse</a></li>
                                    <li><a href="#">Saint Laurent</a></li>
                                    <li><a href="#">Timberland</a></li>
                                    <li><a href="#">Reebok</a></li>
                                    <li><a href="#">Puma</a></li>
                                    <li><a href="#">Nike</a></li>
                                 </ul>
                              </li>
                              <li><a href="#">Wedges</a></li>
                              <li><a href="#">Heels</a></li>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Flats</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="#">Mens</a>
                           <ul>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Sneakers</a></li>
                              <li><a href="#">Formal</a></li>
                           </ul>
                        </li>
                        <li><a href="#">Teens</a></li>
                        <li><a href="#">Kids</a></li>
                     </ul>
                  </li>
                  <li>
                     <a href="#"> Polishes</a>
                     <ul>
                        <li class="droop-left">
                           <a href="#">Womens</a>
                           <ul>
                              <li><a href="#">Sandals</a></li>
                              <li class="droop-left">
                                 <a href="#">Sneakers</a>
                                 <ul>
                                    <li><a href="#">Adidas</a></li>
                                    <li><a href="#">Converse</a></li>
                                    <li><a href="#">Saint Laurent</a></li>
                                    <li><a href="#">Timberland</a></li>
                                    <li><a href="#">Reebok</a></li>
                                    <li><a href="#">Puma</a></li>
                                    <li><a href="#">Nike</a></li>
                                 </ul>
                              </li>
                              <li><a href="#">Wedges</a></li>
                              <li><a href="#">Heels</a></li>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Flats</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="#">Mens</a>
                           <ul>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Sneakers</a></li>
                              <li><a href="#">Formal</a></li>
                           </ul>
                        </li>
                        <li><a href="#">Teens</a></li>
                        <li><a href="#">Kids</a></li>
                     </ul>
                  </li>
                  <li>
                     <a href="#"> Waste Bins</a>
                     <ul>
                        <li class="droop-left">
                           <a href="#">Womens</a>
                           <ul>
                              <li><a href="#">Sandals</a></li>
                              <li class="droop-left">
                                 <a href="#">Sneakers</a>
                                 <ul>
                                    <li><a href="#">Adidas</a></li>
                                    <li><a href="#">Converse</a></li>
                                    <li><a href="#">Saint Laurent</a></li>
                                    <li><a href="#">Timberland</a></li>
                                    <li><a href="#">Reebok</a></li>
                                    <li><a href="#">Puma</a></li>
                                    <li><a href="#">Nike</a></li>
                                 </ul>
                              </li>
                              <li><a href="#">Wedges</a></li>
                              <li><a href="#">Heels</a></li>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Flats</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="#">Mens</a>
                           <ul>
                              <li><a href="#">Loafers</a></li>
                              <li><a href="#">Sneakers</a></li>
                              <li><a href="#">Formal</a></li>
                           </ul>
                        </li>
                        <li><a href="#">Teens</a></li>
                        <li><a href="#">Kids</a></li>
                     </ul>
                  </li>
               </ul>
            </div>
           
         </div>
        
      </div>
      </div>

      )
        
    }
}



export default Header;