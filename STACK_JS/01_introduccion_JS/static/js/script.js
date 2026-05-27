console.log("Prueba de conexión js...");

function cambiarTexto() {
            let titulo = "Hola, Bienvenido";
            if (document.getElementById("titulo").innerText == titulo){
                document.getElementById("titulo").innerText = "Has cambiado el texto con JS";
                document.getElementById("titulo").style.color= "red";
            } else{
                document.getElementById("titulo").innerText = titulo;
                document.getElementById("titulo").style.color= "black";
            }
        }