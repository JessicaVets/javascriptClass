
       var donutShop = function (location, minCustHr, maxCustHr, avgDonutCust, hours)
      {
        this.location = location;
        this.minCustHr = minCustHr;
        this.maxCustHr = maxCustHr;
        this.avgDonutCust = avgDonutCust;
        this.hours = hours;
        this.totalDonuts = 0;
        this.report = function ()
        {
          console.log(this.location + " sold this number of donuts: " + this.totalDonuts);
         };
        this.getDonutsPerHour = function()
        {
          var numCust = getRandomArbitrary(this.minCustHr, this.maxCustHr);
          var numDonuts = Math.floor(numCust * this.avgDonutCust);
          return numDonuts;
        };

        this.getDonutsPerDay = function () {
          var numDonutDay = this.getDonutsPerHour() * this.hours;
          return numDonutDay;
        };
       }
       //new object goes here, outside the original object before the program
       var DonutMaster = function ()
       {
        this.attribute = stuff;
        this.addShop = function () {

        };
        this.generateReport = function () {

        }

       }




      // next we assign value to the keys
      var downtown = new donutShop ("Downtown", 8, 43, 4.5, 6),
        CH = new donutShop ("Capitol Hill", 4, 37, 2, 10),
        SLU = new donutShop ("South Lake Union", 9, 23, 6.33, 9),
        Wedgewood = new donutShop ("Wedgewood", 2, 28, 1.25, 8),
        Ballard = new donutShop ("Ballard", 8, 58, 3.75, 10);

      // Returns a random number between min (inclusive) and max (exclusive)
      function getRandomArbitrary(minCustHr, maxCustHr) {
        return Math.floor(Math.random() * (maxCustHr - minCustHr + 1) + minCustHr);
      }

/*
      for (var i = 5; i <= 24; i++) {
        console.log("hour " + i);

        if (i>downtown.openHrs && i<downtown.closeHrs) {
          var numCust = getRandomArbitrary(downtown.minCustHr, downtown.maxCustHr);
          var numDonuts = numCust * downtown.avgDonutCust;
          console.log("Downtown sold this number of donuts this hour: " + numDonuts);
          downtown.totalDonuts += numDonuts;
        }; */




      console.log("end of day")

      console.log(downtown.report());
      console.log(CH.report());
      console.log(SLU.report());
      console.log(Wedgewood.report());
      console.log(Ballard.report());

