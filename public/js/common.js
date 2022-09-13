(function(d) {
  var config = {
    kitId: 'pys3qcm',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

function desk() {
  $(document).ready(function() {
    $(".btn_detail_open").click(function(){
      $(this).fadeOut(0);
      $(this).parent('.btnbox').parent('dd').parent('dl').next('.dl02').toggleClass('opened');
      $(this).parent('.btnbox').parent('dd').parent('dl').next('.dl02').next('.btn_detail_close').fadeIn(200);;
    });
    $(".btn_detail_close").click(function(){
      $(this).fadeOut(0);
      $(this).prev('.dl02').toggleClass('opened');
      $(this).prev('.dl02').prev('.dl01').children('dd').children('.btnbox').children('.btn_detail_open').fadeIn(0);
    });
  });
}

function pagetop() {
  var topBtn = $('.pagetop');
  topBtn.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
}

function qa() {
  $(document).ready(function() {
    $(".dl_qa dt").click(function(){
      // $(this).next('dd').fadeToggle(200);
            $(this).next('dd').toggleClass('opened');

      $(this).toggleClass('opened');
    });
  });
}

function syasou() {
  $(document).ready(function() {
    $("main section.s04 .wrapper .box01 > dl .dd01 .btn2").click(function(){
      $(this).prev('.content').toggleClass('opened');
      $(this).toggleClass('opened');
    });
  });
}

function main() {
  $(document).ready(function() {
    $(".syasouTypeList .misso").click(function(){
      $("body").addClass("modalOpened");
      $(".modalBg").addClass('opened');
      $(".modalWrapper").addClass('opened');
    });
    $(".modalClose").click(function(){
      $("body").removeClass("modalOpened");
      $(".modalBg").removeClass('opened');
      $(".modalWrapper").removeClass('opened');
    });
    $(".modalBg").click(function() {
      $("body").removeClass("modalOpened");
      $(".modalBg").removeClass('opened');
      $(".modalWrapper").removeClass('opened');
    });
  });
}

function beginner() {
  $(document).ready(function() {
    // $("#page-beginner main section.s03 .wrapper .misso").click(function(){
    //   $("body").addClass("modalOpened");
    //   // $(".modalBg").addClass('opened');
    //   $(".modalBg").addClass('opened');
    //   var plan = "";
    //   if($(".modalContents.syasou").hasClass("opened")) {
    //     plan = "syasou";
    //   }
    //   if($(".modalContents.owakarenokai").hasClass("opened")) {
    //     plan = "owakarenokai";
    //   }
    //   if($(".modalContents.goudousou").hasClass("opened")) {
    //     plan = "goudousou";
    //   }
    //   $(".modalContents."+plan+" .modal_missou").addClass('opened');
    // });
    // $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li").click(function(){
    //   if($(this).hasClass("syasou")) {
    //     $("#page-beginner main section.s04 .wrapper .box01 .plan.syasou").show();
    //     $("#page-beginner main section.s04 .wrapper .box01 .plan.owakarenokai").hide();
    //     $("#page-beginner main section.s04 .wrapper .box01 .plan.goudousou").hide();
    //     $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li").removeClass("active");
    //     $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li.syasou").addClass("active");
    //     $(".modalContents").removeClass("opened");
    //     $(".modalContents.syasou").addClass("opened");
    //   }
    //   if($(this).hasClass("owakarenokai")) {
    //     $("#page-beginner main section.s04 .wrapper .box01 .plan.syasou").hide();
    //     $("#page-beginner main section.s04 .wrapper .box01 .plan.owakarenokai").show();
    //     $("#page-beginner main section.s04 .wrapper .box01 .plan.goudousou").hide();
    //     $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li").removeClass("active");
    //     $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li.owakarenokai").addClass("active");
    //     $(".modalContents").removeClass("opened");
    //     $(".modalContents.owakarenokai").addClass("opened");
    //   }
    //   if($(this).hasClass("goudousou")) {
    //     $("#page-beginner main section.s04 .wrapper .box01 .plan.syasou").hide();
    //     $("#page-beginner main section.s04 .wrapper .box01 .plan.owakarenokai").hide();
    //     $("#page-beginner main section.s04 .wrapper .box01 .plan.goudousou").show();
    //     $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li").removeClass("active");
    //     $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li.goudousou").addClass("active");
    //     $(".modalContents").removeClass("opened");
    //     $(".modalContents.goudousou").addClass("opened");
    //   }
    // });
    // $("main section.s04 .wrapper .box01 .plan > dl .dd01 .btn").click(function(){
    //   $("body").addClass("modalOpened");
    //   $(".modalBg").addClass('opened');
    //   var plan = "";
    //   if($(".modalContents.syasou").hasClass("opened")) {
    //     plan = "syasou";
    //   }
    //   if($(".modalContents.owakarenokai").hasClass("opened")) {
    //     plan = "owakarenokai";
    //   }
    //   if($(".modalContents.goudousou").hasClass("opened")) {
    //     plan = "goudousou";
    //   }
    //   if($(this).hasClass("btn_jizenjunbi")) {
    //     $(".modalContents."+plan+" .modal_jizenjunbi").addClass("opened");
    //   }
    //   if($(this).hasClass("btn_goseikyo")) {
    //     $(".modalContents."+plan+" .modal_goseikyo").addClass("opened");
    //   }
    //   if($(this).hasClass("btn_missou")) {
    //     $(".modalContents."+plan+" .modal_missou").addClass("opened");
    //   }
    // });
    // $(".modalClose").click(function(){
    //   if($("body").hasClass("modalOpened")) {
    //     $("body").removeClass("modalOpened");
    //   }
    //   var plan = "";
    //   if($(".modalContents.syasou").hasClass("opened")) {
    //     plan = "syasou";
    //   }
    //   if($(".modalContents.owakarenokai").hasClass("opened")) {
    //     plan = "owakarenokai";
    //   }
    //   if($(".modalContents.goudousou").hasClass("opened")) {
    //     plan = "goudousou";
    //   }
    //   $(".modalBg").removeClass('opened');
    //   if($(this).hasClass("close_jizenjunbi")) {
    //     $(".modalContents."+plan+" .modal_jizenjunbi").removeClass('opened');
    //   }
    //   if($(this).hasClass("close_goseikyo")) {
    //     $(".modalContents."+plan+" .modal_goseikyo").removeClass('opened');
    //   }
    //   if($(this).hasClass("close_missou")) {
    //     $(".modalContents."+plan+" .modal_missou").removeClass('opened');
    //   }
    // });
    // $(".modalBg").click(function() {
    //   if($("body").hasClass("modalOpened")) {
    //     $("body").removeClass("modalOpened");
    //   }
    //   $(".modalBg").removeClass('opened');
    //   $(".modal_jizenjunbi").removeClass('opened');
    //   $(".modal_goseikyo").removeClass('opened');
    //   $(".modal_missou").removeClass('opened');
    // });
    $("main section.s04 .wrapper .box01 .plan > dl .dd01 .btn2").click(function(){
      $(this).prev('.content').toggleClass('opened');
      $(this).toggleClass('opened');
    });
  });
}

function smoothscroll(){
  $('a[href^=#]').click(function() {
     var speed = 700;
     var href= $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     var position = target.offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });
}

function sptoggle() {
  $(document).ready(function() {
    var sp_control = 0;
    $(".ham").click(function(){
      if(sp_control == 0) {
        $('.spmenu').fadeIn(200);
        sp_control = 1;
      } else {
        $('.spmenu').fadeOut(100);
        sp_control = 0;
      }
    });
    $(".close").click(function(){
      $('.spmenu').fadeOut(100);
      sp_control = 0;
    });
  });
}

function tab_seminar() {
  $(document).ready(function() {
    $(".tablist li").click(function(){
      $(".tablist li").removeClass('active');
      var tabname = '.contentslist .tab.' + $(this).attr('class');
      console.log(tabname);
      $(this).addClass('active');

      $('.contentslist .tab').fadeOut(0);
      $(tabname).fadeIn(200);
    });
  });
}

function tab_flow() {
  $(document).ready(function() {
    $(".tablist li").click(function(){
      $(".tablist li").removeClass('active');
      var tabname = '.contentslist .tab.' + $(this).attr('class');
      console.log(tabname);
      $(this).addClass('active');

      $('.contentslist .tab').fadeOut(0);
      $(tabname).fadeIn(0);
    });
  });
}

function feedInFixedFooter() {
  $(function(){
    btnOffset = 1000;
    winH = $(window).height();
    // $(window).on('load resize',function(){
    //     btnOffset = $('section.s02').offset().top;
    //     btnOffset = 1000;
    //     winH = $(window).height();
    // });
    $(function() {
        var goTopBtn = $('.toTopBtn');
        var fixedFooter = $('.fixedFooter');
        goTopBtn.hide();
        fixedFooter.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > btnOffset - winH) {
              goTopBtn.fadeIn();
              goTopBtn.addClass('fixed');
              fixedFooter.fadeIn();
              fixedFooter.addClass('fixed');
            } else {
              goTopBtn.fadeOut();
              goTopBtn.removeClass('fixed');
              fixedFooter.fadeOut();
              fixedFooter.removeClass('fixed');
            }
        });
    });
  });
}
