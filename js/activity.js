// code to show Partner section
       // Create an array of partner images
       var partnerImages = [
        "partner-bustour.png",
        "partner-cabinrental.png",
        "partner-campingadv.png",
        "partner-collegetours.png",
        "partner-rentalbike.png",
        "partner-tourgroup.png"
    ];
    // Get the ul element by its id
    var ul = document.getElementById("partners");
    
    // Iterate through the array and create list items with images
    partnerImages.forEach(function(imageSrc) {
        var li = document.createElement("li");
        li.className = "partner";
    
        var img = document.createElement("img");
        img.src = "images/partners/" + imageSrc;
        img.alt = "Partner " + imageSrc.split('-').slice(1, -1).join(' ');
    
        // Append the image to the list item
        li.appendChild(img);
    
        // Append the list item to the ul
        ul.appendChild(li);
    });
    // jquery code for table
    $(document).ready(function(){
        $(document).bind("click",function(e){
            var closestTd = $(e.target).closest("td");
            var content = closestTd.text();

    // Check if the closest "td" element exists and its content is not "Not available"
    if (closestTd && closestTd.text().trim().toLowerCase() !== "not available") {
        closestTd.toggleClass("highlight");
        if( closestTd.hasClass("highlight")){
            $("#displaySelected").css("visibility","visible");
            $("#displaySelected").css("margin-top","2em");
            $("#result").append("<p>"+content+"</p>");
        }else{
            $('#result p:contains('+content+')').remove;
            if( $("#result").has('p').length==false){
                $("#displaySelected").css("visibility","hidden");
                $("#displaySelected").css("margin-top","0");
            }
        }
    }
        })
    });