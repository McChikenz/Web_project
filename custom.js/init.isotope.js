// init Isotope
var $grid = $('#team-area').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows',
});

// filter items on button click
$('.filter-button-group').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

