$(function () {
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
});
