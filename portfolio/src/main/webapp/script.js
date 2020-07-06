 $(document).ready(function(e) {   
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
 });


  
