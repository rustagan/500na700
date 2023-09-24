let innerWidth = screen.width;
if (innerWidth < 450) {
    $(document).ready(function(){
        $(".news_content").slick({ 
            arrows:false,
            infinite:false,
            variableWidth: true,
            initialSlide: 0
        });
    })
}