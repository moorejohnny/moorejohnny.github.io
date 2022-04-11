var videos = [
  '1.mp4',
  '3.mp4',
  '2.mp4'
];

var index = Math.floor(Math.random() * videos.length);
var html='<div><video width="100%" height="100%" src="media/video/' + videos[index] + '</video></div>';
document.write(html);

$(document).ready(function() {
  $('#content').load('/home.html');

  $('#js-navigation a').click(function(e) {
    e.preventDefault();
    $("#content").load(e.target.href);
  })
});

const setTheme = theme => document.documentElement.className = theme;

document.getElementById('theme-select').addEventListener('change', function() {
  setTheme(this.value);
});