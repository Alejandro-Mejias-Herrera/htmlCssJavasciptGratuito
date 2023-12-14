let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    //style permite modificar el estilo. Color, tamaño, etc. al colocar dispplay = "none" la sección no se ve.
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"
    
    //addEventListener permite "escuchar y realizar una acción". En este caso, cada vez que se le da click al botón, se ejecuta una función.
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    //Buscar significado de block.
    sectionSeleccionarAtaque.style.display = "flex"

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let inputPydos = document.getElementById("pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

   if (inputHipodoge.checked) {
        alert("Seleccionaste a Hipodoge")
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        alert("Seleccionaste a Capipepo")
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        alert("Seleccionaste a Ratigueya")
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked == true) {
        alert("Seleccionaste a Langostelvis")
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if (inputTucapalma.checked) {
        alert("Seleccionaste a Tucapalma")
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if (inputPydos.checked) {
        alert("Seleccionaste a Pydos")
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert("Debes seleccionar una mascota")
    } 

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    //Creamos una variable para la mascota y le asigmanos un aleatorio. 
    let mascotaAleatoria = aleatorio(1,6)
    //Se crea una variable para obtener la mascota del enemigo desde el HTML. Luego, se cambiará con innerHTML según la mascotaAleatoria
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1) {
        //Hipodoge
        spanMascotaEnemigo.innerHTML = "Hipodoge"

    } else if (mascotaAleatoria == 2) {
        //Capipepo
        spanMascotaEnemigo.innerHTML = "Capipepo"

    } else if (mascotaAleatoria == 3) {
        //Ratigueya
        spanMascotaEnemigo.innerHTML = "Ratigueya"

    } else if(mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis"

    } else if(mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma"

    } else if(mascotaAleatoria == 6) {
        spanMascotaEnemigo.innerHTML = "Pydos"
    }

}
//Una función para cada ataque de nuestro jugador. En cada una se llama al ataque del enemigo, que está definida después y es aleatoria.
function ataqueFuego() {
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else {
        ataqueEnemigo = "Tierra"
    }
    //Se llamará a la función combate. En la función combate se llamará a su vez a la función crearMensaje para agregar el párrafo.
    combate()
} 

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal("¡FELICIDADES! Ganaste el combate")
    } else if(vidasJugador == 0) {
        crearMensajeFinal("Lo siento, has perdido el combate")
    }
}
//Se creará un mensaje en el DOM. El input es "resultado", que se obtiene del combate.
function crearMensaje(resultado) {
    //Creamos una variable para identivicar la sección en la que insertaremos el párrafo
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    //Creamos una variable y adentro se escribe "p". Eso nos indica que se creará un párrafo en el html 
    //let parrafo = document.createElement("p")
    //Meto un texto en este párrafo. Para eso llamo a innerHTML
    //parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + " y la mascota del enemigo atacó con " + ataqueEnemigo + " - " +resultado
    //Ya creamos el mensaje, pero no le hemos dicho a javascript donde insertarlo.
    //Insertamos el párrafo en la sección de mensajes.
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)


}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado")

    sectionMensajes.innerHTML = resultadoFinal

    //disabled desactiva el boton. Se puede escribir en el html luego del id.
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    //locatioin se refiere a una ubicación es la que se está. Por ejemplo, platzi.com/cursos/programacion-basica. Cuando se invoca, se reinicia la página.
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)