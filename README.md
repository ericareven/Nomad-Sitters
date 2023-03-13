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



   <!-- Slideshow container -->
    <div class="slideshow-container">

        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img src="img1.jpg" style="width:100%">
        <div class="text">Caption Text</div>
        </div>
    
        <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="img2.jpg" style="width:100%">
        <div class="text">Caption Two</div>
        </div>
    
        <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="img3.jpg" style="width:100%">
        <div class="text">Caption Three</div>
        </div>
    
        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    
    <!-- The dots/circles -->
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>