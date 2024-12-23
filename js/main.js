// Get Slider Items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById("slider-number");

// Previous And Next Buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Handle Click On Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main Ul Element
var paginationElement = document.createElement("ul");

// Set ID on Creted Ul Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++){

    // Create The Main Li Element
    var paginationElementItem = document.createElement("li");

    // Set custom Attribute
    paginationElementItem.setAttribute("data-index", i);

    // Set Item Content
    paginationElementItem.appendChild(document.createTextNode(i));

    // Append Item to the Main Ul List
    paginationElement.appendChild(paginationElementItem);
}

// Add the Created Ul Element To the Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById("pagination-ul");

// Get Slider Items | Array.from [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function(){
        
        currentSlide = parseInt(this.getAttribute("data-index"));

        theChecker();
    }
}

// Trigger The Checker Function
theChecker();

// function nextSlide()
function nextSlide(){

    if(nextButton.classList.contains("disabled")){

        // Do Nothing
        return false

    } else {

        currentSlide++;
    
        theChecker();
    }

}

// function prevSlide()
function prevSlide(){
    
    if(prevButton.classList.contains("disabled")){

        // Do Nothing
        return false

    } else {
        
        currentSlide--;
    
        theChecker();
    }
}

// Create The Checker Function
function theChecker() {

    // Set The Slide Number
    slideNumberElement.textContent = "slide #" + (currentSlide) + "of" + (slidesCount);

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add("active");

    // Set Active Class On Current Pagination Item
    paginationElement.children[currentSlide - 1].classList.add("active");

    // Check If The Current Slide Is The First
    if (currentSlide == 1){

        // Add Disable Class On The Previous Button
        prevButton.classList.add("disabled")
    } else{

        // Remove Disable Class From The Previous Button
        prevButton.classList.remove("disabled")
    }

    // Check If The Current Slide Is The Last
    if (currentSlide == slidesCount){

        // Add Disable Class On The Next Button
        nextButton.classList.add("disabled")
    } else{

        // Remove Disable Class From The Next Button
        nextButton.classList.remove("disabled")
    }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive(){

    // Loop Through Images
    sliderImages.forEach(function(img){
        img.classList.remove("active")
    });

    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function(bullets){
        bullets.classList.remove("active")
    });
}





