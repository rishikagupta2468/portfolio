 $(document).ready(function(e) {  
    $('.navbar-brand').click(function(){
        $('#about').click();
    });
    $('.navbar-nav li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            $('.filter').show(2000);
        }
        else
        {
            $(".filter").not('.'+value).hide(1000);
            $('.filter').filter('.'+value).show(1000);        
        }
    });
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 28.621271, lng: 77.061325},
        zoom: 8
    });
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });
 });


  
