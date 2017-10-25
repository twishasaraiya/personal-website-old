function toggle(x){
    x.classList.toggle("change");
}
var flag=true;
function openSidebar(){
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("main").style.marginLeft = "-250px";
}

function closeSidebar(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("main").style.marginLeft = "0px";
}

$(document).ready(function(){

    $('.box').hover(function(){
        console.log($(this).attr('id'));
        $('.app'+$(this).attr('id')).stop().animate({
            opacity: .7
        },200);
        $('.app'+$(this).attr('id')).children('.text').removeClass('hide');
    },function(){
        $('.app'+$(this).attr('id')).stop().animate({
            opacity: 1
        },500);
        $('.app'+$(this).attr('id')).children('.text').addClass('hide');
    });




    $('.intro').fadeIn(2000,function(){
        $(this).css("display","normal");
    });
    $('.in').click(function(){
        if(flag)
        {
            openSidebar();
            flag=false;
        }
        else {
            closeSidebar();
            flag=true;
        }
    });

    $(window).scroll(function(){
        //console.log($(window).scrollTop());
        if($(window).scrollTop()>100)
        {
            $('.navbar').addClass('navbar-fixed-top');
        }
        else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });

    $('.moveDown').click(function(){
        var target=$('#aboutMe');
        $('html,body').animate({
            scrollTop: target.offset().top
        },1000);
    });
});
