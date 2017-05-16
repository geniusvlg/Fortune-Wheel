function rotateImg() {

  $('#mask').fadeIn(200);
  setTimeout(function () {
    play();
  }, 200);
}



function play() {
  // Get a random reward
  var reward =  reward_list[Math.floor(Math.random() * reward_list.length)];
  var obj = JSON.parse(data);
  var round = 14;
  console.log(obj[reward])
  var ang = round * 360 + parseInt(obj[reward][0].angle);
  var token = $('#my_token').val();

  $('#wheel').rotate({
    angle: 0,
    animateTo: ang,
    duration: 1000,
    callback: function(){
      showPopup(obj[reward][1].image, obj[reward][2].content)
    }
  });
}

function showPopup(image_url, content) {
  console.log("Show popup")
  $(".firework").css("display","block");

  $(".popup").css("display","block");

   console.log("finish");
  $('#reward-img').attr('src', image_url)

  $('.text-reward').text(content)

  $('.close').click(function () {
    hidePopup();
  });
}


function stop() {
  $('#canvas').hide();
  $('#mask').hide();
}

function hidePopup(id) {
  $('.popup').css("display","none")
  $(".firework").css("display","none");
  $('#mask').hide();
}
