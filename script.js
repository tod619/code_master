$(document).ready(function(){

    // Navbar btn funtcionality
    $('.btn').click(function(){
        $('.nav-links').slideToggle(1000)
        $('.btn').toggleClass('change')
    })
})