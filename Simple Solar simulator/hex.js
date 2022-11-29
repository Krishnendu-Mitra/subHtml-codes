//attached with SolarSimulator.html file

var bac = document.getElementById("creatbox");
var str = document.getElementById("star");
var core = document.getElementById("core");
var logo = document.getElementById("startbox");
var ans = document.getElementById("alertbox");
var pln = document.getElementById("planet");
var timeout=0;
let defult = 0,clsok=0;
let MAXSIZE = 5000000;
let LOWSIZE = 5000;
let MAXMASS = 1000000;
let LOWMASS = 1000;

function playgame(){
    document.getElementById("mymusic").play();
    logo.style.display = "none";

    var name = document.getElementById("name").value;
    var smass = document.getElementById("strmass").value;
    var scolor = document.getElementById("strcolor").value;
    var satmo = document.getElementById("stratmo").value;
    var ssize = document.getElementById("strsize").value;

    bac.style.background = "url('./fav-icon/Space.jpg')";
    var k = (ssize/100000)+200;
    str.style.width = k+"px";
    str.style.height = k+"px";
    str.style.display = "block";
    core.innerHTML = name;
    pln.style.animation = "orbit 10s linear infinite";
    clcheck(scolor,satmo,name);
    if(clsok == 1){
        masscheck(smass,ssize,defult);
    }else{
        masscheck(MAXMASS+1,MAXSIZE+1,defult);
    }
}
function clcheck(scolor,satmo,name){
    defult = 0;
    clsok = 1;
    if(scolor == 'Yellow' && satmo == 'Middium'){
        str.style.background = "#ffcf00";
        str.style.boxShadow = "0 0 5px 7px #ecff00";
    }else if(scolor == 'Yellow' && satmo == 'Huge'){
        str.style.background = "#ffcf00";
        str.style.boxShadow = "0 0 8px 12px #ecff00";
    }else if(scolor == 'Yellow' && satmo == 'Low'){
        str.style.background = "#ffcf00";
        str.style.boxShadow = "0 0 2px 5px #ecff00";
    }else if(scolor == 'Orange' && satmo == 'Middium'){
        str.style.background = "#ed7c00";
        str.style.boxShadow = "0 0 5px 7px #ffad4e";
    }else if(scolor == 'Orange' && satmo == 'Huge'){
        str.style.background = "#ed7c00";
        str.style.boxShadow = "0 0 8px 12px #ffad4e";
    }else if(scolor == 'Orange' && satmo == 'Low'){
        str.style.background = "#ed7c00";
        str.style.boxShadow = "0 0 2px 5px #ffad4e";
    }else if(scolor == 'Red' && satmo == 'Middium'){
        str.style.background = "#dd0018";
        str.style.boxShadow = "0 0 5px 7px #ff503a";
    }else if(scolor == 'Red' && satmo == 'Huge'){
        str.style.background = "#dd0018";
        str.style.boxShadow = "0 0 8px 12px #ff503a";
    }else if(scolor == 'Red' && satmo == 'Low'){
        str.style.background = "#dd0018";
        str.style.boxShadow = "0 0 2px 5px #ff503a";
    }else if(scolor == 'Green' && satmo == 'Middium'){
        str.style.background = "#00ff36";
        str.style.boxShadow = "0 0 5px 7px #96ffac";
    }else if(scolor == 'Green' && satmo == 'Huge'){
        str.style.background = "#00ff36";
        str.style.boxShadow = "0 0 8px 12px #96ffac";
    }else if(scolor == 'Green' && satmo == 'Low'){
        str.style.background = "#00ff36";
        str.style.boxShadow = "0 0 2px 5px #96ffac";
    }else if(scolor == 'Blue' && satmo == 'Middium'){
        str.style.background = "#009eff";
        str.style.boxShadow = "0 0 5px 7px #54d2ff";
    }else if(scolor == 'Blue' && satmo == 'Huge'){
        str.style.background = "#009eff";
        str.style.boxShadow = "0 0 8px 12px #54d2ff";
    }else if(scolor == 'Blue' && satmo == 'Low'){
        str.style.background = "#009eff";
        str.style.boxShadow = "0 0 2px 5px #54d2ff";
    }else if(scolor == 'White' && satmo == 'Middium'){
        str.style.background = "#d7d7d7";
        str.style.boxShadow = "0 0 5px 7px #fff";
    }else if(scolor == 'White' && satmo == 'Huge'){
        str.style.background = "#d7d7d7";
        str.style.boxShadow = "0 0 8px 12px #fff";
    }else if(scolor == 'White' && satmo == 'Low'){
        str.style.background = "#d7d7d7";
        str.style.boxShadow = "0 0 2px 5px #fff";
    }else if(scolor == 'Color of your star' && satmo == 'Type of atmosphere' && name == 'algo'){
        str.style.background = "#ffcf00";
        str.style.boxShadow = "0 0 5px 7px #ecff00";
        defult = 1;
        ans.innerHTML = "Defult star request approch";
    }else{
        str.style.background = "transparent";
        str.style.boxShadow = "0 0 0px 0px transparent";
        str.style.display = "none";
        ans.innerHTML = "Please check the quary data";
        clsok = 0;
    }
}
function copyTxt(){
    //ans copy
    var data = document.getElementById("resdiv").innerHTML;
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
function reset(){
    ans.innerHTML = "Reset the data..";
}
function reloadgame(){
    //window.location.reload();
}