$(document).ready(function(){
    $("#box1").on({
        "click": function(){
            $(this).css("background","red")
        }, 
        "mouseover": function(){
            $(this).css("background","green")
        },
        "mouseout":function(){
            $(this).css("background","blue")
        } 
    });$("#box2").on({
        "click": function(){
            $(this).css("background","red")
        }, 
        "mouseover": function(){
            $(this).css("background","blue")
        },
        "mouseout":function(){
            $(this).css("background","green")
        } 
    });

$("#offevent").click(function(){
    $("#box1").off("mouseover mouseout")
});

$("#offevent2").click(function(){
    $("#box2").off("mouseover mouseout")
});

$("#backtotop").click(function(){
    window.scrollTo({ top: 0, left:0, behavior: 'smooth' });
});
    });              
    