var c=0 ;
function contar(){
  var n1 = document.getElementById('n1').value;
  var n2 = document.getElementById('tContador').value;
  c=parseInt(n1)+parseInt(n2);
  document.getElementById('tContador').value = c;

}
