//(2) lấy vị trí xuất hiện ngẫu nhiên
function getRandomArbitrary(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}
$(document).ready(function(){
    setInterval(function (){
        //(1) lấy chiều rộng và chiều dài của màn hình
        var screeWidth = $(document).width();
        var screeHeight = $(document).height();

        var startLeft = getRandomArbitrary(0,screeWidth);//(2)
        //(3) thời gian tim rơi
        var timeRun = getRandomArbitrary(4000,6000);
        var opacityR = Math.random() * (1-0.2) + 0.2;//(4) opacity
        var sizeR = getRandomArbitrary(40,60);//(5)kích cỡ
        var endLeft = getRandomArbitrary(startLeft-100,startLeft+100);//(6) vị trí đến của tim
        var snow = document.createElement("span");//(7) tạo ra một element
        $(snow).addClass("snow-item icon-heart icon-2x").css({
            position:"absolute",
            zIndex:"auto",
            color:"red",
            display:"block",
            top:0,
            left:startLeft,
            opacity:opacityR,
            fontsize:sizeR+"px"
        })
            .appendTo("body")
            .animate({
                top:screeHeight-sizeR,
                left:endLeft
            },{
                duration:timeRun,
                easing:"linear",
                complete:function (){
                    $(this).fadeOut("fast",function (){
                        $(this).remove();
                    });
                }
            });
    },200)
})