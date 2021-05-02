'use strict';
window.onload = () => {
    h = 0; m = 0; s = 0; mls = 0; cuenta= 0;
    time = document.getElementById("time");
    b.Iniciar = document.getElementById("btn-Iniciar");
    b.Parar = document.getElementById("btn-Parar");
    b.Reiniciar = document.getElementById("btn-Reiniciar");
    event();
 };
function event(){
    b.Iniciar.addEventListener("click", Iniciar); 
    b.Parar.addEventListener("click", Parar);
    b.Reiniciar.addEventListener("click", Reiniciar);   
 }
function write(){
    let ht, mt, st, mlst;
    mls++;
    
    if (mls > 99){ s++ ; mls= 0; }
    if (s > 59){ m++; s= 0;}
    if (m > 59){ h++; m= 0;}
    if (h > 24) h= 0;
    
    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);
 
    time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
 }
function Iniciar(){
    write();
    cuenta = setInterval(write, 10);
    b.Iniciar.removeEventListener("click", Iniciar);
 }
function Parar(){
       clearInterval(cuenta);
       b.Iniciar.addEventListener("click", Iniciar);
 }
function Reiniciar(){   
       clearInterval(cuenta);
       time.innerHTML = "00:00:00.00"
       h= 0; m= 0 ; s= 0; mls= 0;
       b.Iniciar.addEventListener("click", Iniciar);      
 }
 