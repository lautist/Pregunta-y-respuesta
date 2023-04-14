let preguntaH1 = document.querySelector(".pregunta");
let btnStart = document.querySelector(".btn-start");
let btnSiguiente = document.querySelector(".btn-sg");
document.querySelector(".envR").style.display = "none";

const preguntas = [
        {
          pregunta: "¿En qué continente se encuentra la selva amazónica?",
          opciones: ["Asia", "América", "África", "Europa"],
          respuesta: "América",
        },
        {
          pregunta: '¿Qué país es conocido por la celebración del "Carnaval"? ',
          opciones: ["Brasil", "México", "Colombia", "Argentina"],
          respuesta: "Brasil",
        },
        {
          pregunta: "¿En qué país se encuentra la Torre Eiffel?",
          opciones: ["Italia", "Francia", "España", "Reino Unido"],
           respuesta: "Francia",
        },
        {
          pregunta: "¿Qué país es conocido por el Taj Mahal?",
          opciones: ["India", "China", "Japón", "Corea del Sur"],
          respuesta: "India",
        },
        {
          pregunta: "¿Cuál es el río más largo del mundo?",
          opciones: ["Nilo", "Amazonas", "Misisipi", "Yangtze"],
          respuesta: "Amanzonas",
        },
        {
          pregunta: "¿En qué continente se encuentra el Monte Kilimanjaro?",
          opciones: ["Asia", "América", "África", "Europa"],
          respuesta: "África",
        },
        {
          pregunta: `¿Quién pintó la famosa obra "La noche estrellada"?`,
          opciones: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
          respuesta: "Vincent van Gogh",
        },
        {
          pregunta: "¿En qué año se llevó a cabo la Revolución Francesa?",
          opciones: ["1789", "1799", "1809", "1819"],
          respuesta: "1789",
        },
        {
          pregunta:`¿Quién escribió la obra "El principito"?`,
          opciones: ["Friedrich Nietzsche", "Jules Verne", "Antoine de Saint-Exupéry", "Gabriel García Márquez"],
          respuesta: "Antoine de Saint-Exupéry",
        },
        {
          pregunta: `¿Quién fue el primer ser humano en llegar al espacio exterior?`,
          opciones: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
          respuesta: "Yuri Gagarin",
        },
]

let preguntasUtilizadas = [];

let puntaje = 0;
let contador = 0;

function empezar() {
    let opciones = document.querySelector(".opci");

    // GENERAMOS LA PREGUNTA RANDOM Y COMPROBAMOS SI YA LE HEMOS ECHO EN CASO DE HACERLA SE BORRA SI NO SE MUESTRA
    let randomPregunta;
    do {
        randomPregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
    } while (preguntasUtilizadas.includes(randomPregunta.pregunta));

    preguntasUtilizadas.push(randomPregunta.pregunta);

    // Borra las opciones anteriores
    while (opciones.firstChild) {
        opciones.removeChild(opciones.firstChild);
    }


    //HACEMO QUE CUANDO COMIENZE DE NUEVO EL CODIGO SE REMUEVAN LAS OPCIONES ANTERIORES
    const opcionesAnteriores = document.querySelectorAll(".opci button");
    opcionesAnteriores.forEach(opcion => {
    opcion.parentNode.removeChild(opcion);
    });

    //AGREGAMOS LOS BOTONES LUEGO DE DAR AL BOTON STAR(QUE DESAPARECE)
    //LOS BOTONES TIENEN LA RESPUESTAS
    //LE AGREGAMOS LAS CLASES
    const opcion0 = document.createElement("button");
    opcion0.textContent = randomPregunta.opciones[0];
    opcion0.classList.add("opcion0");
    opciones.appendChild(opcion0);

    const opcion1 = document.createElement("button");
    opcion1.textContent = randomPregunta.opciones[1];
    opcion1.classList.add("opcion1");
    opciones.appendChild(opcion1);

    const opcion2 = document.createElement("button");
    opcion2.textContent = randomPregunta.opciones[2];
    opcion2.classList.add("opcion2");
    opciones.appendChild(opcion2);

    const opcion3 = document.createElement("button");
    opcion3.textContent = randomPregunta.opciones[3];
    opcion3.classList.add("opcion3");
    opciones.appendChild(opcion3);
   
    preguntaH1.textContent = randomPregunta.pregunta;
    btnStart.style.display = "none";
    console.log(randomPregunta);
    //SE COMPRUEBA LA LA REPUESTA QUE APRETO EL USUARIO, Y SE AGREGA COLOR A LA REPUESTA QUE SELECCIONO
    opcion0.addEventListener("click", function() { 
      comprobarRespuesta(opcion0); 
      opcion0.style.background = "#62568f";
    });
    opcion1.addEventListener("click", function() { 
      comprobarRespuesta(opcion1); 
      opcion1.style.background = "#62568f";
    });
    opcion2.addEventListener("click", function() { 
      comprobarRespuesta(opcion2);
      opcion2.style.background = "#62568f";
    });
    opcion3.addEventListener("click", function() {
       comprobarRespuesta(opcion3); 
       opcion3.style.background = "#62568f";
      });

    function comprobarRespuesta(opcionSeleccionada) {
      let btnRpt = document.querySelector(".rpt-mostrar")
      opcion0.disabled = true;
      opcion1.disabled = true;
      opcion2.disabled = true;
      opcion3.disabled = true; 
      
      
      //SE COMPRUEBA Y SE PONE EL PUNTAJE DESPENDIENDO QUE PASO
      if (opcionSeleccionada.textContent === randomPregunta.respuesta) {
        puntaje++;
        btnRpt.textContent = `Respuesta correcta`;
        
        document.querySelector(".rpt-mostrar").style.display = "block";
        
        
      } else {
          
          btnRpt.textContent = `Respuesta incorrecta, La respuesta correcta es ${randomPregunta.respuesta}`;
          document.querySelector(".rpt-mostrar").style.display = "block";
          
      }
        document.querySelector(".envR").style.display = "block";
      
  }
 

};

    //PASA A CONFIGURAR EL CONTADOR EN CASO DE LLEGAR A 10 FINALIZA Y MUESTRA EL PUNTAJE
function siguientePregunta(){

  document.querySelector(".envR").style.display = "none"; 
  document.querySelector(".rpt-mostrar").style.display = "none"; 
  contador++;

  if(contador === 10){
    console.log("ya termino");
    document.querySelector(".rpt-mostrar").style.display = "none";
    document.querySelector(".opci").style.display = "none";
    document.querySelector(".puntaje-general").textContent = puntaje * 10;
    document.querySelector(".pregunta").textContent = `Finalizado`;
  }else{
    empezar();
  }  
} 

