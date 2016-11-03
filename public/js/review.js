    var empty = 0;
    var slightly = 0;
    var crowded = 0;

    function emptyFunc()
    {
      var status = document.getElementById("currStatus");
      if ((empty>=slightly && empty >=crowded) || (empty==0 && slightly==0 && crowded==0)) 
      {
        status.style.color = "lightgreen";
        status.outline = 1;
        status.innerHTML = "Empty";

      }
      empty++;
      console.log("empty: " + empty + " slightly: " + slightly + " crowded: " + crowded);
    }

    function slightlyFunc()
    {
      var status = document.getElementById("currStatus");
      if ((slightly>=empty && slightly >=crowded) || (empty==0 && slightly==0 && crowded==0)) 
      {
        status.style.color = "yellow";
        status.innerHTML = "Slightly Crowded";
      }    
      slightly++;
      console.log("empty: " + empty + " slightly: " + slightly + " crowded: " + crowded);
    }

    function crowdedFunc()
    {
      var status = document.getElementById("currStatus");
      if ((crowded>=empty && crowded >=slightly) || (empty==0 && slightly==0 && crowded==0)) 
      {
        status.style.color = "red";
        status.innerHTML = "Crowded";
      }     
      crowded++;
      console.log("empty: " + empty + " slightly: " + slightly + " crowded: " + crowded);
    }