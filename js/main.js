// document.addEventListener("load", function(event) {
$(window).bind("load", function() {
    console.log('test');
$(document).ready(function(){
    $("#main-body").removeClass("unloaded");
    $(".preloader-wrapper").removeClass("visible");
    var textFields = $(".toi-text");
    var imgFields = $(".images-list img");
    var activeImg = 0;
    var activeText = 0;
    var len = textFields.length;
    $.each(imgFields,function(key,value){
        value.dataset.index = key;
    })
    $.each(textFields,function(key,value){
        value.dataset.index = key;
    })
    function changeImg(){
        imgFields[activeImg].classList.remove("visible");
        activeImg = (activeImg+1)%len;
        imgFields[activeImg].classList.add("visible");
    }
    function changeText(){
        textFields[activeText].classList.remove("visible");
        activeText = (activeText+1)%len;
        textFields[activeText].classList.add("visible");
    }
    setInterval(changeText,4000);
    setInterval(changeImg,4000);
})
var el = document.getElementById("customize");
var ic = document.getElementById('icodir');
var lb = document.getElementById('label');
lb.innerHTML = 'Open panel';
setTimeout('opend()',500);
function opend(){
    var b = '';
    var max = 200;
    var a = el.clientHeight;
    if(a>=max){
        b = '25px';
        setTimeout('addCla("dispview up","Open panel")',100);
    }else{
        b = '200px';
        setTimeout('addCla("dispview","Close panel")',100);
    }

    el.style.height = b;
}
function addCla(pass1,pass2){
    ic.className = pass1;
    lb.innerHTML = pass2;
}
});