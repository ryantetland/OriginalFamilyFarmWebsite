<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="style.css">
</head>


<body>
    <div id="background">
    <div class="topheader">
        <img src=".\images\OriginalFamiC79b-A02aT04a-Z_grey.jpg" width="54px" height="54px" style='float: left; margin-right: 80px;'/>
        <p><img src=".\images\phone.png" width="18" height="18" align="top" > <font color="grey" style="font-size:1vw;">306.555.2522</font>
          <img src=".\images\email.png" width="18" height="18" align="top" style="margin-left: 40px;"> <a href="mailto:someEmail@sloboshan.com" target="_top"  style="font-size:1vw;">someEmail@sloboshan.com</a>
          <img src=".\images\facebook.png" width="18" height="18" align="top" style="margin-left: 40px;"> <a href="https://www.facebook.com/Original-Family-Farm-927799053944261/"  style="font-size:1vw;">Original Family Farm Facebook Page</a>
        </p>

      </div>
      <br><br><br>

      <img src=".\images\Banner2.jpg" width="100%" style="margin-bottom: 0px;">

  

<div class="topnav">
  <a href="index.html">Home</a>
  <a href="aboutUs.html">About us</a>
  <a href="#">Products</a>
  <a href="cooking.html">Cooking and Nutrition</a>
  <a href="checkout.php">Checkout</a>
  <a href="contact.html">Contact</a>
</div>

      <div class="row">
          <div class="middlecolumn">
            <div class="column">

        <h2>Checkout Confirmation</h2>


        <form action="" method="post">

          <script>
                  
                  var cartItems = JSON.parse(localStorage.getItem("items"));
                  var col = document.getElementsByClassName("column");  
                  for(let i = 0; i < cartItems.length; i++){
                    var t = document.createElement("P");
                    t.innerHTML = cartItems[i];// + i.toString());
                    col[0].appendChild(t); 
                  }

              //} 
          </script>
          First name:<br>
          <input type="text" name="firstname" value="">
          <br>
          Last name:<br>
          <input type="text" name="lastname" value="">
          <br>

          Email:<br>
          <input type="text" name="email" value="">
          <br><br>
        
          <input type="submit" value="Confirm" />
          <input type="hidden" name="button_pressed" value="1" />
        </form> 

        
          <?php

         // if(isset($_POST['button_pressed']))
         // {
              // $to      = 'nobody@example.com';
              // $subject = 'the subject';
              // $message = 'hello';
              // $headers = 'From: webmaster@example.com' . "\r\n" .
              //     'Reply-To: webmaster@example.com' . "\r\n" .
              //     'X-Mailer: PHP/' . phpversion();

             

        //  }

          ?>
        

        </div>
      </div>
    </div>
    <div class="footer">
    <hr>
  <img src=".\images\OriginalFamiC79b-A02aT04a-Z_grey.jpg" width="148px" height="148px" style='float: left; margin-right: 80px;'/>
 
  <h3 style="color: white; font-family: Calibri;">Contact Us</h3>
  <p style="color:white; font-family: Calibri;">306.555.2522</p>
  <a href="mailto:someEmail@sloboshan.com" target="_top">someEmail@sloboshan.com</a>
  <p style="color:white; font-family: Calibri;">box 555 Vanscoy SK S0L 3J0</p>
  <hr>
</div>
</body>
</html>