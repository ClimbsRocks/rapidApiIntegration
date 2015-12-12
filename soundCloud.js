// SC is defined for us in the JavaScript SDK soundCloud makes available for us, and which we've loaded int our index.html file
console.log('inside soundCloud.js')
SC.initialize({
  client_id: 'YOUR_CLIENT_ID_HERE'
});

var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  $('.soundcloud').append(oEmbed.html);
  console.log('oEmbed response: ', oEmbed);
});


