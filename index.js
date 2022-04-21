function mostrarResultado(){
    const comparacion = document.querySelector('#comparacion');
    comparacion.classList.remove('hide');
    ocultarFormularioPrincipal();
    obtenerInformacion();
}

function ocultarFormularioPrincipal(){
    const formularioPrincipal = document.querySelector('#formularioPrincipal');
    formularioPrincipal.classList.add('hide');
}
function ocultarResultado(){
    const comparacion = document.querySelector('#comparacion');
    comparacion.classList.add('hide');
    mostrarFormularioPrincipal();
}

function mostrarFormularioPrincipal(){
    const formularioPrincipal = document.querySelector('#formularioPrincipal');
    formularioPrincipal.classList.remove('hide');
}
function limpiarFormulario() {
    document.getElementById("formulario1").reset();
    document.getElementById("formulario2").reset();
}

function obtenerDatos(numeroFormulario){
    const marca = document.querySelector('#marca' + numeroFormulario).value;
    const discoDuro = document.querySelector('#discoDuro' + numeroFormulario).value;
    const memoriaRam = document.querySelector('#memoriaRam' + numeroFormulario).value;
    const tarjetaVideo = document.querySelector('#tarjetaVideo' + numeroFormulario).checked;
    const tamanoPantalla = document.querySelector('#tamanoPantalla' + numeroFormulario).value;
    const precio = document.querySelector('#precio' + numeroFormulario).value;
    const pc = crearObjeto(marca, discoDuro, memoriaRam, tarjetaVideo, tamanoPantalla, precio);
    return pc;
}

function obtenerInformacion(){
    const pc1 = obtenerDatos(1);
    const pc2 = obtenerDatos(2);
    asignarValoresVisualizacion(1,pc1);
    asignarValoresVisualizacion(2,pc2);
    comparar(pc1,pc2);
}

function crearObjeto(marca, discoDuro, memoriaRam, tarjetaVideo, tamanoPantalla, precio){
    return {
        'marca': marca,
        'discoDuro': discoDuro,
        'memoriaRam': memoriaRam,
        'tarjetaVideo': tarjetaVideo,
        'tamanoPantalla': tamanoPantalla,
        'precio': precio
    }
}

function asignarValoresVisualizacion(numeroFormulario, informacionPc){
    document.querySelector('#visualizacionMarca' + numeroFormulario).innerHTML = informacionPc.marca;
    document.querySelector('#visualizacionDiscoDuro' + numeroFormulario).innerHTML = informacionPc.discoDuro;
    document.querySelector('#visualizacionMemoriaRam' + numeroFormulario).innerHTML = informacionPc.memoriaRam;
    document.querySelector('#visualizacionTarjetaVideo' + numeroFormulario).innerHTML = informacionPc.tarjetaVideo;
    document.querySelector('#visualizacionTamanoPantalla' + numeroFormulario).innerHTML = informacionPc.tamanoPantalla;
    document.querySelector('#visualizacionPrecio' + numeroFormulario).innerHTML = informacionPc.precio;
    document.querySelector('#imgMarca' + numeroFormulario).src = determinarImg(informacionPc.marca);
}

function comparar(pc1, pc2){
    let puntosPc1 = 0;
    let puntosPc2 = 0;
    let mensaje = "";
    let mensajeMejorPc = "";

    if (pc1.discoDuro > pc2.discoDuro){
        puntosPc1 = puntosPc1 + 1;
    }else if(pc2.discoDuro > pc1.discoDuro){
        puntosPc2 = puntosPc2 + 1;
    }

    if (pc1.memoriaRam > pc2.memoriaRam){
        puntosPc1 = puntosPc1 + 1;        
    } else if(pc2.memoriaRam > pc1.memoriaRam){
        puntosPc2 = puntosPc2 + 1;
    }

    if (pc1.tarjetaVideo && pc2.tarjetaVideo){
        puntosPc1 = puntosPc1 + 1;
        puntosPc2 = puntosPc2 + 1;
    } else if (pc1.tarjetaVideo){
        puntosPc1 = puntosPc1 + 1;
    } else if (pc2.tarjetaVideo){
        puntosPc2 = puntosPc2 + 1;
    }
    
    if (pc1.tamanoPantalla > pc2.tamanoPantalla){
        puntosPc1 = puntosPc1 + 1;
    } else if(pc2.tamanoPantalla > pc1.tamanoPantalla){
        puntosPc2 = puntosPc2 + 1;
    }

    if (pc1.precio > pc2.precio){
        mensaje = "El equipo 2 es mas barato.";
    } else if(pc2.precio > pc1.precio){
        mensaje = "El equipo 1 es mas barato."
    } else {
        mensaje = "Los dos equipos tienen el mismo precio."
    }

    if(puntosPc1 > puntosPc2){
        mensajeMejorPc = "El equipo 1 tiene mejores prestaciones técnicas";
    } else if (puntosPc2 > puntosPc1){
        mensajeMejorPc = "El equipo 2 tiene mejores prestaciones técnicas";
    } else {
        mensajeMejorPc = "Empate técnico.";
    }

    document.querySelector('#mensajeMejorPc').innerHTML = mensajeMejorPc;
    document.querySelector('#mensajeMejorPrecio').innerHTML = mensaje;
}

function determinarImg(marca){
    let rutaImg = "./img/";
    marca = marca.toLowerCase();

    switch(marca){
        case 'apple':
            rutaImg = rutaImg + "apple.png";
            break;
        case 'compaq':
            rutaImg = rutaImg + "compaq.jpg";
            break;
        case 'dell':
            rutaImg = rutaImg + "dell.png";
            break;
        case 'hp':
            rutaImg = rutaImg + "hp.jpg";
            break;
        case "huawei":
            rutaImg = rutaImg + "huawei.png";
            break;
        case 'lenovo':
            rutaImg = rutaImg + "lenovo.png";
            break;
        case 'samsung':
            rutaImg = rutaImg + "samsung.png";
            break;
        case 'xiaomi':
            rutaImg = rutaImg + "xiaomi.png";
            break;
        default: 
            rutaImg = rutaImg + "generico.png"
    }

    return rutaImg;
}
