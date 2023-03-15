# Nomad-Sitters
GA Project Two


// Seven Restful Actions
// INDUCES
/*
I -- INDEX -- display all of a given resource (photos)
N -- NEW -- display a FORM that allows you to create a new resource
D -- DELETE -- get rid of a resource
U -- UPDATE -- update a resource
C -- CREATE -- make a new resource from scratch
E -- EDIT -- show the FORM that allows the user to update a resource 
S -- SHOW -- show one individual resource
*/


.slider {
    width: 500px;
    height: 300px;
    background-color: yellow;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    text-align: center;
    overflow: hidden;
}
.image-container {
    width: 1500px;
    background-color: pink;
    height: 300px;
    clear: both;
    position: relative;
    -webkit-transition: left 2s;
    -moz-transition: left 2s;
    -o-transition: left 2s;
    transition: left 2s;
}
.imgSlides {
    float: left;
    margin: 0px;
    padding: 0px;
    position: relative;
}
#slide-1:target ~ .image-container {
    left: 0px;
}
#slide-2:target ~ .image-container {
    left: -500px;
}
#slide-3:target ~ .image-container {
    left: -1000px;
}
.buttons {
    position: relative;
    top: -20px;
}
.buttons a {
    display: inline-block;
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background-color: lightgreen;
}


<!-- The dots/circles -->
<div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
</div>
    <div class="imgSlides">
        <span id="slide-1"></span>
        <span id="slide-2"></span>
        <span id="slide-3"></span>
        <div class="image-container">
          <img src="/images/img1.jpg" class="slide" width="500" height="300" />
          <img src="/images/img2.jpg" class="slide" width="500" height="300" />
          <img src="/images/img3.jpg" class="slide" width="500" height="300" />
        </div>
        <div class="buttons">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
        </div>
      </div>







* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}



   <!-- Slideshow container -->
   <div class="slideshow-container">

    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="/images/img1.jpg" style="width:100%">
    <div class="text">Caption Text</div>
    </div>

    <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="/images/img2.jpg" style="width:100%">
    <div class="text">Caption Two</div>
    </div>

    <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="/images/img3.jpg" style="width:100%">
    <div class="text">Caption Three</div>
    </div>

    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>