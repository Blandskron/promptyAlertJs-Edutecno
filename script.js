do {
    var menu = prompt("Necesidades \n 1-Alimentacion \n 2-Gastos Basico \n 3-Salud \n 4-Entretenimiento \n 5-Salir");
    switch (menu) {
        case "1":
            opcion1();
            break;
        case "2":
            opcion2();
            break;
        case "3":
            var alimentacion = parseInt(prompt("Que tipo de alimento deseas? \n 1-Carne \n 2-Vegano \n 3-Vegetariano"));
            if (alimentacion === 1) {
                alert("a Seleccionado 1 Carne");
            } else if (alimentacion === 2) {
                alert("a Seleccionado 2 Vegano");
            } else if (alimentacion === 3) {
                alert("a Seleccionado 3 Vegetariano");
            } else { 
                alert("Opcion Invalida");
                break;
            };
            break;
        case "4":
            var alimentacion = parseInt(prompt("Que tipo de alimento deseas? \n 1-Carne \n 2-Vegano \n 3-Vegetariano"));
            if (alimentacion === 1) {
                alert("a Seleccionado 1 Carne");
            } else if (alimentacion === 2) {
                alert("a Seleccionado 2 Vegano");
            } else if (alimentacion === 3) {
                alert("a Seleccionado 3 Vegetariano");
            } else { 
                alert("Opcion Invalida");
                break;
            };
            break;
        case "5":
            alert("a Seleccionado 5 Saliendo del Menu");
            break;
        default:
            alert("Opcion Invalida");
    }
} while (menu != "5");

function opcion1() {
    var alimentacion = parseInt(prompt("Que tipo de alimento deseas? \n 1-Carne \n 2-Vegano \n 3-Vegetariano"));
    if (alimentacion === 1) {
        alert("a Seleccionado 1 Carne");
    } else if (alimentacion === 2) {
        alert("a Seleccionado 2 Vegano");
    } else if (alimentacion === 3) {
        alert("a Seleccionado 3 Vegetariano");
    } else { 
        alert("Opcion Invalida");
    };
}

function opcion2() {
    var alimentacion = parseInt(prompt("Que tipo de alimento deseas? \n 1-Carne \n 2-Vegano \n 3-Vegetariano"));
    if (alimentacion === 1) {
        alert("a Seleccionado 1 Carne");
    } else if (alimentacion === 2) {
        alert("a Seleccionado 2 Vegano");
    } else if (alimentacion === 3) {
        alert("a Seleccionado 3 Vegetariano");
    } else { 
        alert("Opcion Invalida");
    };
}