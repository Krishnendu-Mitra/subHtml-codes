//attached with DataConveter.html file


var num = 0, ans = 0;
var binpot = 2, decpot = 10, octpot = 8, hexpot = 16;
var btnbin = document.getElementById("binbtn");
var btndec = document.getElementById("decbtn");
var btnoct = document.getElementById("octbtn");
var btnhex = document.getElementById("hexbtn");

var binbox = document.getElementById("binSpace");
var decbox = document.getElementById("decSpace");
var octbox = document.getElementById("octSpace");
var hexbox = document.getElementById("hexSpace");

var ans = document.getElementById("ansSpace");
function binShift(){
    btnbin.style.background ="#fff";
    btnbin.style.color ="#0873ff";

    btndec.style.background ="#0873ff";
    btndec.style.color ="#fff";
    decbox.style.display = "none";
    
    btnoct.style.background ="#0873ff";
    btnoct.style.color ="#fff";
    octbox.style.display = "none";

    btnhex.style.background ="#0873ff";
    btnhex.style.color ="#fff";
    hexbox.style.display = "none";
    
    binbox.style.display = "block";
    ans.style.display = "none";
    num = 2;
}
function decShift(){
    btndec.style.background ="#fff";
    btndec.style.color ="#0873ff";
    
    btnbin.style.background ="#0873ff";
    btnbin.style.color ="#fff";
    binbox.style.display = "none";
    
    btnoct.style.background ="#0873ff";
    btnoct.style.color ="#fff";
    octbox.style.display = "none";

    btnhex.style.background ="#0873ff";
    btnhex.style.color ="#fff";
    hexbox.style.display = "none";
    
    decbox.style.display = "block";
    ans.style.display = "none";
    num = 10;
}
function octShift(){
    btnoct.style.background ="#fff";
    btnoct.style.color ="#0873ff";
    
    btnbin.style.background ="#0873ff";
    btnbin.style.color ="#fff";
    binbox.style.display = "none";
    
    btndec.style.background ="#0873ff";
    btndec.style.color ="#fff";
    decbox.style.display = "none";

    btnhex.style.background ="#0873ff";
    btnhex.style.color ="#fff";
    hexbox.style.display = "none";
    
    octbox.style.display = "block";
    ans.style.display = "none";
    num = 8;
}
function hexShift(){
    btnhex.style.background ="#fff";
    btnhex.style.color ="#0873ff";
    
    btnbin.style.background ="#0873ff";
    btnbin.style.color ="#fff";
    binbox.style.display = "none";
    
    btnoct.style.background ="#0873ff";
    btnoct.style.color ="#fff";
    octbox.style.display = "none";

    btndec.style.background ="#0873ff";
    btndec.style.color ="#fff";
    decbox.style.display = "none";
    
    hexbox.style.display = "block";
    ans.style.display = "none";
    num = 16;
}
function negCheck(cal){
    if(cal < 0){
        alert("-ve found in input data");
        window.location.reload();
    }
}
function conValue(){
    ans.style.display = "block";
    var invisebalbin = document.getElementById("binans");
    var invisebaldec = document.getElementById("decans");
    var invisebaloct = document.getElementById("octans");
    var invisebalhex = document.getElementById("hexans");
    var binans = document.getElementById("binansbox");
    var decans = document.getElementById("decansbox");
    var octans = document.getElementById("octansbox");
    var hexans = document.getElementById("hexansbox");
    if(num == 2){
        let cal = document.getElementById("queMassegea").value;
        negCheck(cal);
        invisebalbin.style.display = "none";
        invisebaldec.style.display = "block";
        invisebaloct.style.display = "block";
        invisebalhex.style.display = "block";
        decpot = parseInt(cal,2);
        decans.innerHTML = " "+decpot+" ";
        octpot = parseInt(cal,2).toString(8);
        octans.innerHTML = " "+octpot+" ";
        hexpot = parseInt(cal,2).toString(16);
        hexans.innerHTML = " "+hexpot+" ";
        binpot = cal;
    }else if(num == 10){
        let cal = document.getElementById("queMassegeb").value;
        negCheck(cal);
        invisebalbin.style.display = "block";
        invisebaldec.style.display = "none";
        invisebaloct.style.display = "block";
        invisebalhex.style.display = "block";
        binpot = parseInt(cal,10).toString(2);
        binans.innerHTML = " "+binpot+" ";
        octpot = parseInt(cal,10).toString(8);
        octans.innerHTML = " "+octpot+" ";
        hexpot = parseInt(cal,10).toString(16);
        hexans.innerHTML = " "+hexpot+" ";
        decpot = cal;
    }else if(num == 8){
        let cal = document.getElementById("queMassegec").value;
        negCheck(cal);
        invisebalbin.style.display = "block";
        invisebaldec.style.display = "block";
        invisebaloct.style.display = "none";
        invisebalhex.style.display = "block";
        binpot = parseInt(cal,8).toString(2);
        binans.innerHTML = " "+binpot+" ";
        decpot = parseInt(cal,8).toString(10);
        decans.innerHTML = " "+decpot+" ";
        hexpot = parseInt(cal,8).toString(16);
        hexans.innerHTML = " "+hexpot+" ";
        octpot = cal;
    }else if(num == 16){
        let cal = document.getElementById("queMasseged").value;
        negCheck(cal);
        invisebalbin.style.display = "block";
        invisebaldec.style.display = "block";
        invisebaloct.style.display = "block";
        invisebalhex.style.display = "none";
        binpot = parseInt(cal,16).toString(2);
        binans.innerHTML = " "+binpot+" ";
        decpot = parseInt(cal,16).toString(10);
        decans.innerHTML = " "+decpot+" ";
        octpot = parseInt(cal,16).toString(8);
        octans.innerHTML = " "+octpot+" ";
        hexpot = cal;
    }else{
        alert("Syntex attact");
        window.location.reload();
    }
}
function copyTxt(){
    //ans copy
    var data = [binpot,decpot,octpot,hexpot];
    //console.log(data);
    //data.select();
    //data.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(data);
    alert("Copied the text: " + data);
}
function user(){
    const zone = new Date();
    let date = zone.toDateString();
    let time = zone.toLocaleTimeString();
    console.log('Hi user! '+'Date: '+date+', Time: '+time);
}