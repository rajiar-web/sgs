import React from 'react';
import axios from 'axios';
class Listing extends React.Component 
{
   constructor()
   {
      super();
      this.state={
         cat:[],
         slug:[],
         id:[],
         subcat:[],
         c_category:[],
         category:[],
         menu:[],
         produ:[],
         
      }
      //let i=1;
   }
   componentDidMount()
   {
     
      // https://jsonplaceholder.typicode.com/posts
      
      axios.get('https://sgs.hintt.com/category-api')
      .then(response=> {
          const topser = response.data[0];
         this.setState({cat:response.data})
       
          // console.log(response.data);
         
      })
      .catch(error => console.log(error));

     
      axios.get('https://sgs.hintt.com/category-api')
      .then(response=> {
         this.setState({menu:response.data['menu']})
         this.setState({category:response.data['category']})
         this.setState({cat:response.data['category.cat']})
         this.setState({slug:response.data['slug']})
         this.setState({id:response.data['id']})
         this.setState({subcat:response.data['subcat']})
         this.setState({c_category:response.data['c_category']})
         
      
        
      })
      .catch(error => console.log(error));

   }
   render()
   {
    const baseurl = 'https://sgs.hintt.com/category-api';
     const myDivStyle = {
      maxwidth: '100%',
      height: 'auto'
     
    };


    axios.get('https://sgs.hintt.com/products-all')
    .then(respon=> {
        const product = respon.data[0];
     this.setState({produ:respon.data['slug']})
     
    
       
    })
   
   //  render() 
   //  {
 
      const categ =this.state.category
      const product=this.state.produ
      return(
         
       
        <div>

      <section class="banner-detail-page">
         <div class="container">
            <div class="row">
               <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">Toilet rolls and tissue</h2>
            </div>
         </div>
      </section>
      <section class="product-detailed">
         <div class="container">
            <div class="row">
               <div class="col-4 col-lg-3 detail-sidebar card d-flex px-2 px-lg-3">
                  <nav class="category d-flex align-content-between flex-wrap">
                     <ul class="ctgul p-0 p-lg-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                        <h2 class="pt-3 pb-2 pb-lg-3 pt-lg-5">Categories</h2>

                     
                         {
                        this.state.category.map((sitm,k)=>{
                             return (    
                        <li class="ctgli">
                           <a href="#" class="ctga">
                              <div class="ok"></div>
                              <i class="ti-layout"></i>
                              {sitm.cat}
                              {
                              sitm.subcat &&  sitm.subcat.length? (
                              <i class="fas fa-chevron-down down"></i>
                              ):""} 
                           </a>
                          
                              {
                                sitm.subcat &&  sitm.subcat.length? (
                                 <ul class="ctgulChild"> 
                                 {
                          sitm.subcat.map((sbcat,k)=>{
                             return (   
                             // console.log(sbcat),
                              <li class="ctgliChild">
                                 <a href="" class="ctgaChild">{sbcat.c_category}</a>
                                 
                              </li>
                            
                               ) 
                               
                          }) } </ul> ):""} 
                           
                           </li>  
                            
                     
                     ) 
                    
                  })} 
          
   
          </ul> 
 



                       
                     <ul class="w-100 mt-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                        <li class="">
                           <figure>
                              <img src="img/detail-side-banner.png" class="w-100" alt=""/>
                           </figure>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div class="col-8 col-lg-9 d-flex product-sec px-3 px-lg-5">
                  <div class="row">
                  {/* {
                        this.state.produ.map((sitm,k)=>{
                          
                             return (    */}
                     <div class="col-12 col-lg-4 col-md-12 my-3 d-flex">
                        <a href="product-detail.html">
                        <div class="card w-100">
                           <div class="product-image d-flex">
                              <img src="img/atlas-green-detergent.png" class="card-img-top" alt="..."/>
                           </div>
                           <div class="card-body">
                              <h5 class="card-title"> {this.state.produ}
                              </h5>
                              <h3 class="d-flex align-items-center justify-content-center justify-content-lg-start">£9.55<span class="ms-3">£9.55</span></h3>
                           </div>
                        </div>
                     </a>
                     </div>
                         {/* ) 
                    
                        })}  */}
                    
                  </div>
               </div> 
               <div class="col-12 d-flex justify-content-end">
                  <nav aria-label="...">
                     <ul class="pagination">
                        <li class="page-item disabled">
                           <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active" aria-current="page">
                           <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                           <a class="page-link" href="#">Next</a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </section>
        </div>

)
        
}
}



export default Listing;