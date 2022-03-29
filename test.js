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
    });              
    