function generateCode(){
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    // genrate multiple characters using loop
    for(var i=0; i<=8; i++){
        var char = Math.random()*str.length;
        code+=str.charAt(char)
    }
    return code;
}
document.getElementById("codes").innerHTML=generateCode();
// disable button
function disableButton(){
    document.getElementById("submit").disabled = true;
}
disableButton();