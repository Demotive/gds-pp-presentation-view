var getUnitWidth = function($mainEl) {
  return $mainEl.width();
};

var getUnitPosition = function($mainEl) {
  return parseInt($mainEl.css('margin-left'));
};

var slide = function() {
  if (currentUnit === totalUnits) {
    currentUnit = 0;
  }
  $mainEl.css({
    'margin-left' : (unitPosition - (unitWidth * currentUnit)) + 'px'
  });
  currentUnit++;
};

$(function() {

  $mainEl = $('#units');
  totalUnits = $mainEl.find('.unit-data').length;
  currentUnit = 0;

  unitWidth = getUnitWidth($mainEl);
  unitPosition = getUnitPosition($mainEl);

  var sliderTimer = window.setInterval(slide, 5000);

});
