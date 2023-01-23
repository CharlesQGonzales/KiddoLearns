let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

AOS.init();

$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });

  $(document).ready(function(){
    $("#toggleButton").click(function(){
        $("#myContent").fadeToggle();
    });
});

$(document).ready(function(){
    $("#toggleButton1").click(function(){
        $("#myContent1").fadeToggle();
    });
});

$(document).ready(function(){
    $("#toggleButton3").click(function(){
        $("#myContent3").fadeToggle();
    });
});

$('.navbar-toggler').on('click', function() {
    $('.navbar-menu').slideToggle();
  });

  

  







