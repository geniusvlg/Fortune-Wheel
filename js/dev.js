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

});

