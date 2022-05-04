/* main2.js */

window.onload = function(){
    var lgBar_L = document.querySelector(".lg_slide_bar").offsetWidth;
    var lgBarS_L = lgBar_L/3;
    console.log(lgBarS_L)


    window.onresize = function(){
        lgBar_L = document.querySelector(".lg_slide_bar").offsetWidth;
        lgBarS_L = lgBar_L/3;
        console.log(lgBarS_L)
    }

    //햄버거 버튼 클릭
    var mobBtn = document.querySelector(".mobBtn");
    var mob = document.querySelector(".mob");
    var body = document.querySelector("body");
    var divBg = document.querySelector("div.bg");

    mobBtn.addEventListener("click",function(){
        mob.classList.add("on");
        body.classList.add("on");
        divBg.classList.add("on");
    });
    
    //모바일 닫기 버튼
    var mobBtnClose = document.querySelector(".mobBtn_close");

    mobBtnClose.addEventListener("click",function(){
        mob.classList.remove("on");
        body.classList.remove("on");
        divBg.classList.remove("on");
    });

    //모바일 주메뉴(3단)
    var mobGnbLi = document.querySelectorAll(".mob_gnb > ul > li");
    var mobProductLi = document.querySelectorAll(".mob_gnb > ul > li.product > ul > li");

    for(i=0;i<mobGnbLi.length;i++){
        mobGnbLi[i].addEventListener("click",function(){
    
            this.classList.toggle("on")

            // for(k=0;k<mobProductLi.length;k++
            //     mobProductLi.forEach(function(event){
            //         event.stopPropagation();

            //         mobProductLi.forEach(function(idx){
            //             idx.classList.remove("on")
            //         });
            //         this.classList.toggle("on");

            //     });

            // }
        });
    }

    //모바일 푸터 사이트맵
    var mobFooterSiteMap = document.querySelectorAll(".mob_footer_inner > ul:first-of-type > li");
    // $(".mob_footer_inner > ul:first-of-type > li").click(function(e){
    //     e.preventDefault();
    //     $(this).siblings().removeClass("on");
    //     $(this).toggleClass("on")
    // });

    //모바일 푸터 패밀리사이트
    var mobFooterFamily = document.querySelectorAll(".mob_footer_inner > ul:nth-of-type(5) > li");
    // $(".mob_footer_inner > ul:nth-of-type(5) > li").click(function(e){
    //     e.preventDefault();
    //     $(this).siblings().removeClass("on");
    //     $(this).toggleClass("on")
    // });

    //모바일 푸터 주소
    var mobAddress = document.querySelector(".mob_footer_inner > ul:last-of-type > li");
    // $(".mob_footer_inner > ul:last-of-type > li").click(function(e){
    //     e.preventDefault();
    //     $(this).siblings().removeClass("on");
    //     $(this).toggleClass("on")
    // });

    //주메뉴
    var gnbLi = document.querySelectorAll("nav.gnb > ul > li");

    for(var i=0;i<gnbLi.length;i++){
        gnbLi[i].addEventListener("mouseover",function(){
            this.classList.add("on")
        });

        gnbLi[i].addEventListener("mouseout",function(){
            this.classList.remove("on")
        });
    }

    //탑메뉴
    var topMenuBtn = document.querySelector(".topMenu>ul>li:nth-child(2)");
    var headerWrap = document.querySelector(".header_wrap")
    topMenuBtn.addEventListener("click",function(){
        this.classList.toggle("on");
        headerWrap.classList.toggle("on");
    });

    //검색박스
    var btnSrch = document.querySelector(".btn_srch > a");
    var srchWrap = document.querySelector(".srch_wrap");
    var btnClose = document.querySelector(".btn_srch_close")
   
    btnSrch.addEventListener("click",function(){
        srchWrap.classList.add("on");
        body.classList.add("on");
        divBg.classList.add("on");
    });

    btnClose.addEventListener("click",function(){
        srchWrap.classList.remove("on");
        body.classList.remove("on");
        divBg.classList.remove("on");

    });

    //메인비쥬얼 배너
    var mvNum = 0
    var mvSlide = document.querySelectorAll(".slide")
    var mvSlideRoll = document.querySelectorAll(".mv_slide_roll li");
    
    mvSlideRoll.forEach(function(item){
        item.addEventListener("click",rollAction)
    });

    function rollAction(item){
        curRoll = item.currentTarget;
        parentRoll = curRoll.parentElement;
        childRoll = parentRoll.children;
        curIdx = Array.from(childRoll).indexOf(curRoll)

        mvSlide.forEach(function(item){
            item.classList.remove('active');
        });
        mvSlide[curIdx].classList.add('active');
    
        mvSlideRoll.forEach(function(idx){
            idx.classList.remove('on');
        });
    
        mvSlideRoll[curIdx].classList.add('on');
        mvNum = curIdx;

    }

    //라운지 배너
    var bnnNum=0;
    var lastNum = document.querySelectorAll(".lounge_wrap>li").length-1;
    var slideNum = document.querySelector(".slideNum");
    var btnNext = document.querySelector(".btn_next");
    var btnPrev = document.querySelector(".btn_prev")
    var lgBarS = document.querySelector(".lg_slide_bar>span");
    var lounge = document.querySelectorAll(".lounge_wrap > li");
    var lounge_w = document.querySelector(".lounge_wrap>li").offsetWidth + 66;
    console.log(lounge_w)
    
    //next버튼
    btnNext.addEventListener("click",function(event){
        event.preventDefault();
        bnnNum++;
        if(bnnNum>=lastNum) bnnNum=2;

        lgBarS.style.width= lgBarS_L*(bnnNum+1) + "px";

        for(var k=0;k<lounge.length;k++){
            lounge[k].style.left = bnnNum*-lounge_w + "px";
        }
        
        slideNum.innerHTML =bnnNum+1;

        if(lounge[bnnNum].classList.contains("right")){  
            btnNext.classList.add("on");
            btnPrev.classList.remove("on");
        }

        if(lounge[bnnNum].classList.contains("both")){
            btnNext.classList.add("on");
            btnPrev.classList.add("on");
        }

        if(lounge[bnnNum].classList.contains("left")){
            btnNext.classList.remove("on");
            btnPrev.classList.add("on");
        }

    });

    //prev버튼
    btnPrev.addEventListener("click",function(event){
        event.preventDefault();
        bnnNum--;
        if(bnnNum<0) bnnNum=0;

        lgBarS.style.width= lgBarS_L*(bnnNum+1) + "px";

        for(var k=0;k<lounge.length;k++){
            lounge[k].style.left = bnnNum*-lounge_w + "px";
        }
        
        slideNum.innerHTML =bnnNum+1;

        if(lounge[bnnNum].classList.contains("right")){
            
            btnNext.classList.add("on");
            btnPrev.classList.remove("on");
        }

        if(lounge[bnnNum].classList.contains("both")){
            btnNext.classList.add("on");
            btnPrev.classList.add("on");
        }

        if(lounge[bnnNum].classList.contains("left")){
            btnNext.classList.remove("on");
            btnPrev.classList.add("on");
        }

    });

    //Family Sites
    var familySites = document.querySelector(".familySites > ul > li");

    familySites.addEventListener("click",function(){
        this.classList.toggle("on");
    });

    //탑버튼
    var btnTop = document.querySelector(".btn_top");

    btnTop.addEventListener("click",function(e){
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    //모바일 탑버튼
    var mobBtnTop = document.querySelector(".mob_btn_top");

    mobBtnTop.addEventListener("click",function(e){
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    //락앤락몰
    var btnMall = document.querySelector("a.btn_mall")
    window.addEventListener("scroll",function(){
        var scrollTop = window.pageYOffset
        btnMall.style.bottom = -scrollTop+25 + "px";
  
        
    }); 
}