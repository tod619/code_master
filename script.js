$(document).ready(function(){

    // Navbar btn funtcionality
    $('.btn').click(function(){
        $('.nav-links').slideToggle(1000)
        $('.btn').toggleClass('change')
    })

    // Transparent navbar background on scroll
    $(window).scroll(function(){
        let position = $(window).scrollTop()

        if(position >= 100) {
            $('nav, .nav-container').addClass('nav-background')
        } else {
            $('nav, .nav-container').removeClass('nav-background')
        }
    })

    // Smooth Scroll
    $('.nav-links a').click(function(link){
        link.preventDefault()

        let target = $(this).attr('href');
        
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 3000);
    })
})