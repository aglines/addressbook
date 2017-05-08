//BUSINESS Logic
function Place (place, country, notes){
  this.place = place;
  this.country = country;
  this.notes = notes;
  // console.log("madde it to the functino");
}

Place.prototype.location = function(){
  // console.log("success in location");
  return this.place + ", " + this.country;
}

//USER INTERFACe Logic

$(document).ready(function(){
  $("form#placeForm").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("input#placename").val();
    var inputtedCountry= $("input#country").val();
    var inputtedNotes = $("input#notes").val();
    // console.log(inputtedNotes);
    var place = new Place(inputtedPlace, inputtedCountry, inputtedNotes);

      $("#output").show();
      $("ul#output").append("<li><span class='fulllocation'>" + place.location() + "</span></li>");
      $(".fulllocation").click(function(){
        $(".fulllocation").append("<br>" + place.notes);
      });

  });
});
