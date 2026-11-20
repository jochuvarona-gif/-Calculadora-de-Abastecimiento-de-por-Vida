let edad = 17;
let edadMaxima = 80;
let snack = "papas fritas";
let snacksPorDia = 2;

let snacksRestantes = (edadMaxima - edad) * 365 * snacksPorDia;

alert("Necesitarás " + snacksRestantes + " de " + snack + " para que te alcancen hasta los " + edadMaxima + " años.");

let precioSnack = 1500;
let gastoTotal = snacksRestantes * precioSnack;

alert("Vas a gastar $" + gastoTotal + " en snacks durante el resto de tu vida.");

let diasViaje = 10;
let presupuesto = 600000;
let totalComidas = diasViaje * 3;

let dineroPorComida = presupuesto / totalComidas;

alert("Podés gastar " + dineroPorComida + " en cada comida para que te alcance la plata durante los " + diasViaje + " días de viaje.");
