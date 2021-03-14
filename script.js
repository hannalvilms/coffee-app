$(document).ready(function() {

    setTimeout(function() {
        $('#loading').fadeIn();
    }, 0);
    setTimeout(function() {
        $('#loading').fadeOut();
    }, 2500);
    setTimeout(function() {
        $('#login').fadeIn();
    }, 2500);

    $('.owl-carousel').owlCarousel({
        navigation: false,
        center: true,
        items: 2,
        loop:true,
        margin:10,
        dots: true
    });

    let x = document.getElementsByClassName('additives');
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener("touchstart", function(){

            let selectedEl = document.querySelector(".selected");
            if(selectedEl){
                selectedEl.classList.remove("selected");
            }
            this.classList.add("selected");

        }, false);
    }

    let y = document.getElementsByClassName('syrup');
    for (let i = 0; i < y.length; i++) {
        y[i].addEventListener("touchstart", function(){

            let selectedEl = document.querySelector(".selected");
            if(selectedEl){
                selectedEl.classList.remove("selected");
            }
            this.classList.add("selected");

        }, false);;
    }

    $('#additives h2').on('touchstart', function(e) {
        $('#additives').find('.selected').clone().addClass("order-coffee").prependTo("#foo");
        e.stopPropagation();
    });

    $('#syrup h2').on('touchstart', function(e) {
        $('#syrup').find('.selected').clone().addClass("order-coffee").prependTo("#foo");
        e.stopPropagation();
    });

    $('#custom-size h2').on('touchstart', function(e) {
        $('#custom-size').find('.owl-item.center').clone().addClass("order-coffee").prependTo("#foo");
        e.stopPropagation();
    });
    $('#custom-coffee h2').on('touchstart', function(e) {
        $('#custom-coffee').find('.owl-item.center').clone().addClass("order-coffee").prependTo("#foo");
        e.stopPropagation();
    });
    $('#custom-milk h2').on('touchstart', function(e) {
        $('#custom-milk').find('.owl-item.center').clone().addClass("order-coffee").prependTo("#foo");
        e.stopPropagation();
    });
    $('#classic-size h2').on('touchstart', function(e) {
        $('#classic-size').find('.owl-item.center').clone().addClass("order-coffee").prependTo("#foobar");
        e.stopPropagation();
    });
    $('#classic-coffee h2').on('touchstart', function(e) {
        $('#classic-coffee').find('.owl-item.center').clone().addClass("order-coffee").prependTo("#foobar");
        e.stopPropagation();
    });
    $('#classic-milk h2').on('touchstart', function(e) {
        $('#classic-milk').find('.owl-item.center').clone().addClass("order-coffee").prependTo("#foobar");
        e.stopPropagation();
    });

    $('.pay').on('click, touchstart', function(e) {
        setTimeout(function() {
            $('#pay').fadeOut();
        }, 2000);
        setTimeout(function() {
            $('#ready').fadeIn();
        }, 2000);
    });
});
