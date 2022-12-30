//atteched with index.html file
var ans = document.getElementById("ans");
var ansbin = document.getElementById("ansbin");
var ansdec = document.getElementById("ansdec");
var acbox = document.getElementById("acbox");
var qbox = document.getElementById("qbox");

let Q1 = 0;
let Ac = [0,0,0,0];
let count = 0;
let n = 4;
let k = 1;
let temp = 0;

function calculation(){
    multi = document.getElementById("multi").value;
    Qa = document.getElementById("qa").value;
    reg = document.getElementById("reg").value;
    if(multi >= 1 && multi <= (n*4)-1 && Qa >= 1 && Qa <= (n*4)-1 && reg >= 1 && reg <= 4){
        count = reg * 1;
        for(let i=0; i<n; i++){
            Ac[i] = 0;
        }
        binconvert(multi,Qa,reg);
    }else{
        alert("Error value undefind!");
    }
    console.log("check: ",multi,Qa,reg);
}
function binconvert(multi, Qa, reg){
    multi = parseInt(multi,10).toString(2);
    Qa = parseInt(Qa,10).toString(2);
    console.log("check: ",multi,Qa,reg);
    binlist(multi,Qa,reg);
}
function binlist(multi, Qa, reg){//"./nbit to 4bit.png"
    let multiList = [0,0,0,0];
    let QaList = [0,0,0,0];
    let c1 = n - multi.length;
    let c2 = n - Qa.length;
    let j = 0;
    for(let i=c1; i<n; i++){
        multiList[i] = multi[j]*1;
        j++;
    }
    j = 0;
    for(let i=c2; i<n; i++){
        QaList[i] = Qa[j]*1;
        j++;
    }
    console.log("check: ",multiList,QaList,reg);
    qcheck(multiList,QaList,reg);
}
function qcheck(multiList, QaList, reg){
    let c = QaList.length-1;
    if((QaList[c] == 0 && Q1 == 0) || (QaList[c] == 1 && Q1 == 1)){
        asr(multiList,QaList,reg);
    }else if(QaList[c] == 1 && Q1 == 0){
        left(multiList,QaList,reg);
    }else if(QaList[c] == 0 && Q1 == 1){
        right(multiList,QaList,reg);
    }else{
        alert("Error! ");
    }
}
function grey(m){
    let c = m.length-1;
    for(let i=0; i<c; i++){
        if(m[i] == 0){
            m[i] = 1;
        }else{
            m[i] = 0;
        }
    }
    return m;
}
function left(multiList,QaList,reg){
    if(k == 1){
        m = multiList;
        m = grey(m);
        for(let i=0; i<Ac.length; i++){//Ac[i] = Ac[i] + m[i]
            if(Ac[i] == 1 && m[i] == 1 && temp == 0){
                Ac[i] = 0;
                temp = 1;
            }else if(((Ac[i] == 0 && m[i] == 1) || (Ac[i] == 1 && m[i] == 0)) && temp == 0){
                Ac[i] = 1;
                temp = 0;
            }else if(Ac[i] == 1 && m[i] == 1 && temp == 1){
                Ac[i] = 1;
                temp = 1;
            }else if(((Ac[i] == 0 && m[i] == 1) || (Ac[i] == 1 && m[i] == 0)) && temp == 1){
                Ac[i] = 0;
                temp = 1;
            }else{
                temp = 0;
            }
        }
        k--;
        console.log(Ac);
    }else{
        for(let i=0; i<Ac.length; i++){//Ac[i] = Ac[i] - m[i];
            if(Ac[i] == 1 && multiList[i] == 1 && temp == 0){
                Ac[i] = 0;
                temp = 0;
            }else if(((Ac[i] == 0 && multiList[i] == 1) || (Ac[i] == 1 && multiList[i] == 0)) && temp == 0){
                Ac[i] = 1;
                temp = 0;
            }else if(Ac[i] == 1 && multiList[i] == 1 && temp == 1){
                Ac[i] = 1;
                temp = 0;
            }else if(((Ac[i] == 0 && multiList[i] == 1) || (Ac[i] == 1 && multiList[i] == 0)) && temp == 1){
                Ac[i] = 0;
                temp = 1;
            }else{
                temp = 0;
            }
        }
    }
    asr(multiList,QaList,reg);
}
function right(multiList,QaList,reg){
    for(let i=0; i<Ac.length; i++){//Ac[i] = Ac[i] + multiList[i]
        if(Ac[i] == 1 && multiList[i] == 1 && temp == 0){
            Ac[i] = 0;
            temp = 1;
        }else if(((Ac[i] == 0 && multiList[i] == 1) || (Ac[i] == 1 && multiList[i] == 0)) && temp == 0){
            Ac[i] = 1;
            temp = 0;
        }else if(Ac[i] == 1 && multiList[i] == 1 && temp == 1){
            Ac[i] = 1;
            temp = 1;
        }else if(((Ac[i] == 0 && multiList[i] == 1) || (Ac[i] == 1 && multiList[i] == 0)) && temp == 1){
            Ac[i] = 0;
            temp = 1;
        }else{
            temp = 0;
        }
    }
    asr(multiList,QaList,reg);
}
function asr(multiList,QaList,reg){
    let c1 = Ac.length-1;
    let c2 = QaList.length-1;
    Q1 = QaList[c2];
    for(let i=c2; i>=1; i--){
        QaList[i] = QaList[i-1];
    }
    QaList[0] = Ac[c1] * 1;
    for(let i=c1; i>=1; i--){
        Ac[i] = Ac[i-1];
    }
    Ac[0] = Ac[1];
    count = count-1;
    console.log("check: ",multiList,Ac,QaList,reg,Q1,count);
    countcheck(multiList,QaList,reg,count);
}
function countcheck(multiList,QaList,reg,count){
    if(count == 0){
        console.log("final",multiList,Ac,QaList,Q1,count);
        answer(Ac,QaList,Q1);
    }else{
        qcheck(multiList, QaList, reg);
    }
}
function answer(Ac,QaList,Q1){
    acbox.innerHTML = "["+Ac+"]";
    qbox.innerHTML = "["+QaList+"]";
    ansbin.innerHTML = "["+Ac+","+QaList+"]";
    ansdec.innerHTML = multi*Qa;
    ans.style.display = "block";
}