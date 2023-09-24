function imgChange () {
    let innerWidth = screen.width;
    const img1 = document.querySelector(".slider_img1");
    const img2 = document.querySelector(".slider_img2");
    const img3 = document.querySelector(".slider_img3");
    if (innerWidth < 450) {
        img1.src = "/assets/img/mobSlide1.png";
        img2.src = "/assets/img/mobSlide2.png";
        img3.src = "/assets/img/mobSlide3.png";
    }
}
imgChange ();

$(document).ready(function(){
    $(".slider").slick({ 
        adaptiveHeight:true,
        centerMode: true,
        variableWidth: true,
        initialSlide: 1
    });
})