$( function() {
  // This bit gets isotope started and working, it knows what class to look for on each item in the grid and how things should be laid out.
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // This is the bit that actually does the filtering in the $grid, this is where the magic happens. It's pretty much all handled by isotope so I don't need to do much for the animations or anything.
  $('.filters-button-group').on('click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons, is-checked is basically the isotope way of saying which filter is currently active. This is why when looking at the index.html.erb file, you can see Show All is on by default. TO BE CLEAR THOUGH, THIS IS ABOUT THE BUTTONS LOOKING PRETTY, NOT THE COOL GRID SHIT.
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});
