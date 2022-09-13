$(function () {
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
});
