//main.js

$(document).ready(function(){

    var lgBar = $(".lg_slide_bar").width();
    var lgBarS = lgBar/3;
    console.log(lgBar)

    $(window).resize(function(){
        lgBar = $(".lg_slide_bar").width();
        lgBarS = lgBar/3;
    });


    //햄버거 버튼 클릭
    $(".mobBtn").click(function(){
        $(".mob").addClass("on")
        $("body").addClass("on");
        $("div.bg").addClass("on");
    });

    //모바일 닫기 버튼
    $(".mobBtn_close").click(function(){
        $(".mob").removeClass("on")
        $("body").removeClass("on");
        $("div.bg").removeClass("on");
    });

    

    //모바일 주메뉴(3단)
    
    $(".mob_gnb > ul > li").click(function(){
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on");
       
        $(".mob_gnb > ul > li.product > ul > li").click(function(event){
            event.stopPropagation();
            $(this).siblings().removeClass("on");
            $(this).toggleClass("on")
        });
    });

    //모바일 푸터 사이트맵
    $(".mob_footer_inner > ul:first-of-type > li").click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on")
    });

    //모바일 푸터 패밀리사이트
    $(".mob_footer_inner > ul:nth-of-type(5) > li").click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on")
    });

    //모바일 푸터 주소
    $(".mob_footer_inner > ul:last-of-type > li").click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on")
    });

    //주메뉴
    $("nav.gnb > ul > li").bind("mouseover focus",function(){
        $(this).addClass("on");
    });
    $("nav.gnb > ul > li").bind("mouseleave blur",function(){
        $(this).removeClass("on");
    });

    //탑메뉴
    $(".topMenu>ul>li:nth-child(2)").click(function(){
        $(this).toggleClass("on");
        $(".header_wrap").toggleClass("on");
        
    });

    //검색박스
    $(".btn_srch > a").click(function(){
        $(".srch_wrap").addClass("on")
        $("body").addClass("on");
        $("div.bg").addClass("on");
    });

    $("a.btn_srch_close").click(function(){
        $(".srch_wrap").removeClass("on");
        $("body").removeClass("on");
        $("div.bg").removeClass("on");
    });

    //메인비쥬얼 배너
    $(".mv_slide_roll li a").click(function(){
        var rollNum = $(this).parent().index();

        $(".slide").removeClass("active");
        $(".slide").eq(rollNum).addClass("active");

        $(".mv_slide_roll>ul>li").removeClass("on");
        $(".mv_slide_roll>ul>li").eq(rollNum).addClass("on");

    });


    //라운지 배너
    var $bnnNum=0;
    var $lastNum=$(".lounge_wrap>li").size()-1;

    //next버튼
    $(".btn_next").click(function(e){
        e.preventDefault();
        $bnnNum++;
        if($bnnNum>=$lastNum) $bnnNum=2;

        $(".lg_slide_bar>span").stop().animate({"width":lgBarS*($bnnNum+1)},300,"linear");
       
        $lounge_w= $(".lounge_wrap>li").width()+66;
        $(".lounge_wrap>li").stop().animate({"left":$bnnNum * -$lounge_w},300,"linear");

        $(".slideNum").html($bnnNum+1);

        if($(".lounge_wrap>li").eq($bnnNum).hasClass("right")){
            $(".lg_slide_roll>li").removeClass("on");
            $(".btn_next").addClass("on");
            $(".btn_prev").removeClass("on");
        }
        if($(".lounge_wrap>li").eq($bnnNum).hasClass("both")){

            $(".lg_slide_roll>li").removeClass("on");
            $(".btn_next").addClass("on");
            $(".btn_prev").addClass("on");
        }
        if($(".lounge_wrap>li").eq($bnnNum).hasClass("left")){
            $(".lg_slide_roll>li").removeClass("on");
            $(".btn_next").removeClass("on");
            $(".btn_prev").addClass("on");
        }
    });
        
    //prev버튼
    $(".btn_prev").click(function(e){
        e.preventDefault();
        $bnnNum--;
        if($bnnNum<0) $bnnNum=0;

        $(".lg_slide_bar>span").stop().animate({"width":lgBarS*($bnnNum+1)},300,"linear");
    
        $lounge_w= $(".lounge_wrap>li").width()+66;
        $(".lounge_wrap>li").stop().animate({"left":$bnnNum * -$lounge_w},300,"linear");

        $(".slideNum").html($bnnNum+1);

        if($(".lounge_wrap>li").eq($bnnNum).hasClass("right")){
            $(".lg_slide_roll>li").removeClass("on");
            $(".btn_next").addClass("on");
            $(".btn_prev").removeClass("on");
        }
        if($(".lounge_wrap>li").eq($bnnNum).hasClass("both")){
            $(".lg_slide_roll>li").removeClass("on");
            $(".btn_next").addClass("on");
            $(".btn_prev").addClass("on");
        }
        if($(".lounge_wrap>li").eq($bnnNum).hasClass("left")){
            $(".lg_slide_roll>li").removeClass("on");
            $(".btn_next").removeClass("on");
            $(".btn_prev").addClass("on");
        }
    });

    //Family Sites
    $(".familySites > ul > li").click(function(){
        $(this).toggleClass("on");
    });

    //탑버튼
    $(".btn_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1400,"swing")
    });

    //모바일 탑버튼
    $(".mob_btn_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1400,"swing")
    });



    //락앤락몰
    $(window).scroll(function(){
        var scrollTop = $("body,html").scrollTop();
        $("a.btn_mall").stop().animate({"bottom":-scrollTop+25+"px"},650);

    });
    

});