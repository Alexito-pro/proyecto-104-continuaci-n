// valor aleatorio generado
 var y = Math.floor(Math.random() * 10 + 1); 
player_name = localStorage.getItem("player_name");
 var guess = 1; 
function submit(){
       var x = document.getElementById("guessField").value;

       if(x == y)
       {
         alert("¡¡¡FELICIDADES!!!"+ playername+" LO ADIVINASTE BIEN :)"
         +guess + "INTENTO");
         guess= 1;                
       }
       else if(x>y)
       {     
         guess++;
         alert("¡¡¡ESPERA INTENTA UN NUMERO MAS PEQUEÑO!!!")
       }
       else
       {
        guess++;
        alert("¡¡¡ESPERA INTENTA UN NUMERO MASE PEQUEÑO!!!")
       }
 }

 function playAgain(){
    y  = Math.floor(Math.random() * 10 + 1);
 }
