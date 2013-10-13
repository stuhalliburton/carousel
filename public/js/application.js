var c = $('#carousel');

var nextDeg = function(){
  return c.data('next');
};

var prevDeg = function(){
  return c.data('prev');
};

var setDeg = function(deg){
  c.data('next', deg - 40);
  c.data('prev', deg + 40);
};

var next = function(){
  var deg = nextDeg();
  setDeg(deg);
  c.attr('style', 'transform: rotateY(' + deg + 'deg)');
};

var prev = function(){
  var deg = prevDeg();
  setDeg(deg);
  c.attr('style', 'transform: rotateY(' + deg + 'deg)');
};

$('#next').click(next);
$('#prev').click(prev);
