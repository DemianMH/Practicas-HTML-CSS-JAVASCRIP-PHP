var tiempo;
var puntos=0;
var hongo1;
var salida;
var imagenes;
var time = 500;
var cont;


function iniciar(){
  if(!tiempo) tiempo = setInterval(moverImg, time);
  imagenes = document.getElementsByClassName("imagen");
  imagenes[0].src="champi.gif";
  hongo1 = imagenes[0];
  salida = document.getElementById("pts");
}


function leerClic(i){
  if(i==hongo1){
    if(cont===0){
      puntos++;
    }
    if(cont == 1){
      time-=60;
      tiempo = setInterval(moverImg, time);
    }
    if(cont === 2){
      puntos--;
    }
    salida.value=puntos;
  }
}

function moverImg(e){
  hongo1.src="vacio.png";
  var sig = Math.floor(Math.random() * 6);
  hongo1 = imagenes[sig];
  var sig2 = Math.floor(Math.random() * 3);
  cont = 0;
  if(sig2 === 0){
    hongo1.src="champi.gif";
    cont=0;
  }
  if(sig2 === 1){
    hongo1.src="alucin.gif";
    cont=1;
  }
  if(sig2 === 2){
    hongo1.src="venenoso.gif";
    cont=2;
  }

}



function detener(){
  clearInterval(tiempo);
}
