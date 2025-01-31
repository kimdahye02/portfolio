

$(function(){
    //네비이동
    $('li > a').click(function (){
    	$('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
    });

    // 컨텐츠 더보기
    // $(".js-load").slice(0, 4).show(); // select the first 4
    // $(".moreBtn").click(function(e){ // click event for load more
    //     e.preventDefault();
    //     $(".js-load:hidden").slice(0, 4).show(); // select next 4 hidden divs and show them
    //     if($(".js-load:hidden").length == 0){ // check if any hidden divs still exist
    //         // alert("No more divs"); // alert if there are none left
    //         $('.moreBtn').hide();
    //     }
    // });

    //서브 sns 탭메뉴
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
    

    
});


