var GUI = {};

GUI.registerEvents = function() {
  // Clicking stations
  $('.station').on('click', this._selectStation);
}

GUI.log = function(msg) {
  var $output = $('#output');
  var output = $output[0];

  output.scrollTop = output.scrollHeight;
  $output.append('>>  ' + msg + '<br>');
}

GUI._selectStation = function() {
  $selected = $('.station.selected');

  if (!$selected.length) {
    var elementID = $(this).attr('id').split(' ');
    var line = MTA.findLine(elementID[0]);
    var station = line.stations[elementID[1]];

    GUI.log('Arrived at ' + station + ' station (line ' + line.name + ')');
    $(this).toggleClass('selected');
  }
}
