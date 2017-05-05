var loadCallback = function () {
  $('#content').show();
};

$(window).load(function () {
  $h_footer = $('#footer').outerHeight(true);
  $h_window = $(window).outerHeight(true);
  $width = $(window).outerWidth(true);
  console.log("Height: " + $h_window);
  console.log("Width: " + $width);
  if ($h_window > 1060 || $width > 1060)
  {
    $('#wrapper').css("height", $h_window - $h_footer);
    loadCallback();
  }

});

