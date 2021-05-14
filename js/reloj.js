 let hora = "0";
 let minutos = "0";
 let segundos = "0";
 let dn = "am";
 let numero;
 let txtPantalla;
 let pantalla_actual
 let num1 = 0;
 let num2 = 0;
 let result = 0;

 const horas = () => {


     hora = document.getElementById("hora").innerHTML = new Date().getHours();
     mintos = document.getElementById("minutos").innerHTML = new Date().getMinutes();
     segundos = document.getElementById("segundos").innerHTML = new Date().getSeconds();

     if (parseInt(hora) > 12) {
         hora = document.getElementById("hora").innerHTML = ((parseInt(hora)) - 12);
         dn = document.getElementById("dn").innerHTML = "PM";

     } else {
         dn = document.getElementById("dn").innerHTML = "AM";
     }
 }
 setInterval('horas()', 1000);
 /* 
  const op = (num) => {
      pantalla_actual = document.getElementById("lblPantalla").innerHTML;
      numero = num.id;

      txtPantalla = document.getElementById("lblPantalla").innerHTML = pantalla_actual + numero;
  }
  const ac = () => {
      numero = 0;
      num1 = 0;
      pantalla_actual = document.getElementById("lblPantalla").innerHTML = "";
  }
  const su = () => {
      console.log(num1, num2);
      pantalla_actual = document.getElementById("lblPantalla").innerHTML;
      num1 = parseInt(pantalla_actual) + num1;
      pantalla_actual = document.getElementById("lblPantalla").innerHTML = "";

      console.log(num1, num2);

  }
  const igual = () => {
      pantalla_actual = document.getElementById("lblPantalla").innerHTML;
      num1 = parseInt(pantalla_actual) + num1;

      pantalla_actual = document.getElementById("lblPantalla").innerHTML = num1;
      num1 = 0;
      num2 = 0;

  } */