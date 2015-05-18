function setSquare (x, y, char) { 
  var tr = $("#gameBoard").find("tr").eq(y);    //eq represents a new element within Jquery object
  var td = tr.find("td").eq(x);                 //here we are finding positions of rows 
  td.html(char);                                //.html sets content within jquery i.e. char
  console.log($("#gameBoard")); 
}

