// Business Logic -----------------

function Places(name, location, date, notes) {
  this.name = name;
  this.location = location;
  this.date = date;
  this.notes = notes;
}

// UI Logic ---------------------

$(document).ready(function(){
  $("form#place-info").submit(function(event) {
    event.preventDefault();
    const placeName = $("#name").val();
    const placeLocation = $("#location").val();
    const placeDate = $("#when").val();
    const placeNotes = $("#notes").val();

    let placeLog = new Places(placeName, placeLocation, placeDate, placeNotes);
    $("#result-log").append("<li style='list-style-type:none;' id='log-title'><h3>" + placeLog.name + "</h3></li><li class='log-item'>" + placeLog.location + "</li><li class='log-item'>" + placeLog.date + "</li><li class='log-item'>" + placeLog.notes + "</li>");
  });
});