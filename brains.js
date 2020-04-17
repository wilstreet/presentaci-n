/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

  
  function menu() {
      let x = document.getElementById("myMenu");
      if(x.className === "menu") {
          x.className += " responsive";
      } else {
          x.className ="menu"
      }
  };

  let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("demo");
          let captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" activ", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " activ";
          captionText.innerHTML = dots[slideIndex-1].alt;
        };
        