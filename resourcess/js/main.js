$(document).ready(function(){

    // sticky menu
    $(".js--services-section").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
        }
    });

    // mixitUP(portfolio)
    var mixer = mixitup('.pdj');
});

function openNav(){
    document.getElementById("myNav").style.width="100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}