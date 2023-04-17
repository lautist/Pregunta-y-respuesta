let preguntaH1 = document.querySelector(".pregunta");
let btnStart = document.querySelector(".btn-start");
let btnSiguiente = document.querySelector(".btn-sg");
document.querySelector(".envR").style.display = "none";



const preguntas = [
        {
          pregunta: "¿Cuál es el país más grande del mundo en términos de superficie?",
          opciones: ["Canadá", "China", "Estados Unidos", "Rusia"],
          respuesta: "Rusia"
        },
        {
          pregunta: "¿Qué ciudad europea es conocida como la 'ciudad eterna'?",
          opciones: ["Barcelona", "Roma", "París", "Londres"],
          respuesta: "Roma"
        },
        {
          pregunta: "¿Quién pintó el cuadro 'La persistencia de la memoria'?",
          opciones: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Leonardo da Vinci"],
          respuesta: "Salvador Dalí"
        },
        {
          pregunta: "¿Cuál es la montaña más alta del mundo?",
          opciones: ["Everest", "K2", "Monte Fuji", "Mont Blanc"],
          respuesta: "Everest"
        },
        {
          pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
          opciones: ["1939", "1941", "1945", "1948"],
          respuesta: "1939"
        },
        {
          pregunta: "¿Quién escribió la novela 'El gran Gatsby'?",
          opciones: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "Mark Twain"],
          respuesta: "F. Scott Fitzgerald"
        },
        {
          pregunta: "¿Qué país africano es el más poblado?",
          opciones: ["Etiopía", "Nigeria", "Sudáfrica", "Congo"],
          respuesta: "Nigeria"
        },
        {
          pregunta: "¿Cuál es el planeta más cercano al sol?",
          opciones: ["Venus", "Mercurio", "Marte", "Júpiter"],
          respuesta: "Mercurio"
        },
        {
          pregunta: "¿Qué país es conocido como la 'Tierra del Sol Naciente'?",
          opciones: ["Japón", "Corea del Sur", "China", "Vietnam"],
          respuesta: "Japón"
        },
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
          pregunta: "¿Qué país es conocido por el Taj Mahal?",
          opciones: ["India", "China", "Japón", "Corea del Sur"],
          respuesta: "India",
        },
        {
          pregunta: "¿Cuál es el río más largo del mundo?",
          opciones: ["Nilo", "Amazonas", "Misisipi", "Yangtze"],
          respuesta: "Amazonas",
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
        {
        pregunta: "¿Qué país tiene la forma de bota?",
        opciones: ["España", "Italia", "Francia", "Alemania"],
        respuesta: "Italia",
        },
        {
        pregunta: "¿Quién pintó la obra 'La Gioconda'?",
        opciones: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Salvador Dalí"],
        respuesta: "Leonardo da Vinci",
        },
        {
        pregunta: "¿En qué país se encuentra la Torre Eiffel?",
        opciones: ["Francia", "Italia", "España", "Alemania"],
        respuesta: "Francia",
        },
        {
        pregunta: "¿Cuál es la capital de Australia?",
        opciones: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        respuesta: "Canberra",
        },
        {
        pregunta: "¿En qué continente se encuentra la Gran Muralla China?",
        opciones: ["Asia", "América", "África", "Europa"],
        respuesta: "Asia",
        },
        {
        pregunta: "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
        opciones: ["Miguel de Cervantes", "William Shakespeare", "Friedrich Nietzsche", "George Orwell"],
        respuesta: "Miguel de Cervantes",
        },
        {
        pregunta: "¿En qué año se fundó Facebook?",
        opciones: ["2002", "2004", "2006", "2008"],
        respuesta: "2004"
        },  
        {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        respuesta: "Pacífico",
        },
        {
        pregunta: "¿Cuál es el país más poblado del mundo?",
        opciones: ["China", "India", "Estados Unidos", "Rusia"],
        respuesta: "China",
        },
        {
        pregunta: "¿Qué país es el más grande del mundo en términos de superficie?",
        opciones: ["Rusia", "China", "Estados Unidos", "Canadá"],
        respuesta: "Rusia",
        },
        {
        pregunta: "¿Qué ciudad es conocida como la 'Ciudad de los Rascacielos'?",
        opciones: ["Tokio", "Shanghái", "Dubái", "Nueva York"],
        respuesta: "Nueva York",
        },
        {
        pregunta: "¿Cuál es el país más pequeño del mundo?",
        opciones: ["Mónaco", "Nauru", "Vaticano", "San Marino"],
        respuesta: "Vaticano",
        },
        {
        pregunta: "¿Cuál es el nombre de la galaxia en la que se encuentra nuestro sistema solar?",
        opciones: ["Vía Láctea", "Andrómeda", "Sombrero", "Canis Major"],
        respuesta: "Vía Láctea",
        },
        {
        pregunta: "¿En qué país se encuentra la Gran Barrera de Coral?",
        opciones: ["Australia", "Filipinas", "Indonesia", "Japón"],
        respuesta: "Australia",
        },
        {
        pregunta: "¿Quién es el autor de la obra 'Cien años de soledad'?",
        opciones: ["Gabriel García Márquez", "Mario Vargas Llosa", "Isabel Allende", "Jorge LuiBorges"],
        respuesta: "Gabriel García Márquez",
        },
        {
        pregunta: "¿Qué país es conocido por la construcción de las Pirámides de Giza?",
        opciones: ["Egipto", "México", "China", "India"],
        respuesta: "Egipto",
        },
        {
        pregunta: "¿En qué país se encuentra la estatua del Cristo Redentor?",
        opciones: ["Brasil", "Argentina", "Perú", "Colombia"],
        respuesta: "Brasil",
        },
]

let preguntasUtilizadas = [];

let puntaje = 0;
let contador = 0;
let contadorMostrar = 1;

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
        btnRpt.innerHTML = `Respuesta correcta, Vas por la pregunta <span style="color: #b5b5ff">${contadorMostrar}/10</span>`;
        document.querySelector(".rpt-mostrar").style.display = "block";
        
        
      } else {
          
        btnRpt.innerHTML = `Respuesta incorrecta, La respuesta correcta es <span style="color: #e15569">${randomPregunta.respuesta}</span>. Vas por la pregunta <span style="color: #b5b5ff">${contadorMostrar}/10</span>`;

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
  contadorMostrar++;

  if(contador === 10){
    console.log("ya termino");
    document.querySelector(".rpt-mostrar").style.display = "none";
    document.querySelector(".opci").style.display = "none";
    document.querySelector(".puntaje-general").innerHTML = `Tu puntaje final es <span style="color: #b5b5ff">${puntaje * 10}</span>`;
    document.querySelector(".pregunta").textContent = `Finalizado`;
  }else{
    empezar();
  }  
} 



