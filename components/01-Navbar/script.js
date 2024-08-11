const scriptNavbar = ()=>{
  window.onscroll = function() {
  var scrollPosition = document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (scrollPosition / scrollHeight) * 100;
  document.querySelector('.progressbar').style.width = scrolled + '%';
};}
