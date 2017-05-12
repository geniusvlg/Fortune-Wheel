loadCallback = function () {
  $h_header = $('#header').outerHeight(true);
  $h_footer = $('#footer').outerHeight(true);
  $h_window = $(window).outerHeight(true);
  $h_content = $h_window - ($h_header + $h_footer);
  $width = $(document).outerWidth(true);

  $('#content').css('height', $h_content).show();
  $('.turn').css('bottom', $h_footer + 10);
  $('.btn-share-home').css('bottom', $h_footer + 10);
  $h_content = $('#content').outerHeight(true);
  var a_canvas;
  if ($width > $h_content + 20) {
    a_canvas = $h_content - 20;
    $('#canvas').css('margin-top', "10px");
  }
  else {
    a_canvas = $width - 40;
    $mt = ($h_content - a_canvas) / 2;
    $('#canvas').css('margin-top', $mt + "px");
  }

  $('#canvas').css('width', a_canvas + "px");
  $('#canvas').css('height', a_canvas + "px");
};

isPlay = false;
function rotateImg() {

    if (isPlay == false) {
    $('#mask').fadeIn(200);
//    var k = Math.floor((Math.random() * 11) + 0);
//    var round = Math.floor((Math.random() * 8) + 6);
    isPlay = true;
    setTimeout(function () {
      play();
    }, 200);
  }
}

function play() {
  var round = 14;
  var ang = round * 360;
  var token = $('#my_token').val();

  $('#wheel').rotate({
    angle: 0,
    animateTo: ang,
    duration: 3000,
    callback: function() {
      console.log("finish");
      showPopup('popup-error');
    }
  });


  var ok = ({
    url: $('#url_rotate').val(),
    dataType: 'json',
    data: {token: token},
    success: function (data) {
      if (data.result) {
        $('#my_token').val(data.token);
        ang = data.angle + ang;
        $('#wheel').rotate({
          animateTo: ang,
          duration: 15000,
//            easing: $.easing.easeInOutQuart,
          callback: function () {
            token = $('#my_token').val();
//            var url_reward = $('#url_reward').val();
//            url_reward = url_reward + "?win=" + data.win + "&token=" + token;
//            $.get(url_reward);

            if(data.type == "SHARE"){
              data.note += "<br><br><img style='cursor:pointer' onclick='shareFB(1)' src='/wap/images/btn-share.png' />";
            }
            $('#popup-result div.bold').html(data.message);
            $('#popup-result div.description').html(data.note);

            $('#mask').hide();
            showPopup('popup-result');
            if (data.turn <= 0) {
              $('#canvas button').addClass('inactive');
            }
            else {
              $('#canvas button').css('opacity', '1');
              isPlay = false;
            }
            $('#total-turn').html(data.turn);
          }
        });
      }
      else {
        stop();
        $('#popup-result div.description').html(data.message);
        showPopup('popup-error');
        setTimeout(function () {
          location.reload();
        }, 1500);
      }
    },
    error: function () {
      stop();
      showPopup('popup-error');
      setTimeout(function () {
        //location.reload();
      }, 1500);
    },
    timeout: 10000
  });
}

function stop() {
  $('#canvas').hide();
  $('#mask').hide();
}
