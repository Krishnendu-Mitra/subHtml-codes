//attached with sqlfrom.html file

function send(){
	name = document.getElementById("name").value;
	gname = document.getElementById("Gname").value;
	rwg = document.getElementById("rwg").value;
	phone = document.getElementById("phone").value;
	email = document.getElementById("email").value;
	pin = document.getElementById("pin").value;
	country = document.getElementById("country").value;
	institute = document.getElementById("institute").value;
	course = document.getElementById("course").value;
	leqd = document.getElementById("Leqd").value;
	tom = document.getElementById("tom").value;
	oT = document.getElementById("oT").value;
	matrix = document.getElementById("matrix").value;
	cmb = document.getElementById("Cmb").value;
	ins = document.getElementById("ins").value;
	wDu = document.getElementById("wDu").value;
	agree = document.getElementById("agree").value;
	var arr = [name, gname, rwg, phone, email, pin, country];
    var list = [institute, course, leqd, tom, oT, matrix, cmb, ins, wDu, agree];
    var tuple = [arr,list];
	//console.log(arr);
	//console.log(list);
	//alert("Congratulations your data submitted successfully");
	
	prebtn = document.getElementById("preview");
    prebtn.style.display = "block";
    previewform(arr,list);

}
function previewform(arr,list){
	acc = document.getElementById("access");
	box = document.getElementById("box");
	pre = document.getElementById("previewbox");
	data = document.getElementById("datasave");
	acc.style.display = "none";
	box.style.display = "none";
	data.style.display = "none";
	pre.style.display = "block";
	pre.innerHTML = "<div id='newhead'><h2><k>Krish</k> Form Preview</h2></div><br><img src='#'class='dpimg'alt='dp not selected'><br><div class='line'>Personal Details</div>Name: "+arr[0]+"<br>Guardian Name: "+arr[1]+"<br>Relation with guardian: "+arr[2]+"<br><div class='line'>Contact Details</div> Phone number: "+arr[3]+"<br>Email id: "+arr[4]+"<br><div id='moredet'></div>";
	more = document.getElementById("moredet");
	more.innerHTML = "Pincode: "+arr[5]+"<br>State name: "+arr[6]+"<br><div class='line'>Qualification Details</div>Institute name: "+list[0]+"<br>Course name: "+list[1]+"<br>Last exam qualify date: "+list[2]+"<br>Total obtained marks: "+list[3]+"<br>Out of: "+list[4]+"<br>Total marks obtained in class 10: "+list[5]+"%<br><div id='moremoredet'></div>";
	det = document.getElementById("moremoredet");
    det.innerHTML = "Class 10 board: "+list[6]+"<br><div class='line'>Job Details</div>Internet speed: "+list[7]+"kb<br>Device use: "+list[8]+"<br>Terms agree mod: "+list[9]+"(default)<br><div id='morebtn'></div>";
    morebtn = document.getElementById("morebtn");
    morebtn.innerHTML = "<div class='btn-holder'><input type='reset' id='back' class='btn' value='Back & Edit'onclick='back();'/><input type='submit' id='next' class='btn' value='Save & Next' onclick='next();'/></div>";
}
function back(){
	acc = document.getElementById("access");
	box = document.getElementById("box");
	pre = document.getElementById("previewbox");
	data = document.getElementById("datasave");
	acc.style.display = "none";
	pre.style.display = "none";
	data.style.display = "none";
	box.style.display = "block";
}
function next(){
	acc = document.getElementById("access");
	box = document.getElementById("box");
	pre = document.getElementById("previewbox");
	data = document.getElementById("datasave");
	pre.style.display = "none";
	box.style.display = "none";
	acc.style.display = "none";
	data.style.display = "block";
	data.innerHTML = "<h2>Your Data save successfully in imagination</h2><br><p>Because I don't have any storage space to store your data and use in future :(</p>";
}
function user(){
	back();
	next();
}
function reload(){
	window.location.reload();
}