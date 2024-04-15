let campers = [];

let Trainers = ["1. Pedro", "2. Jholber", "3. Miguel", "4. Garcia", "5. Fabio", "6. Holguer"]

choice1= prompt("Bienvenido usuario a que informacion desea acceder?\n1. Campers\n2. Trainers")

if (choice1 == 1) {
    menu1 = prompt("Ingrese el número de la opcion a la que desea ingresar\n \n1. Registrar nuevo Camper\n2. Mostrar los campers en Inscrito\n3. Mostrar Campers en Riesgo\n4. Mostrar Campers segun ruta\n5. Mostrar informacion de Modulos")
    if (menu1 == 1){
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

            camper.id = parseInt(prompt("Ingrese el numero de identificacion del Camper"));
            camper.nombres = prompt("Ingrese los nombres del Camper");
            camper.apellidos = prompt("Ingrese los apellidos del Camper");
            camper.direccion = prompt("Ingrese la Direccion registrada por el Camper");
            camper.acudiente = prompt("Ingrese el nombre del Acudiente proporcionado por el Camper");
            camper.contacto = parseInt(prompt("Ingrese el contacto del Camper"));
            camper.estado = prompt("Ingrese el estado actual del Camper (En proceso de ingreso, Inscrito, Aprobado,Cursando, Graduado, Expulsado, Retirado)");
            camper.riesgo = prompt("El camper se encuentra en Riesgo? (Responda 'si' o 'no')") === 'si'

            campers.push(camper);

        }
    } else if (menu1 == 2){
        let campersInscritos = campers.filter(function(camper) {
            return camper.estado === "Inscrito";
        });

        if (campersInscritos.length > 0) {
            let mensaje = "Campers Inscritos:\n";
            campersInscritos.forEach(function(camper){
                mensaje += `ID: ${camper.id}, Nombres: ${camper.nombres}, Apellidos: ${camper.apellidos}\n }`;

            });
            alert(mensaje);
        } else{
            alert("No hay campers inscritos.");
        }
    }

} else if (choice1 == 2) {
    rta1 = prompt("Trainers activos:\n \n" + Trainers +"\n \nIngrese el número de la opcion a la que desea ingresar\n1. Informacion del Trainer\n2. Eliminar Trainer\n3. Agregar Trainer\n4. Reemplazar Trainer")
    if (rta1 == 1){
        selectTrainer = prompt("Ingrese el numero del trainer que desea ver:" + Trainers)
    } if (selectTrainer == 1){
        prompt("Nombre: Pedro\nSalones asignados: P1, P2\nHorario: 6:00 - 9:30; 10:00 - 14:00\nRuta asignada: Ruta Java\n quiere hacer pull o push?")
    }

} else {
    alert("Opcion incorrecta, vuelve a intenarlo mas tarde")
}