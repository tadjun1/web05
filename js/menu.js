(function($){
  $(function(){
   
  var $header = $('header'),
      $menu = $header.find('.menu-btn'),
      $gnb = $header.find('.gnb');
   
  $menu.on('click', function(){
    $menu.toggleClass('on');
    $gnb.toggleClass('on');
  });  
  
  $gnb.on('click', 'a', function(){
    $menu.removeClass('on');
    $gnb.removeClass('on')
  });
		
		$(window).resize(function () {
			secSize();
		});
		
		function secSize(){
			var st1Height = $('#st1 .con-box').outerHeight(),
					st2Height = $('#st2 .con-box').outerHeight(),
					st5Height = $('#st5 .con-box').outerHeight();
			
			$('#st1').height(st1Height);
			$('#st2').height(st2Height);
			$('#st5').height(st5Height);
		};
		
    secSize();
		/*스크롤 이벤트 막는 이벤트*/
		$gnb.on('scroll touchmove mousewheel', function (event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});

		
	/* 여기부터 jun_modal_popup 시작 */
	/* jun_modal_popup Code by tadjun@naver.com */
	/* img의 이미지가 작은 경우 img를 a태그로 감싸고 보여주고 싶은 이미지의 주소를 a태그의 href에 연결 하세요. */
	$('.modal-popup').each(function () {
		var $modalPop = $(this),
		//	$thisPop = $('.this-popup a'), /* a태그를 사용할때는 이 부분을 풀고 사용 하세요. */
			$thisPop = $('.this-popup img'), /* a태그를 사용할때는 이 부분을 주석 처리 하세요. */
			$imgPop = $modalPop.children('.img-popup'),
			$closePop = $modalPop.children('.close-popup');

		$thisPop.on('click', function (a) {
		  a.preventDefault(); /* a태그가 새창을 열지 못하게 합니다. */
			var imgWidth = $(this).get(0).naturalWidth, // image original width
				imgHeight = $(this).get(0).naturalHeight; // image original height

			$(this).clone().appendTo($imgPop); /* a태그를 사용할때는 이 부분을 주석 처리 하세요. */
		//	$imgPop.append('<img src="' + $(this).attr('href') + '">'); /* a태그를 사용할때는 이 부분을 풀고 사용 하세요. */

			if (imgWidth >= imgHeight) {
				$imgPop.children('img').css('width','100%');
			} else {
				$imgPop.children('img').css('height','100%');
			}
			$modalPop.addClass('on');
		});

		$modalPop.on('click', function () {
			$imgPop.empty();
			$modalPop.removeClass('on');
		});

		// 창크기 변화 감지 (팝업 사이즈 세팅에 사용됨.)
		$(window).resize(function () {
			popupSize();
		});

		function popupSize() {
			var wrWidth = $(window).width(),
				wrHeight = $(window).height(),
				wWidth = wrWidth * 0.9, // 모달 팝업 이미지의 사이즈 (현재 창기준 90%)
				wHeight = wrHeight * 0.9; // 모달 팝업 이미지의 사이즈 (현재 창기준 90%)
			if (wrWidth > wrHeight) {
				$imgPop.css({
					width: wHeight + 'px',
					height: wHeight + 'px'
				});
			} else {
				$imgPop.css({
					width: wWidth + 'px',
					height: wWidth + 'px'
				});
			}
		};
		$modalPop.on('scroll touchmove mousewheel', function (event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
		popupSize(); // 제일 처음 모달 팝업창 사이즈 셋팅
	});
	/* 여기까지 jun_modal-popup 종료 */

		
  });
})(jQuery);




