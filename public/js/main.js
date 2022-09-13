function main() {
  $(document).ready(function() {
    $(".syasouTypeList .misso").click(function(){
      $(".modalBg").addClass('opened');
      $(".modalWrapper").addClass('opened');
    });
    $(".modalClose").click(function(){
      $(".modalBg").removeClass('opened');
      $(".modalWrapper").removeClass('opened');
    });
  });
}