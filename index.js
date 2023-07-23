console.log("hola");
/*
let principal = document.getElementById("cont__principal");

const buttonEnviar = document.getElementById("buttonSongs");

taylor = new Array();

taylor[0] = ["image/taylorImage1.jpg", "Taylor"];
//
function enviarImagen(e) {
  e.preventDefault();

  const image = document.createElement("img");
  image.setAttribute("src", taylor[0]);
  console.log("enviado");

  principal.appendChild(image);
}

buttonEnviar.addEventListener("click", enviarImagen);
*/
//intento de enviar imagen nos genera no poder obtener el get

const buttonEnviar = document.getElementById("buttonSongs");

const inputEstado = document.getElementById("mySong");

//validación para obtener el input que incluya la palabra feliz. //Se le puede pedir al usuario que incluya la palabra feliz.

function enviarCancion(e) {
  const stateMySong = document.getElementById("mySong").value;

  const wordHappy = "feliz";
  const wordSad = "triste";
  const wordLove = "amor";

  const divResponse = document.getElementById("response__song");

  const arrayHappy = ["karma", "delicate", "Are you ready for it"];

  const arraySad = ["great war", "archer", "all to well"];

  const arrayLove = ["Dear Jhon", "You belong with me", "Enchanted"];

  /**Data Random**/
  const randomIndexOne = Math.floor(Math.random() * arrayHappy.length);

  const randomSongHappy = arrayHappy[randomIndexOne];

  const randomIndexTwo = Math.floor(Math.random() * arraySad.length);

  const randomSongSad = arraySad[randomIndexTwo];

  const randomIndexThree = Math.floor(Math.random() * arrayLove.length);

  const randomSongLove = arrayLove[randomIndexThree];
  /*****/

  const song = document.createElement("h3");

  if (stateMySong.includes(wordHappy)) {
    song.textContent = randomSongHappy;
  }
  if (stateMySong.includes(wordSad)) {
    song.textContent = randomSongSad;
  }
  if (stateMySong.includes(wordLove)) {
    song.textContent = randomSongLove;
  }

  divResponse.appendChild(song);

  console.log(stateMySong);
}

function inputEmpty() {
  const divResponse = document.getElementById("emptyMsg");

  const emptyMsg = document.createElement("p");
  emptyMsg.style.backgroundColor = "red";
  emptyMsg.style.color = "white";
  emptyMsg.style.margin = "1rem";
  emptyMsg.textContent = "El campo no puede estar vacío";

  divResponse.appendChild(emptyMsg);

  setTimeout(() => {
    divResponse.textContent = "";
  }, 2500);
}

//buttonEnviar
buttonEnviar.addEventListener("click", () => {
  if (inputEstado.value.length == 0) {
    //alert("El campo no puede estar vacío");
    inputEmpty();
  } else {
    //enviarCancion();
    enviarCancion;
    //tendría que funcionar con esta opción de arriba. Funciona
  }
});

inputEstado.addEventListener("change", enviarCancion);
//queda arreglar problema de que si agrego con enter solo me da una respuesta de una canción, que quizás es lo ideal. Habría que arreglarlo con el otro evento.

//como lograr que se pueda enviar una canción en base a la información que pone en el input
//como generar que solo se pueda enviar una vez la información
