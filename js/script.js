
const dropdownli = document.querySelectorAll("li.dropdown");

dropdownli.forEach(function (e) {
    e.addEventListener("click", function(event){
        this.querySelector("ul").classList.toggle("show");
        event.stopPropagation();
    });
});

function openNav() {
    document.getElementById("mobile-nav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
  }



$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
// GP carousel 
$('.gpslider').owlCarousel({
    autoplay : true,
    loop: true,
    margin: 20,
    slideSpeed : 300,
    paginationSpeed : 400,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// Brand slider
$('.brand-slider').owlCarousel({
    nav: true,
    pagination : true,
    loop : true,
    dots: false,
    autoplay : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    margin: 20,
    responsive: {
        0: {
            items: 3
        },
        768: {
            items: 4
        },
        1000: {
            items: 8
        }
    }
});
// Slider owl carousel 
$('.owl-carousel').owlCarousel({
    nav : false, // Show next and prev buttons
    pagination : false,
    loop : true,
    rewind: true,
    autoplay : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    margin: 20,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});
