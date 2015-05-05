var GUI = {};

GUI.registerEvents = function() {
  // Clicking stations
  $('.station').on('click', this._selectStation);
}

GUI.log = function(msg) {
  var $output = $('#output');
  var output = $output[0];

  output.scrollTop = output.scrollHeight;
  msg += '\n';

  var htmlMsg = msg.replace(/\n/g, '<br>');

  $output.append(htmlMsg);
  console.log(msg);
}

GUI._selectStation = function() {
  var $prevSelected = $('.station.selected');
  var prevSelected = ($prevSelected.length) ? $prevSelected.attr('id').split(' ') : 0;
  var selected = $(this).attr('id').split(' ');

  if (!prevSelected) {
    var line = MTA.findLine(selected[0]);
    var station = line.stations[selected[1]];

    GUI.log('Arrived at ' + station + ' station (line ' + line.name + ')\n');
    $(this).toggleClass('selected');
    return;

  }


  var startLine = MTA.findLine(prevSelected[0]);
  var startStation = startLine.stations[prevSelected[1]];
  var endLine = MTA.findLine(selected[0]);
  var endStation = endLine.stations[selected[1]];

  $prevSelected.toggleClass('selected');
  $(this).toggleClass('selected');

  MTA.planTrip(startLine.name, startStation, endLine.name, endStation);
}
