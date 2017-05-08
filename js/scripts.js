//Business Logic
function Contact(first, last, tel, email, street, apt, city, state, zip) {
  this.firstName = first;
  this.lastName = last;
  this.telephone = tel;
  this.email = email;
  this.street = street;
  this.apt = apt;
  this.city = city;
  this.state = state;
  this.zip = zip;


}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

Contact.prototype.address = function(){
  return this.street + " " + this.apt + " " + this.city + " " + this.state + " " + this.zip;
}

//User Interface Logic
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedTel, inputtedEmail, inputtedStreet, inputtedApt, inputtedCity, inputtedState,inputtedZip);

    var inputtedFirstName = $("input#new-first-name").val("");
    var inputtedLastName = $("input#new-last-name").val("");
    var inputtedTel = $("input#new-telephone").val("");
    var inputtedEmail = $("input#new-email").val("");
    var inputtedStreet = $("input#new-street").val("");
    var inputtedApt = $("input#new-apt").val("");
    var inputtedCity = $("input#new-city").val("");
    var inputtedState = $("input#new-state").val("");
    var inputtedZip = $("input#new-zipcode").val("");

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + newContact.telephone + newContact.address() +  "</span></li>");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $("#show-contact h2").text(newContact.lastName);

    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".last-name").text(newContact.lastName);

  });
  });
});
