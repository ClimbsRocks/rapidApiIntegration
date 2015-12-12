$.ajax({
  url: "https://api.github.com/users/ClimbsRocks",
  contentType: 'application/json',
  success: function(json) {
    console.log('json from GitHub:',json);
    var $span = $('<span />').text(JSON.stringify(json));
    $('.github').append($span);
  }
})


