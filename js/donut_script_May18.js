// Jessica Vets
// homework #5, donut shop adding Jquery
// date: May 18, 2015

//This is jquery to add some "perkup" effects to the page
$(function() {
  $('nav').hide.slideup;
  var $nav = $('nav');
  $nav.hide().each(function(index) {
    $(this).delay(1400 * index).fadeIn(1400);
  });
  $nav.on('open', function() {
    (this).fadeOut(700);
  });
});

var donutShop = function(location, minCustHr, maxCustHr, avgDonutCust, hours) {
  this.location = location;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgDonutCust = avgDonutCust;
  this.hours = hours;
  this.totalDonuts = 0;
  this.report = function() {
    console.log(this.location + " sold this number of donuts: " + this.totalDonuts);
  };
  this.getDonutsPerHour = function() {
    var numCust = getRandomArbitrary(this.minCustHr, this.maxCustHr);
    var numDonuts = Math.floor(numCust * this.avgDonutCust);
    return numDonuts;
  };
  this.getDonutsPerDay = function() {
    var numDonutDay = this.getDonutsPerHour() * this.hours;
    return numDonutDay;
  };
}

//new object goes here, outside the original object before the program

var DonutMaster = function() {
  this.list = [];
  this.addShop = function(name) {
    this.list.push(name);
  };
  this.generateReport = function() {
    for (var i = 0; i < this.list.length; i++) {
      console.log("The Donut Shop name is " + this.list[i].location +
        " and the average donuts sold are " + this.list[i].getDonutsPerHour() +
        " the number of donuts sold each day are " + this.list[i].getDonutsPerDay());
    };

  };
}

//Is this where the jquery should be inserted? This is after the for loop


// next we assign value to the keys

var downtown = new donutShop("Downtown", 8, 43, 4.5, 6),
  CH = new donutShop("Capitol Hill", 4, 37, 2, 10),
  SLU = new donutShop("South Lake Union", 9, 23, 6.33, 9),
  Wedgewood = new donutShop("Wedgewood", 2, 28, 1.25, 8),
  Ballard = new donutShop("Ballard", 8, 58, 3.75, 10);

var DonutMaster = new DonutMaster();

// Returns a random number between min (inclusive) and max (exclusive)

function getRandomArbitrary(minCustHr, maxCustHr) {
  return Math.floor(Math.random() * (maxCustHr - minCustHr + 1) + minCustHr);
}


DonutMaster.addShop(downtown);
DonutMaster.addShop(CH);
DonutMaster.addShop(SLU);
DonutMaster.addShop(Wedgewood);
DonutMaster.addShop(Ballard);

DonutMaster.generateReport();

//Here is my jQuery test area... but does it need to go up inside the function?



$(function() {
      var $newTableRow = $('<tr class ="data"><td>downtown</td><td>new cell</td><td>data2 cell</td></tr>');
      $('tr.data:last').after ($newTableRow);
      $('newTableRow').append(DonutMaster.addShop(downtown));
    });

/*
$("tbody").append("<tr id='" + i + "'></tr>");
  $("#" + i).append("<td> + this.newList[i].name + </td>");
*/





