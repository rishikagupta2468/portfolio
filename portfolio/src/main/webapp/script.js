 $(document).ready(function(e) {  
    $('#nav-placeholder').load('nav_bar.html'); 
    $('.navbar-brand').click(function(){
        $('#about').click();
    });
    $('.navbar-nav li').click(function(){
        $(this).addClass('activate');
        $(this).siblings().removeClass('activate');
    });
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');        
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
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


  
