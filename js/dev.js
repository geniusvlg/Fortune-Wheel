$(window).load(function () {
  $width = $(window).outerWidth(true);
  console.log("Width: " + $width);
  if ($width < 769)
  { 
    document.getElementById('backgroundImg').src='images/section-3-mobile-background.png'
  } else
  {
    document.getElementById('backgroundImg').src='images/section-3-background.png'
  }
 $('#mask').fadeIn(200);
  //rotateImg();

});

function showPopup(id, content) {

  if (typeof(content) === 'undefined') {

     content = 'Kết nối gặp gián đoạn, vui lòng vào mục quà tặng để kiểm tra kết quả quay. Xin cảm ơn !';
  }

  $('#popup-error div.description').html(content);
  $('#' + id).addClass('open');
  $('#' + id + ' .popup-body').addClass('open');
  $('#' + id).find('.close').click(function () {
    hidePopup(id);
    $('#mask').fadeOut(200);
  });
}

function hidePopup(id) {
  $('#' + id).removeClass('open');
}