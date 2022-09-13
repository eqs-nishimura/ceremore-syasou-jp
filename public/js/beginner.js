function beginner() {
  $(document).ready(function() {
    $("#page-beginner main section.s03 .wrapper .misso").click(function(){
      $(".modalBg").addClass('opened');
      $(".modalBg").addClass('opened');
      var plan = "";
      if($(".modalContents.syasou").hasClass("opened")) {
        plan = "syasou";
      }
      if($(".modalContents.owakarenokai").hasClass("opened")) {
        plan = "owakarenokai";
      }
      if($(".modalContents.goudousou").hasClass("opened")) {
        plan = "goudousou";
      }
      $(".modalContents."+plan+" .modal_missou").addClass('opened');
    });
    $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li").click(function(){
      if($(this).hasClass("syasou")) {
        $("#page-beginner main section.s04 .wrapper .box01 .plan.syasou").show();
        $("#page-beginner main section.s04 .wrapper .box01 .plan.owakarenokai").hide();
        $("#page-beginner main section.s04 .wrapper .box01 .plan.goudousou").hide();
        $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li").removeClass("active");
        $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li.syasou").addClass("active");
        $(".modalContents").removeClass("opened");
        $(".modalContents.syasou").addClass("opened");
      }
      if($(this).hasClass("owakarenokai")) {
        $("#page-beginner main section.s04 .wrapper .box01 .plan.syasou").hide();
        $("#page-beginner main section.s04 .wrapper .box01 .plan.owakarenokai").show();
        $("#page-beginner main section.s04 .wrapper .box01 .plan.goudousou").hide();
        $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li").removeClass("active");
        $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li.owakarenokai").addClass("active");
        $(".modalContents").removeClass("opened");
        $(".modalContents.owakarenokai").addClass("opened");
      }
      if($(this).hasClass("goudousou")) {
        $("#page-beginner main section.s04 .wrapper .box01 .plan.syasou").hide();
        $("#page-beginner main section.s04 .wrapper .box01 .plan.owakarenokai").hide();
        $("#page-beginner main section.s04 .wrapper .box01 .plan.goudousou").show();
        $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li").removeClass("active");
        $("#page-beginner main section.s04 .wrapper .box01 .tablist ul li.goudousou").addClass("active");
        $(".modalContents").removeClass("opened");
        $(".modalContents.goudousou").addClass("opened");
      }
    });
    $("main section.s04 .wrapper .box01 .plan > dl .dd01 .btn").click(function(){
      $(".modalBg").addClass('opened');
      var plan = "";
      if($(".modalContents.syasou").hasClass("opened")) {
        plan = "syasou";
      }
      if($(".modalContents.owakarenokai").hasClass("opened")) {
        plan = "owakarenokai";
      }
      if($(".modalContents.goudousou").hasClass("opened")) {
        plan = "goudousou";
      }
      if($(this).hasClass("btn_jizenjunbi")) {
        $(".modalContents."+plan+" .modal_jizenjunbi").addClass("opened");
      }
      if($(this).hasClass("btn_goseikyo")) {
        $(".modalContents."+plan+" .modal_goseikyo").addClass("opened");
      }
      if($(this).hasClass("btn_missou")) {
        $(".modalContents."+plan+" .modal_missou").addClass("opened");
      }
    });
    $(".modalClose").click(function(){
      var plan = "";
      if($(".modalContents.syasou").hasClass("opened")) {
        plan = "syasou";
      }
      if($(".modalContents.owakarenokai").hasClass("opened")) {
        plan = "owakarenokai";
      }
      if($(".modalContents.goudousou").hasClass("opened")) {
        plan = "goudousou";
      }
      $(".modalBg").removeClass('opened');
      if($(this).hasClass("close_jizenjunbi")) {
        $(".modalContents."+plan+" .modal_jizenjunbi").removeClass('opened');
      }
      if($(this).hasClass("close_goseikyo")) {
        $(".modalContents."+plan+" .modal_goseikyo").removeClass('opened');
      }
      if($(this).hasClass("close_missou")) {
        $(".modalContents."+plan+" .modal_missou").removeClass('opened');
      }
    });
    $("main section.s04 .wrapper .box01 .plan > dl .dd01 .btn2").click(function(){
      $(this).prev('.content').toggleClass('opened');
      $(this).toggleClass('opened');
    });
  });
}