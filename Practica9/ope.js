var numeros = new Array();

function comparar(a, b) {
  return a - b;
}
  /*----------------------------------------------------------------*/                    
function obtMediana(){
  numeros.sort(comparar);

  document.getElementById("nums").value = "";
  for(var i=0; i<numeros.length; i++)
    document.getElementById("nums").value += " " + numeros[i];

  var mediana = numeros[Math.floor(numeros.length / 2)];
  document.getElementById("mediana").value = mediana;
}
/*----------------------------------------------------------------*/
function agregar(){
  numeros.push( parseInt(document.getElementById("num").value) )
  document.getElementById("nums").value += " "+document.getElementById("num").value;
}
/*----------------------------------------------------------------*/
function obtSuma(){
  var suma=0;
  for(var i=0; i < numeros.length; i++)
    suma += numeros[i];

  document.getElementById("suma").value = suma;
}
/*----------------------------------------------------------------*/
function obtPromedio(){
  var suma=0;
  for(var i=0; i < numeros.length; i++)
    suma += numeros[i];
  var prom = suma / numeros.length;
  document.getElementById("prom").value = prom;
}
/*----------------------------------------------------------------*/
function obtMax(){
  document.getElementById("max").value = Math.max(...numeros);
}
/*----------------------------------------------------------------*/
function obtMin(){
  document.getElementById("min").value = Math.min(...numeros);
}
/*----------------------------------------------------------------*/
function obtModa(){
  var rs = {};

  numeros.forEach(  function(n){
    if (rs[n]===undefined) rs[n]=0;
    rs[n]++;
  });

  var max, moda;
  for(var num in rs){
    if(max){
       if(max < rs[num]) {max = rs[num]; moda = num;}
    }else{max = rs[num]; moda=num;}
  }
  document.getElementById("moda").value = "La moda es "+ moda +" porque se repite "+max+" veces";
}
