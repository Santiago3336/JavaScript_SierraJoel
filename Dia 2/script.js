let Trainers = ["1. Pedro", "2. Jholber", "3. Miguel", "4. Garcia", "5. Fabio", "6. Holguer"]

choice1= prompt("Bienvenido usuario a que informacion desea acceder?\n1. Campers\n2. Trainers")

if (choice1 == 1) {
    menu1 = prompt("Ingrese el número de la opcion a la que desea ingresar\n")

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