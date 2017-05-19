$(window).load(function () {
  //rotateImg();
  $width = $(window).outerWidth(true);
  console.log("Width: " + $width);
  if ($width < 992)
  { 
    document.getElementById('backgroundImg').src='images/section-3-mobile-background.png'
  } else
  {
    document.getElementById('backgroundImg').src='images/section-3-background.png'
  }

  

});


function hidePopup(id) {
  $('#' + id).removeClass('open');
}

