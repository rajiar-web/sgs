import React from 'react';

class UserProfile extends React.Component 
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
                        <li class="breadcrumb-item active" aria-current="page">My Account </li>
                     </ol>
                  </nav>
               </div>
            </div>
            <div class="row">
               <div class="col-4 col-lg-3 profile-sidebar card d-flex px-2 px-lg-3">
                  <div class="profile-view px-3">
                     <h3 class="d-flex align-items-center mb-0"> <span class="me-2"><img src="img/profile-pic.svg"  class="img-fluid"/></span> John Dio</h3>
                  </div>
                  <nav class="category profile-category d-flex align-content-between flex-wrap px-3">
                     <ul class="ctgul p-0 p-lg-2 w-100" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">

                        <li class="ctgli">
                           <a href="#" class="ctga">
                              <div class="ok"></div>
                              <i class="ti-layout"></i>
                              ACCOUNT SETTINGS
                              <i class="fas fa-chevron-down down"></i>
                           </a>
                           <ul class="ctgulChild">
                              <li class="ctgliChild">
                                 <a href="" class="ctgaChild" id="pro-info">Profile Information</a>
                              </li>
                              <li class="ctgliChild">
                                 <a href="" class="ctgaChild" id="manage-add"> Manage Addresses</a>
                              </li>
                           </ul>
                        </li>
                        <li class="ctgli">
                           <a href="#" class="ctga ">
                           <i class="ti-write"></i>
                           MY STUFF
                           <i class="fas fa-chevron-down down "></i>
                           </a>
                           <ul class="ctgulChild">
                              <li class="ctgliChild">
                                 <a href="" class="ctgaChild" id="my-coupon">My Coupons</a>
                              </li>
                           </ul>
                        </li>
                        <li class="ctgli">
                           <a href="#" class="ctga" id="my-order">
                              <div class="ok"></div>
                              <i class="ti-layout"></i>
                              MY ORDERS
                           </a>
                        </li>
                        <hr />
                        <li class="ctgli">
                           <a href="#" class="ctga" id="my-order">
                              Logout
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div class="col-8 col-lg-9 d-flex profile-box px-3 p-lg-4 ">
                  <div class="col-12">
                     <div class="row">
                     <div id="slide-1">
                        <h3>Personal Information <span class="ms-2"> <a href="#" id="edit-personal-info"> Edit </a></span></h3>
                        <hr />
                        <div id="personal-info">
                           <h4>John Dio</h4>
                           <p>johndeo@gmail.com</p>
                           <p>9999885244</p>
                        </div>
                        <div id="personal-info-fld" style={{display: "none"}}>
                           <div class="row row-cols-1 row-cols-lg-2">
                              <div class="col mt-3 mt-lg-4">
                                 <label for="fname" class="form-label">First Name</label>
                                 <input type="text" class="form-control" id="fname" placeholder="John"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <label for="lname" class="form-label">Last Name</label>
                                 <input type="text" class="form-control" id="lname" placeholder="Dio"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <label for="email" class="form-label">Email address</label>
                                 <input type="email" class="form-control" id="email" placeholder="user@email.com"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <label for="phone" class="form-label">Phone Number</label>
                                 <input type="text" class="form-control" id="phone" placeholder="99 999 9999"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <a href="#" data-mdb-toggle="modal" class="change-pwd-txt" data-mdb-target="#exampleModal"> Change Password</a>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col mt-3 mt-lg-4 mb-4">
                                 <a href="#" class="update-btn">Update</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="slide-2" style={{display: "none"}}>
                        <h3>Manage Addresses</h3>
                        <hr />
                        <a href="#" id="edit-personal-address">
                           <div class="col edit-add mb-3">
                              <span class="ms-2"> <i class="far fa-edit me-1"></i> Edit </span>
                           </div>
                        </a>
                        <div class="personal-address btn active">
                           <h4 class=" mt-3">John Dio</h4>  
                           <p>75 Malcolm Rd</p>
                           <p>LLANFROTHEN</p>
                           <p>LL48 0TQ</p>
                           <p>078 3865 8009</p>
                        </div>
                        <div class="personal-address btn">
                           <h4 class=" mt-3">John Dio</h4>  
                           <p>75 Malcolm Rd</p>
                           <p>LLANFROTHEN</p>
                           <p>LL48 0TQ</p>
                           <p>078 3865 8009</p>
                        </div>
                        <div id="personal-address-fld" class="personal-address-fld" style={{display: "none"}}>
                           <div class="row row-cols-1 row-cols-lg-2">
                              <div class="col mt-3 mt-lg-4">
                                 <input type="text" class="form-control" placeholder="Full Name:"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <input type="text" class="form-control" placeholder="Phone:"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <input type="text" class="form-control" placeholder="Address Line 1:"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <input type="text" class="form-control" placeholder="Address Line 2:"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <input type="text" class="form-control" placeholder="City:"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <input type="text" class="form-control" placeholder="State/Province/Region:"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <input type="text" class="form-control" placeholder="ZIP:"/>
                              </div>
                              <div class="col mt-3 mt-lg-4">
                                 <input type="text" class="form-control disable" placeholder="United Kingdom" disabled readonly />
                              </div>
                           </div>
                           <div class="row">                              
                             
                              <div class="col mt-3 mb-4 mt-lg-4">
                                 <a href="#" class="update-btn">Update</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="slide-3" style={{display: "none"}}>
                        <div class="row">
                           <div class="col-12">
                              <h3>Available Coupons</h3>
                              <hr />
                           </div>
                           <div class="col-12">
                              <div class="col p-4 coupen-box">
                                 <div class="row row-cols-2">
                                    <p class="coupen-title">Special Offer for New Customer</p>
                                    <p class="d-flex justify-content-end"></p>
                                    <p class="mt-3">Apply Coupon <b>GETI20</b> to get extra £10 off</p>
                                    <p class="d-flex justify-content-end mt-3"> <a href="#" class="t-c" data-mdb-toggle="modal" data-mdb-target="#tearms-c"> View T&C</a></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>




<div class="modal fade tearms-condition" id="tearms-c" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Terms and Conditions</h5>
      <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">...</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary tc-btn" data-mdb-dismiss="modal"> Close</button>
    </div>
  </div>
</div>
</div>
                     <div id="slide-4" style={{display: "none"}}>
                        <div class="row my-order-sec">
                           <div class="col-12">
                              <h3>My Orders</h3>
                              <hr />
                           </div>
                           <div class="col-12">
                              <div class="row">
                                 <div class="card mb-3 p-3 card-oredr-items">
                                    <div class="row g-0">
                                      <div class="col-md-2 d-flex justify-content-center align-items-center">
                                        <img src="img/atlas-green-detergent.png" alt="..." class="img-fluid img-thumbnail order-product-img" />
                                      </div>
                                      <div class="col-md-10 d-flex align-items-center">
                                        <div class="card-body">
                                           <div class="row row-cols-1 row-cols-lg-2">
                                          <div>
                                             <h5 class="card-title mb-3">10D - Atlas Green Detergent 10%</h5>
                                             <div class="row row-cols-1 row-cols-sm-1 d-flex justify-content-between align-items-center">
                                                <p class="card-text order-price mb-3"> £9.55 </p>
                                                <a href="#" class="btn mb-4 cancel-btn"><i class="fas fa-redo me-2"></i> Cancel Order </a>
                                             </div>
                                          </div>
                                             <div class="status">
                                                <p class="status-order dispatched d-flex justify-content-start justify-content-lg-end">Dispatched on Aug 28, 2020</p>
                                                <p class="status-order d-flex justify-content-start justify-content-lg-end tracking-title">Your package arrived at the courier facility</p>
                                                <p class="status-order d-flex justify-content-start justify-content-lg-end tracking-msg pb-3">Expected delivery: &nbsp;<span>Fri, 02 June 2021</span></p>
                                             
                                             <div class="position-relative m-4 d-none d-sm-block">
                                                <div class="progress" style={{height: "1px"}}>
                                                  <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill">Ordered</button>
                                                <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill">Shipped</button>
                                                <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill">Shipped</button>
                                                <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill">Delivered</button>
                                             </div>
                                             </div>

                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                 <div class="card mb-3 p-3 card-oredr-items">
                                    <div class="row g-0">
                                      <div class="col-md-2 d-flex justify-content-center align-items-center">
                                        <img src="img/atlas-green-detergent.png" alt="..." class="img-fluid img-thumbnail order-product-img" />
                                      </div>
                                      <div class="col-md-10 d-flex align-items-center">
                                        <div class="card-body">
                                           <div class="row row-cols-1 row-cols-lg-2">
                                              <div>
                                             <h5 class="card-title mb-3">10D - Atlas Green Detergent 10%</h5>
                                             <div class="row row-cols-1 row-cols-sm-1 d-flex justify-content-between align-items-center">
                                                <p class="card-text order-price mb-3"> £9.55 </p>
                                                <a href="#" class="btn mb-4 return-btn"><i class="fas fa-redo me-2"></i> Return </a>
                                             </div>
                                          </div>
                                             <div class="status">
                                                <p class="status-order delivered d-flex justify-content-start justify-content-lg-end">Delivered on Aug 28, 2020</p>
                                                <p class="status-order-dic d-flex justify-content-start justify-content-lg-end">Your item has been delivered</p>
                                             </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                
                                 <div class="card mb-3 p-3 card-oredr-items">
                                    <div class="row g-0">
                                      <div class="col-md-2 d-flex justify-content-center align-items-center">
                                        <img src="img/atlas-green-detergent.png" alt="..." class="img-fluid img-thumbnail order-product-img" />
                                      </div>
                                      <div class="col-md-10 d-flex align-items-center">
                                        <div class="card-body">
                                           <div class="row row-cols-1 row-cols-lg-2">
                                              <div>
                                             <h5 class="card-title mb-3">10D - Atlas Green Detergent 10%</h5>
                                             <div class="row row-cols-1 row-cols-sm-1 d-flex justify-content-between align-items-center">
                                                <p class="card-text order-price mb-3"> £9.55 </p>
                                             </div>
                                          </div>
                                             <div class="status">
                                                <p class="status-order cancelled d-flex justify-content-start justify-content-lg-end">Cancelled on Aug 28, 2020</p>
                                             </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                 <div class="card mb-3 p-3 card-oredr-items">
                                    <div class="row g-0">
                                      <div class="col-md-2 d-flex justify-content-center align-items-center">
                                        <img src="img/atlas-green-detergent.png" alt="..." class="img-fluid img-thumbnail order-product-img" />
                                      </div>
                                      <div class="col-md-10 d-flex align-items-center">
                                        <div class="card-body">
                                           <div class="row row-cols-1 row-cols-lg-2">
                                              <div>
                                             <h5 class="card-title mb-3">10D - Atlas Green Detergent 10%</h5>
                                             <p class="card-text order-price mb-3"> £9.55 </p>
                                          </div>
                                             <div class="status">
                                                <p class="status-order returned d-flex justify-content-start justify-content-lg-end">Returned</p>
                                                <p class="status-order-dic d-flex justify-content-start justify-content-lg-end">You returned this order because you received a different product.</p>
                                             </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
        </div>
          )
        
        }
        }
        
        
        
        export default UserProfile;