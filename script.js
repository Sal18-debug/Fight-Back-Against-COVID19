window.onload=function(){
  var table=document.getElementById("tablebody");
  for (var i=0; i<100; i++ ){
    var row = document.createElement("tr");
   for (var j=0; j<100; j++ ){
    var cell = document.createElement("td"); 
    row.appendChild(cell);
   }

   table.appendChild (row);
  }
  document.getElementById("canvas").addEventListener("mousemove", processMove);

}

function processMove (e){
  if(e.target.tagName.toLowerCase()=="td"){
    if(e.ctrlKey){
      e.target.setAttribute("class", "blue" );
    }
 if(e.shiftKey){
      e.target.setAttribute("class", "red" );
    }
     if(e.altKey){
      e.target.setAttribute("class", "green" );
    }
  }
}
function showstudent() {
  var x = document.getElementById("studentform");
	var y = document.getElementById("teacherform");
	  if (x.style.display === "none") {
    x.style.display = "block";
		y.style.display = "none";
	
  } else {
   // x.style.display = "none";
  }
}
function showteacher() {
  var x = document.getElementById("teacherform");
	var y = document.getElementById("studentform");
	
  if (x.style.display === "none") {
    y.style.display = "none";
		
		x.style.display = "block";
  } else {
   // x.style.display = "none";
  }
}

function showinfo(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
  	x.style.display = "none";
  }
}

