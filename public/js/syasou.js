function syasou() {
  $(document).ready(function() {
    $("main section.s04 .wrapper .box01 > dl .dd01 .btn").click(function(){
      $(".modalBg").toggleClass('opened');
      if($(this).hasClass("btn_jizenjunbi")) {
        $(".modal_jizenjunbi").toggleClass('opened');
      }
      if($(this).hasClass("btn_goseikyo")) {
        $(".modal_goseikyo").toggleClass('opened');
      }
      if($(this).hasClass("btn_missou")) {
        $(".modal_missou").toggleClass('opened');
      }
    });
    $(".modalClose").click(function(){
      $(".modalBg").toggleClass('opened');
      if($(this).hasClass("close_jizenjunbi")) {
        $(".modal_jizenjunbi").toggleClass('opened');
      }
      if($(this).hasClass("close_goseikyo")) {
        $(".modal_goseikyo").toggleClass('opened');
      }
      if($(this).hasClass("close_missou")) {
        $(".modal_missou").toggleClass('opened');
      }
    });
    $("main section.s04 .wrapper .box01 > dl .dd01 .btn2").click(function(){
      $(this).prev('.content').toggleClass('opened');
      $(this).toggleClass('opened');
    });
  });
}