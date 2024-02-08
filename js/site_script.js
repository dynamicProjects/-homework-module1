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

    $(document).ready(function(){
        // Show lightbox on click
        $(".wrapper img").click(function(){
            $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
          var imgSrc = $(this).attr('src');
          $(".lightbox-image").attr('src', imgSrc);
          $(".lightbox").fadeIn();
        });
        
        // Close lightbox on close button click or clicking outside the image
        $(".lightbox, .close").click(function(){
            $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
                $('.backdrop').css('display', 'none');
            });
          $(".lightbox").fadeOut();
        });
      });
    