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

/**************************************************/

//agarramos el id del botón enviar
const buttonEnviar = document.getElementById("buttonSongs");

//agarramos el id del textarea
const textareaEstado = document.getElementById("mySong");

//validación para obtener el input que incluya la palabra feliz. //Se le puede pedir al usuario que incluya la palabra feliz.

function enviarCancion(e) {
  // agarramos el valor del input
  const stateMySong = document.getElementById("mySong").value;

  const wordHappy = "feliz";
  const wordSad = "triste";
  const wordLove = "amor";

  // agarramos el id del div de respuesta
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

  // creo etiqueta con canción de respuesta
  const song = document.createElement("h3");
  song.style.color = "#000";

  //si el valor del input incluye determinada palabra ...
  // se trae un texto de una canción que este entre los valores random de un estado específico.
  if (stateMySong.includes(wordHappy)) {
    song.textContent = randomSongHappy;
  }
  if (stateMySong.includes(wordSad)) {
    song.textContent = randomSongSad;
  }
  if (stateMySong.includes(wordLove)) {
    song.textContent = randomSongLove;
  }

  // al div de respuesta le agregamos la canción
  divResponse.appendChild(song);

  console.log(stateMySong);
}

function inputEmpty() {
  //agarramos el id del div de respuesta contenedor  del mensaje de alerta
  const divResponse = document.getElementById("emptyMsg");

  //creamos parrafo con contenido de mensaje de alerta y le agregamos estilos
  const emptyMsg = document.createElement("p");
  emptyMsg.style.backgroundColor = "red";
  emptyMsg.style.color = "white";
  emptyMsg.style.margin = "1rem";
  emptyMsg.textContent = "El campo no puede estar vacío";

  //al div de respuesta le agregamos el mensaje alerta
  divResponse.appendChild(emptyMsg);

  //luego de unos 2,5 segundos le quitamos el texto al div de respuesta, dejandolo vacío
  setTimeout(() => {
    divResponse.textContent = "";
  }, 2500);
}

//evento de botón, al hacer click, si la cantidad de caracteres en el input es igual a 0, se envía mensaje de alerta, sino se envía la canción
buttonEnviar.addEventListener("click", () => {
  if (textareaEstado.value.length == 0) {
    //alert("El campo no puede estar vacío");
    inputEmpty();
  } else {
    enviarCancion();
    //enviarCancion;
    //console.log("algo esta pasando en el else");
  }
});

//evento consiste en que al cambiar el textarea, con una tecla, se envía la canción
//inputEstado.addEventListener("change", enviarCancion); habría que buscar evt mouseenter.

//queda arreglar problema de que si agrego con enter solo me da una respuesta de una canción, que quizás es lo ideal. Habría que arreglarlo con el otro evento.

//como lograr que se pueda enviar una canción en base a la información que pone en el input
//como generar que solo se pueda enviar una vez la información
