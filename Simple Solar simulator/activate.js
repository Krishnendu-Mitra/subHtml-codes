//attached with SolarSimulator.html file

user();
function masscheck(smass,ssize,defult){
    if(defult == 1){
        console.log("defult star request approch");
    }else{
        if(ssize == MAXSIZE && smass == LOWMASS){
            ans.innerHTML = "Srink and white dwarf";
            setTimeout(function wd(){
                whitedw();
            },5000);
        }else if(ssize == MAXSIZE && smass == MAXMASS){
            ans.innerHTML = "nO CHANGE";
        }else if(ssize == MAXSIZE && (smass > LOWMASS && smass < MAXMASS)){
            ans.innerHTML = "Srink with multi color change and black dwarf pln";
            setTimeout(function md(){
                multidw();
            },5000);
        }else if(smass == MAXMASS && ssize == LOWSIZE){
            ans.innerHTML = "ERROR blackhole";
            setTimeout(function off(){
                Supercollapse(ssize);
            },20000);
        }else if(smass == MAXMASS && (ssize > LOWSIZE && ssize < MAXSIZE)){
            ans.innerHTML = "Slow blackhole & superNova";
            setTimeout(function offf(){
                collapse();
            },5000);
        }else if((smass > LOWMASS && smass < MAXMASS) && (ssize > LOWSIZE && ssize < MAXSIZE)){
            ans.innerHTML = "Supernova and Stable";
            setTimeout(function on(){
                superNova();
            },20000);
        }else if(ssize == LOWSIZE && smass == LOWMASS){
            ans.innerHTML = "Srink and and black dwarf";
            setTimeout(function bd(){
                blackdw();
            },5000);
        }else if((ssize > MAXSIZE) || (smass > MAXMASS*1000) || (ssize < LOWSIZE) || (smass < LOWMASS)){
            str.style.background = "transparent";
            str.style.boxShadow = "0 0 0px 0px transparent";
            str.style.display = "none";
            ans.innerHTML = "Please check the quary data!";
        }else{
            str.style.display = "none";
            ans.innerHTML = "Please check the quary data!";
        }
    }
}

function Anticollapse(ssize){
    var j = 0;
    var k = (ssize/100000)+200;
    str.style.display = "block";
    var func = function(){
        timeout = setTimeout(func,0);
        str.style.width = j+"px";
        str.style.height = j+"px";
        if(j++ == k)stop();
    }
    func();
}
function stop(){
    /*clearInterval(timeout);*/
    logo = document.getElementById("startlogo");
    logo.style.height = "20px";
    logo.style.width = "20px";
    logo.style.transitionDelay = "4s";
}
function cleanUp(ssize){
    str.style.width = ssize+"px";
    str.style.height = ssize+"px";
}
function Supercollapse(ssize){
    var core = document.getElementById("core");
    var playbtn = document.getElementById("play");
    var name = document.getElementById("name").value;
    var pln = document.getElementById("planet");
    pln.style.animation = "orbit 0.5s linear infinite";
    str.style.visibility = "visible";
    str.style.background = "#000";
    for(var j=ssize; j>30; j--){
        str.style.width = j+"px";
        str.style.height = j+"px";
    }
    str.style.boxShadow = "0px 0px 40px 15px #ffcf00";
    str.style.margin = "220px 45%";
    core.innerHTML = name+"*";
    ans.innerHTML = "This is a stable blackhole";
    playbtn.style.display = "none";
    document.getElementById("reload").style.display = "block";
}
function collapse(){
    str.style.animation = "coll 5s linear 1";
    str.style.width = "50px";
    str.style.height = "50px";
    str.style.boxShadow = "0px 0px 40px 15px #0c8ff0";
    document.getElementById("play").style.display = "none";
    document.getElementById("reload").style.display = "block";
    collEffect();
}
function collEffect(){
    var name = document.getElementById("name").value;
    core.innerHTML = name+"*";
    ans.innerHTML = "This is a unstable blackhole";
    sll = str.style.width;
    str.style.background = "#000";
    str.style.margin = "220px 45%";
    str.style.animation = "colleff 5s linear infinite";
    var j = str;
    j.style.transitionDuration = "7s";
    var pln = document.getElementById("planet");
    pln.style.display = "none";
}
function superNova(){
    str.style.animation = "suNo 5s linear 1";
    str.style.width = "0px";
    str.style.height = "0px";
    ans.innerHTML = "Super Nova Explosion!";
    core.innerHTML = " ";
    supNoEff();
}
function supNoEff(){
    var pln = document.getElementById("planet");
    pln.style.display = "none";
    str.style.margin = "220px 45%";
    var j = str;
    j.style.transitionDuration = "6s";
    setTimeout(function boom(){
        document.getElementById("creatbox").innerHTML = "none";
    },5000);
}
function whitedw(){
    str.style.animation = "white 5s linear 1";
    str.style.width = "100px";
    str.style.height = "100px";
    str.style.boxShadow = "0px 0px 40px 25px #fff";
    document.getElementById("play").style.display = "none";
    document.getElementById("reload").style.display = "block";
    whiteEff();
}
function whiteEff(){
    ans.innerHTML = "This is a white dwarf";
    str.style.background = "#d7d7d7";
    str.style.margin = "220px 45%";
    var j = str;
    j.style.transitionDuration = "6s";
    var pln = document.getElementById("planet");
    pln.style.width = "250px";
    pln.style.height = "250px";
    pln.style.left = "-5px";
    pln.style.top = "-45px";
    pln.style.animation = "orbit 3s linear infinite";
}
function blackdw(){
    str.style.animation = "black 30s linear 1";
    str.style.width = "50px";
    str.style.height = "50px";
    document.getElementById("play").style.display = "none";
    document.getElementById("reload").style.display = "block";
    blackEff();
}
function blackEff(){
    ans.innerHTML = "This is a black dwarf";
    str.style.margin = "220px 45%";
    var j = str;
    j.style.transitionDuration = "6s";
    pln.style.animation = "orbit 18s linear infinite";
    setTimeout(function band(){
        pln.style.display = "none";
        str.style.background = "#000";//1b0e19
        str.style.boxShadow = "0px 0px 5px 5px #4d4d4d";
        core.innerHTML = "planet "+document.getElementById("name").value;
    },25000);
}
function multidw(){
    str.style.animation = "multi 20s linear 1";
    str.style.width = "50px";
    str.style.height = "50px";
    pln.style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("reload").style.display = "block";
    multiEff();
}
function multiEff(){
    ans.innerHTML = "This is a stable black dwarf";
    str.style.margin = "220px 45%";
    var j = str;
    j.style.transitionDuration = "6s";
    pln.style.animation = "orbit 18s linear infinite";
    setTimeout(function cand(){
        str.style.background = "#000";
        str.style.boxShadow = "0px 0px 5px 5px #4d4d4d";
        core.innerHTML = "planet "+document.getElementById("name").value;
    },18000);
}