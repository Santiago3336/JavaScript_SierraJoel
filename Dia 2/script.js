let campers = [];

let Trainers = [];

//Bucle del programa para lograr continuidad
while (true) {
    //Menu principal
    choice1= prompt("Bienvenido usuario a que informacion desea acceder?\n1. Campers\n2. Trainers\n3. Salir")

    if (choice1 == 1) {
        //Menu de Campers
        menu1 = prompt("Ingrese el número de la opcion a la que desea ingresar\n \n1. Registrar nuevo Camper\n2. Mostrar los campers en Inscrito\n3. Mostrar Campers en Riesgo\n4. Mostrar Campers segun ruta\n5. Mostrar informacion de Modulos\n6. Volver al Menu Principal")
        if (menu1 == 1){
            //Registro de nuevo(s) Camper(s)
            cantidadCampers = parseInt(prompt("¿Cuantos campers deseas registrar?"))
            for (let i = 0; i < cantidadCampers; i++){
                camper = {
                    id: 0,
                    nombres: "",
                    apellidos: "",
                    direccion: "",
                    acudiente: "",
                    contacto: 0,
                    estado: "",
                    riesgo: false

                }

                //Solicitud para el/los nuevo(s) camper(s)
                camper.id = parseInt(prompt("Ingrese el numero de identificacion del Camper"));
                camper.nombres = prompt("Ingrese los nombres del Camper");
                camper.apellidos = prompt("Ingrese los apellidos del Camper");
                camper.direccion = prompt("Ingrese la Direccion registrada por el Camper");
                camper.acudiente = prompt("Ingrese el nombre del Acudiente proporcionado por el Camper");
                camper.contacto = parseInt(prompt("Ingrese el contacto del Camper"));
                camper.estado = prompt("Ingrese el estado actual del Camper (En proceso de ingreso, Inscrito, Aprobado,Cursando, Graduado, Expulsado, Retirado)");
                camper.riesgo = prompt("El camper se encuentra en Riesgo? (Responda 'si' o 'no')") === 'si'

                //Agregar la informacion al Array
                campers.push(camper);

            }
        } else if (menu1 == 2){
            //Mostrar Campers Inscritos
            let campersInscritos = campers.filter(function(camper) {
                return camper.estado === "Inscrito";
            });

            if (campersInscritos.length > 0) {
                let mensaje = "Campers Inscritos:\n";
                campersInscritos.forEach(function(camper){
                    mensaje += camper.id + " " + camper.nombres + " " + camper.apellidos + "\n \n";

                });
                alert(mensaje);
            } else{
                alert("No hay campers inscritos.");
            }
            continue; //Volver al menú de Campers
        } else if (menu1 == 3){
            //Mostrar campers con Riesgo
            let campersRiesgo = campers.filter(function(camper){
                return camper.riesgo;
            });

            if (campersRiesgo.length > 0) {
                let mensaje = "Campers en Riesgo:\n";
                campersRiesgo.forEach(function(camper){
                    mensaje += camper.id + " " + camper.nombres + " " + camper.apellidos + "\n \n"
                });
                alert(mensaje)
            } else{
                alert("No hay campers en Riesgo");
            }
            continue; //Volver al menú de Campers
        } else if (menu1 == 6){
            continue; //Volver al menú Principal
        }

    } else if (choice1 == 2) {
        //Menú de Trainers
        rta1 = prompt("Trainers activos:\n \n" + Trainers +"\n \nIngrese el número de la opcion a la que desea ingresar\n1. Informacion del Trainer\n2. Eliminar Trainer\n3. Agregar Trainer\n4. Reemplazar Trainer\n5. Volver al Menu Principal")
        if (rta1 == 1){
                //Mostrar informacion del Trainer seleccionado
                selectTrainer = parseInt(prompt("Ingrese el numero del trainer que desea ver:" + Trainers));
            if (selectTrainer >= 1 && selectTrainer <= Trainers.length){
                let trainerInfo = obtenerInformacionTrainer(selectTrainer - 1);
                alert(trainerInfo);
            } else {
                alert("Número de Trainers no válido");
            }
        } else if (rta1 == 2){
            let eliminarTrainer = parseInt(prompt("Ingrese el numero del trainer que desea eliminar: " + Trainers));
            if (eliminarTrainer >= 1 && eliminarTrainer <= Trainers.length) {
                //Eliminar Trainer
                Trainers.splice(eliminarTrainer - 1, 1);
                alert("Trainer eliminado correctamente")
            } else{
                alert("Número de Trainer Incorrecto")
            }
        } else if (rta1 == 3){
            let cantidadTrainers = parseInt(prompt("¿Cuantos Trainers desea agregar? "))
            for (let i = 0; i < cantidadTrainers; i++){
                trainer = {
                    id: 0,
                    nombres: "",
                    apellidos: "",
                    direccion: "",
                    contacto: 0,
                    salon: "",
                    ruta: "",
                }
                Trainers.push(trainer)

        }
    } else if ( rta1 == 4){
        let reemplazarTrainer = parseInt(prompt("Ingrese el numero del trainer el cual desea reemplazar: " + Trainers));
        if (reemplazarTrainer >= 1 && reemplazarTrainer <= Trainers.length) {
            let nuevoTrainer = prompt("Ingrese los datos del nuevo Trainer")
            Trainers[reemplazarTrainer - 1] = nuevoTrainer
            alert("Trainer reemplazado correctamente ");
        } else {
            alert("Numero de trainer No Valido");
        }
    }
        else if (rta1 == 5) {
            continue; //Volver al menú principal
        }

    } else if (choice1 == 3) {
        break; //Salir del programa
    } else {
        alert("Opcion incorrecta, vuelve a intentarlo más tarde");
    }
}
