// init Isotope
var $grid = $('#team-area').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows',
});

$grid.imagesLoaded().progress(function() {
  $grid.isotope('layout');
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

