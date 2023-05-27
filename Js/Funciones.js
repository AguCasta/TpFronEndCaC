
function comprar() {
    var B = document.getElementById("buy");
     window.location.href="tickets.html";
}
function calcular()
{
var cant= document.getElementById("cantidad").value;


var select=document.getElementById("categoria");
var select_activo=select.options[select.selectedIndex].value;

var result=0;
var Dto =0;
switch(select_activo=parseInt(select_activo))
{
    case 1:
            Dto= parseInt(cant)*200*80/100;
            result=(parseInt(cant)*200)-Dto; 
            break;
    case 2:
            Dto= parseInt(cant)*200*50/100;
            result=(parseInt(cant)*200)-Dto;
            break;
    case 3:
           Dto= parseInt(cant)*200*15/100;
           result=(parseInt(cant)*200)-Dto;
           break;
     

}

document.getElementById("Total").value="Total a pagar $ "+result;

}
function Borrar() {
  document.getElementById("cantidad").value=""
  document.getElementById("correo").value=""
  document.getElementById("Nombre").value=""
  document.getElementById("Apellido").value=""
  document.getElementById("Total").value=""
}
