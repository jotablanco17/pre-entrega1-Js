function calcularSumaProductos() {
    let edad = parseInt(prompt("Ingrese su edad:"));

    if (edad >= 18) {
        let precio = 0;
        let sumaProductos = 0;

        while (precio !== "esc") {
            precio = prompt("Ingrese el precio del producto (o 'esc' para finalizar):");

            if (precio !== "esc") {
                precio = parseInt(precio);
                sumaProductos += precio;
            }
        }

        alert("La suma de los productos es: " + sumaProductos);
    } else {
        alert("Lo siento, no puedes ingresar. Eres menor de edad.");
    }
}

calcularSumaProductos();
