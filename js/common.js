

$(function(){
    //네비이동
    $('li > a').click(function (){
    	$('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
    });

    // 컨텐츠 더보기
    $(".js-load").slice(0, 4).show(); // select the first 4
    $(".moreBtn").click(function(e){ // click event for load more
        e.preventDefault();
        $(".js-load:hidden").slice(0, 4).show(); // select next 4 hidden divs and show them
        if($(".js-load:hidden").length == 0){ // check if any hidden divs still exist
            // alert("No more divs"); // alert if there are none left
            $('.moreBtn').hide();
        }
    });

    const $cursor = $('.cursor');
    const $link = $('.link');
    let isMouseOverLink = false; // .link 요소 위에 마우스가 있는지 추적
    let isMouseDown = false; // 마우스 버튼이 눌려 있는지 추적

    // 커서 상태 업데이트 - $link 위에 있거나 마우스 버튼이 눌려있으면 확대
    function updateCursor() {
        if (isMouseOverLink || isMouseDown) {
            $cursor.addClass('cursor_expand');
        } else {
            $cursor.removeClass('cursor_expand');
        }
    }

    // 마우스 이동에 따라 커서 위치 업데이트
    $(document).mousemove(function(e) {
        $cursor.css({
            'left': e.pageX - $cursor.width() / 2 + 'px',
            'top': e.pageY - $cursor.height() / 2 + 'px'
        });
        updateCursor(); // 마우스 이동 시 커서 상태 업데이트
    });

    // .link 요소에 마우스 오버 시 isMouseOverLink 업데이트
    $link.mouseenter(function() {
        isMouseOverLink = true;
        updateCursor();
    }).mouseleave(function() {
        isMouseOverLink = false;
        updateCursor();
    });

    // 마우스 버튼 누름/뗌에 따라 isMouseDown 업데이트
    $(document).mousedown(function() {
        isMouseDown = true;
        updateCursor();
    }).mouseup(function() {
        isMouseDown = false;
        updateCursor();
    });
});


