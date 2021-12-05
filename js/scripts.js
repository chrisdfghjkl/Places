// Business Logic -----------------

function Places(name, location, date, notes) {
  this.placeName = name;
  this.placeLocation = location;
  this.placeDate = date;
  this.placeNotes = notes;
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
    $('#result-log').append("<li style='list-style-type:none' class='placeName'><h3>"+ placeLog.placeName +"</h3><p class='place-details'>" + placeLog.placeLocation + "</p><p class='place-details'>" + placeLog.placeDate + "</p><p class='place-details'>" + placeLog.placeNotes + "</p></li>");

    $('.placeName').last().click(function() {
      $(this).find('.place-details').toggle();
    });
  });
});