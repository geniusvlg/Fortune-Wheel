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
  var round = 12;
  console.log(obj[reward])
  var ang = round * 360 + parseInt(obj[reward][0].angle);
  var token = $('#my_token').val();

  $('#wheel').rotate({
    angle: 0,
    animateTo: ang,
    duration: 7000,
    callback: function(){
      //showPopup(obj[reward][1].image, obj[reward][2].content)
    }
  });
}

function showPopup(image_url, content) {
  console.log("Show popup")
  var $firework = $(".firework");
  $firework.css("display","block");

  var $popup = $(".popup");
  $popup.css("display","block");

   console.log("finish");
  $('#reward-img').attr('src', image_url)
}


function stop() {
  $('#canvas').hide();
  $('#mask').hide();
}
