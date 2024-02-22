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
            var closestTh = $(e.target).closest("th");

    // Check if the closest "td" element exists and its content is not "Not available"
    if (closestTd && closestTd.text().trim().toLowerCase() !== "not available" &&
    closestTh.length === 0) {
        var heading = closestTd.closest("table").find("th").eq(closestTd.index()).text().trim();
        closestTd.toggleClass("highlight");
        if( closestTd.hasClass("highlight")){
             // Show Bootstrap modal with the site name
             $('#myModal .modal-body').empty();
            $('#myModal').modal('show');
            $("td.highlight").each(function() {
            var selectedTd = $(this);
            var selectedContent = selectedTd.text().trim();
            var selectedHeading = selectedTd.closest("table").find("th").eq(selectedTd.index()).text().trim();
            $('#myModal .modal-body').append("<p>" + selectedContent + " at " + selectedHeading + "</p>");
            });
        }else{
            $('#myModal .modal-body .selected-item:contains(' + content + " at " + heading + ')').remove();
        }
    }
        })
    });