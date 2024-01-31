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
    // *** Random Codes ***
    var code = '';
    var getCode = '';
    var btnvalue;
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

function generateCode(){
    // genrate multiple characters using loop
    for(var i=0; i<=8; i++){
        var char = Math.random()*str.length;
        code+=str.charAt(char)
    }
    return code;
}
document.getElementById("codes").innerHTML=generateCode();

// disable button

function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue;
    if(btnvalue == true){
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)"; 
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)"; 
    }else{
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)"; 
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)"; 
    }
}
//  code input box
var codebox = document.getElementById("codeenetered");
codebox.addEventListener("input", evaluateCode);
function evaluateCode(){
    getCode= document.getElementById("codeenetered").value;
    var charset1 = getCode.trim();
    var charset2= code.trim();
    if(charset1.length == charset2.length && charset1==charset2){
        disableButton(false)
    }
}