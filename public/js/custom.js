$( document ).ready(function() {
// user profile
    $("#chage-pwd-next").click(function(){
        $("#new-pwd").hide();
        $("#opt-pwd").show();
     });


    $("#edit-personal-info").click(function(){
        $("#personal-info").toggle();
        $("#personal-info-fld").toggle();
     });
     $("#edit-personal-address").click(function(){
        $(".personal-address").toggle();
        $("#personal-address-fld").toggle();
     });

     $("#pro-info").click(function(){
        $("#slide-1").show();
        $("#slide-3").hide();
        $("#slide-2").hide();
        $("#slide-4").hide();
     });
     $("#manage-add").click(function(){
        $("#slide-1").hide();
        $("#slide-3").hide();
        $("#slide-4").hide();
        $("#slide-2").show();
     });
     $("#my-coupon").click(function(){
        $("#slide-1").hide();
        $("#slide-2").hide();
        $("#slide-4").hide();
        $("#slide-3").show();
     });
     $("#my-order").click(function(){
        $("#slide-1").hide();
        $("#slide-2").hide();
        $("#slide-3").hide();
        $("#slide-4").show();
     });
     $("#add-deliaddress").click(function(){
        $("#deliv-add").hide();
        $("#add-deliv-add, #add-delivery").show();
     });
     $("#added-address").click(function(){
        $("#add-deliv-add, #add-delivery").hide();
        $("#deliv-add").show();
     });

     $("#forget-pwd").click(function(){
        $("#key-pwd").hide();
        $("#find-pwd").show();
     });
     $("#register-btn").click(function(){
        $("#register-otp").hide();
        $("#register-otp-fld").show();
     });



     // Select the element you want to click and add a click event
  $("#added-address").click(function(){
      // This function will be executed when you click the element
      // show the element you want to show
      $("#exampleModal2").hide();
      $("#confirm-box1").show();
  
      // Set a timeout to hide the element again
      setTimeout(function(){
          $("#confirm-box1").hide();
          $("#exampleModal2").show();
      }, 1000);
    $("#add-deliv-add, #add-delivery").hide();
    $("#deliv-add").show();
  });


     // Select the element you want to click and add a click event
  $("#signup-login").click(function(){
      // This function will be executed when you click the element
      // show the element you want to show
      $("#register").show();
  
      // Set a timeout to hide the element again
      setTimeout(function(){
          $("#register").hide();
          $(".modal-backdrop").hide();
      }, 1000);
  });




  $(".btn-close").click(function(){
   $(".modal-backdrop").hide();
});


// /////////////////////////////////// cart sidebar nav
     $(".ctgli:has(.ctgulChild)").click(function (e) {
        e.preventDefault();
        //li_HAVE_Child-hasShowed-hasSlideD
        if($(this).hasClass('showed')){
            //-x-hasShowed
            $('.ctgli').removeClass('showed');
            //-x-hasSlideD
            $(this).children('.ctgulChild').slideUp();
            
        }
        
        else{
            
            $('.ctgulChild').slideUp();
            $('.ctgli').removeClass('showed');
       
            $(this).addClass('showed');
            $(this).children('.ctgulChild').slideToggle();
          
        }
       });
       
       $('.ctgli').click(function(){
        $(this).toggleClass('wtok');
       });





});





// /////////////////////////////////////

function increaseValue() {
   var value = parseInt(document.getElementById('number').value, 10);
   value = isNaN(value) ? 0 : value;
   value++;
   document.getElementById('number').value = value;
   }
   
   function decreaseValue() {
   var value = parseInt(document.getElementById('number').value, 10);
   value = isNaN(value) ? 0 : value;
   value < 1 ? value = 1 : '';
   value--;
   document.getElementById('number').value = value;
   }

