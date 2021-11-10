$(document).ready(function(){

    //gallery menu active
    $('.gallery-menu ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //gallery filter;
    var mixer = mixitup('.gallery-main');

    //gallery pupup
    $('.venobox').venobox({
        arrowsColor : '#709dca',
        closeBackground :' #ffc155',
        closeColor : ' firebrick',
        spinner : 'cube-grid',
    }); 

});