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
});