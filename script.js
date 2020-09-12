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

