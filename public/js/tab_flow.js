$(function () {
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
});
