function comenzar() {
    // Reproduce la música
    const musica = document.getElementById('musica');
    musica.play();

    // Desvanece la pantalla de inicio
    document.getElementById('overlay').style.display = 'none';
}

// Aquí podrías programar el contador después...
// Configura la fecha aquí: Año, Mes (0-11), Día, Hora, Minuto
const fechaBoda = new Date(2026, 11, 20, 18, 0, 0).getTime(); 

const x = setInterval(function() {
  const ahora = new Date().getTime();
  const distancia = fechaBoda - ahora;
  
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  
  document.getElementById("reloj").innerHTML = dias + "d " + horas + "h " + minutos + "m ";
}, 1000);