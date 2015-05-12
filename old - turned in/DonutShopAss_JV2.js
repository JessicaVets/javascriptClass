
    <script>
      // First we are setting up the object donutShop with its various parameters.
      var donutShop = function (location, minCustHr, maxCustHr, avgDonutCust, openHrs, closeHrs)
      {
        this.location = location;
        this.minCustHr = minCustHr;
        this.maxCustHr = maxCustHr;
        this.avgDonutCust = avgDonutCust;
        this.openHrs = openHrs;
        this.closeHrs = closeHrs;
        this.totalDonuts = 0;
        this.report = function ()
        {
          console.log(this.location + (this.avgDonutCust * openHrs));
         };
       }
      // next we assign value to the keys
      var downtown = new donutShop ("downtown", 8, 43, 4.5, 6, 17),
        CH = new donutShop ("Capitol Hill", 4, 37, 2, 10, 22),
        SLU = new donutShop ("South Lake Union", 9, 23, 6.33, 9, 17),
        Wedgewood = new donutShop ("Wedgewood", 2, 28, 1.25, 8, 15),
        Ballard = new donutShop ("Ballard", 8, 58, 3.75, 10, 18);

        // Returns a random number between min (inclusive) and max (exclusive)
        function getRandomArbitrary(minCustHr, maxCustHr)
        {
          return Math.floor(Math.random() * (maxCustHr - minCustHr) + minCustHr);
        }

for (var i = 5; i <= 24; i++)
{
  console.log("hour " + i);
  if (i>downtown.openHrs && i<downtown.closeHrs)
    {
      var numCust = getRandomArbitrary(downtown.minCustHr, downtown.maxCustHr);
      var numDonuts = numCust * downtown.avgDonutCust;
      console.log("Downtown " + numDonuts);
    };

};


      console.log(downtown.report());
     // console.log(CH.report());
     // console.log(SLU.report());
     // console.log(Wedgewood.report());
     // console.log(Ballard.report());

    </script>
