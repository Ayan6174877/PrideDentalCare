// slide up the navigation when clicked
$(".open-navbar-menu").click(function(){
    checkBarClass();
    $(".collapse-nav").slideToggle(1000);
});

$(".main-content").click(function(){
    if ($(window).width() < 768) {
        $(".open-navbar-menu").removeClass("fa-close").addClass("fa-bars");
         $(".collapse-nav").slideUp(1000);
     }
     else {
       // $(".open-navbar-menu").removeClass("fa-close").addClass("fa-bars");
         $(".collapse-nav").slideDown(1000);
     }
});

function checkBarClass(){
    if($(".open-navbar-menu").hasClass("fa-bars")){
        $(".open-navbar-menu").removeClass("fa-bars").addClass("fa-close");
    }
    else{
        $(".open-navbar-menu").removeClass("fa-close").addClass("fa-bars");
    }
}