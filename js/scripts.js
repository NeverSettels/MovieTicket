// Backend 

// Ticket = function() {
// this.stub = [];
// this.currentId = 0;
// }

// Ticket.prototype.addTicket = function(stud) {
// studId = this.assignId();
// this.stubs.push(stub);
// }

// Ticket.prototype.assignId = function() {
//   this.currentId++;
//   return this.currentId[i];
// }

// "Stub" Logic

function Ticket(movieName, movieTime, movieAge, movieType) {
this.movieName = movieName;
this.movieTime = movieTime;
this.movieAge = movieAge;
this.movieType = movieType;
this.price = 0;
}
Ticket.prototype.isNew=function(){
  if (this.movieType === 'premier'){
    this.price = 14;
  }else{
    this.price = 9;
  }
  return this.price
}
Ticket.prototype.calcPrice = function() {
  this.price = this.isNew()
  if(this.movieTime === "matinee"){
    this.price -= 2;
  }else if(this.movieAge === 'senior' || this.movieAge === 'child' ){
    this.price--;
  }
  return this.price
}

// UI

var ticket = new Ticket();

$(document).ready(function(){
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();
    var movieName = $("select#movie-name").val();
    var movieTime = $("select#movie-time").val();
    var movieAge = $("select#movie-age").val();
    var movieType = $("select#movie-type").val();
    $("select#movie-name").val();
    $("select#movie-time").val();
    $("select#movie-age").val();
    $("select#movie-type").val();
    var newTicket = new Ticket(movieName, movieTime, movieAge, movieType);
    newTicket.calcPrice();
    $('div#output').text(`Movie: ${newTicket.movieName}, Price: ${newTicket.price}`)


  })
})