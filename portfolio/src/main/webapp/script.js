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


  
