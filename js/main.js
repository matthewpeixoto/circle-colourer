$form = $('.form');
$color = $('.color');
$ball = $('.ball');

$form.on('change', function () {
  $ball.css('background-color', $color.val());
});
