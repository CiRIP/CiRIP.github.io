document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    //dotColor: '#5cbdaa',
    //lineColor: '#5cbdaa'
    dotColor: '#073642',
    lineColor: '#073642'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);