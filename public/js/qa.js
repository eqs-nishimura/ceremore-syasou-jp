$(function () {
  $(document).ready(function() {
    $(".dl_qa dt").click(function(){
      $(this).next('dd').fadeToggle(200);
      $(this).toggleClass('opened');
    });
  });
});
