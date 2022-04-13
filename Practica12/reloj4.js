class Reloj{
constructor(h, m, s, n, c){
this.hora=h;
this.min=m;
this.seg=s;
this.nombre = n;
this.caja=c;
}

avanzar1Seg(){
  this.nombre=document.getElementById("nom").value;
  this.hora=document.getElementById("h").value;
  this.min=document.getElementById("m").value;
  this.seg=document.getElementById("s").value;
if(this.seg>0) this.seg--;
else{
this.seg=59;
if(this.min>0) this.min--;
else{
this.min=59;
if(this.hora>0) this.hora--; else this.hora=23;
}
}
document.getElementById("nom").value= this.nombre;
document.getElementById("h").value=this.hora;
document.getElementById("m").value=this.min;
document.getElementById("s").value=this.seg;
this.caja.value= this.nombre+": "+this.hora+":"+this.min+":"+this.seg;
return((this.hora==0)&&(this.min==0)&&(this.seg==0));

}
}
document.onkeydown=mover;
var tiempo;
var r1 = new Reloj(this.hora,this.min,this.seg,"Demian", document.getElementById("t1"));
var r2 = new Reloj(this.hora,this.min,this.seg,"Alejandro", document.getElementById("t2"));
var actual=r1;

function avanzar(){
if(actual.avanzar1Seg()){
alert("Pierde: "+actual.nombre);
clearTimeout(tiempo);
}
}
function mover(e){
  if (e.keyCode ==32){
if(!tiempo) tiempo = setInterval(avanzar, 1000);
else if (actual==r1) actual=r2; else actual=r1;
}
}
