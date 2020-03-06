$(function(){
    // Devolope by Khanh Khuu 
    window.setInterval(() => {
        if ($(window).scrollTop() > 50){
            $(".go-to-top").addClass("shown");    
        }
        else{
            $(".go-to-top").removeClass("shown");
        }
    }, 100);

    $(".go-to-top").click(function(){ 
        $('html').animate({ scrollTop: 0 }, 'slow'); return true; 
    });
});