    var empty = 10;
    var slightly = 4;
    var crowded = 3;

    function emptyFunc()
    {
      var status = document.getElementById("currStatus");
      if ((empty>=slightly && empty >=crowded) || (empty==0 && slightly==0 && crowded==0)) 
      {
        status.style.color = "lightgreen";
        status.outline = 1;
        status.innerHTML = "<font size='5'>Empty</font>";

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
        status.innerHTML = "<font size='5'>Slightly Crowded</font>";
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
        status.innerHTML = "<font size='5'>Crowded</font>";
      }     
      crowded++;
      console.log("empty: " + empty + " slightly: " + slightly + " crowded: " + crowded);
    }

    /*function addReview() {
        var review = document.getElementById("fill");
        console.log("testing fill");
        var image = "http://writedirection.com/website/wp-content/uploads/2016/09/blank-profile-picture-973460_960_720.png";

        //var review = $(this).closest(".fill");

        /*review.append("<div class='row' style='padding-left:25px; padding-top:25px'>
                <img src=image
                     height='25p' width='25px' align='left'/>
                <h4>&nbsp;&nbsp;John Doe</h4>
                <span style='color: orange; font-size: 20px'>
                <span>&#9733</span>
                <span>&#9733</span>
                <span>&#9733</span>
                <span>&#9733</span>
                <span>&#9734</span>
            </span>
                <p>This place is awesome!! </p>
                <a href='#'' class='btn-link'>Useful</a>
                &nbsp;
                <a href='#'' class='btn-link'>Funny</a>
            </div>");*/
    //  review.("<p>SPAM</p></div>");
    //}

    function popup() {
        var popup = document.getElementById('myPopup');
        popup.classList.toggle('show');
        console.log("Got the review!")
    }