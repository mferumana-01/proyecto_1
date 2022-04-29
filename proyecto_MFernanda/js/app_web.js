window.addEventListener('load', inicial, false);

function inicial() {
    var tabla = document.createElement('table');
    document.body.appendChild(tabla);

    var vendedoresSL = document.getElementById('vendedoresSL');
    var cantJoyasTxt = document.getElementById('cantJoyasTxt');
    var registrarBtn = document.getElementById('registrarBtn');
    var pagoBtn = document.getElementById('pagoBtn');
    var mayorJoyasBtn = document.getElementById('mayorJoyasBtn');
    var menorJoyasBtn = document.getElementById('menorJoyasBtn');
    var vRegularBtn = document.getElementById('vRegularBtn');
    var resultadoVd = document.getElementById('resultadoVd');

    var datos = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    registrarVendedores(1, 'Valeria', 'Laverde', 'VIP', 0, 0, 'vlaverde@gmail.com', 78769835);
    registrarVendedores(2, 'Oscar', 'Isaac', 'VIP', 0, 0, 'oisaac@gmail.com', 77468215);
    registrarVendedores(3, 'Sara', 'Sánchez', 'Regular', 0, 0, 'ssanchez@gmail.com', 83954607);
    registrarVendedores(4, 'Adriana', 'Rey', 'Regular', 0, 0, 'arey@gmail.com', 78747215);
    registrarVendedores(5, 'Camilo', 'Gomez', 'VIP', 0, 0, 'cgomez@gmail.com', 89995416);
    registrarVendedores(6, 'Jose', 'Obando', 'Regular', 0, 0, 'jobando@gmail.com', 6482051);
    registrarVendedores(7, 'Maria', 'Duran', 'Regular', 0, 0, 'mduran@gmail.com', 65680303);
    registrarVendedores(8, 'Andrey', 'Chavarria', 'Regular', 0, 0, 'achavarria@gmail.com', 80004571);
    registrarVendedores(9, 'Mario', 'Umaña', 'VIP', 0, 0, 'mumana@gmail.com', 32850468);
    registrarVendedores(10, 'Patricia', 'Avila', 'Regular', 0, 0, 'pavila@gmail.com', 88474417);


    tablaVendedores();

    function registrarVendedores(id, nombre, apellido, tipo, cantidad, total, email, telefono) {
        datos[0].push(id);
        datos[1].push(nombre);
        datos[2].push(apellido);
        datos[3].push(tipo);
        datos[4].push(cantidad);
        datos[5].push(total);
        datos[6].push(email);
        datos[7].push(telefono);
    }

    function ingresarJoyas() {
        var joyasSumar = Number(cantJoyasTxt.value);
        id = Number(vendedoresSL.value - 1);
        var cantJoyas = Number(datos[4][id]);
        cantJoyas = cantJoyas + Number(joyasSumar);
        datos[4][id] = cantJoyas;
    }


    function tablaVendedores() {
        tabla.innerHTML = '';

        var tr = document.createElement('tr');
        tabla.appendChild(tr);

        var th = document.createElement('th');
        th.innerHTML = 'ID';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Nombre';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Apellido';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tipo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Total';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Correo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tel';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Borrar';
        tr.appendChild(th);


        for (var y = 0; y < datos[0].length; y++) {

            var tr = document.createElement('tr');
            tabla.appendChild(tr);

            td = document.createElement('td');
            td.innerHTML = datos[0][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[1][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[2][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[3][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[4][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[6][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[7][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = "<button class='deleteBtn btn btn-outline-light' id='eliminarBtn'>Borrar</button>";
            tr.appendChild(td);
        }
    }


    function totalJoyasVendidas() {
        var total = 0;
        resultadoVd.innerHTML = '';
        resultadoVd.classList.add('resultadoVd');


        for (var y = 0; y < datos[4].length; y++) {
            total = total + Number(datos[4][y]);
        }
        resultadoVd.innerHTML = "La cantidad total de joyas es de:" + total;
    }

    function mayorVendedor() {
        var mayorVendedor = datos[4][0];
        var posicionMayor = 0;
        resultadoVd.innerHTML = '';

        for (var y = 0; y < datos[4].length; y++) {
            if (mayorVendedor < datos[4][y]) {
                mayorVendedor = datos[4][y];
            }
        }

        posicionMayor = datos[4].indexOf(mayorVendedor);
        resultadoVd.innerHTML = "El vendedor con mayor ventas es: " + datos[1][posicionMayor] + "  " + datos[2][posicionMayor]
    }

    function menorVendedor() {
        var menorVendedor = datos[4][0];
        var posicionMenor = 0;
        resultadoVd.innerHTML = '';

        for (var y = 0; y > datos[4].length; y++) {
            if (menorrVendedor > datos[4][y]) {
                menorVendedor = datos[4][y];
            }
        }

        posicionMenor = datos[4].indexOf(menorVendedor);
        resultadoVd.innerHTML = "El vendedor con menos ventas es: " + datos[1][posicionMenor] + "  " + datos[2][posicionMenor]
    }

    function vRegular() {
        var Vendedor = datos[4][0];
        var posicionMayor = 0;
        resultadoVd.innerHTML = '';

        for (var y = 0; y < datos[4].length; y++) {
            if (Vendedor < datos[4][y]) {
                Vendedor = datos[4][y];
            }
        }
        if (vRegularBtn.value > '') {
            Swal.fire({
                icon: 'error',
                title: 'No hay ningun ganador',
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Felicidades! Ganaste un 5% extra",
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    function pagoVendedores() {
        var precioJoya = 1000;
        var extraVIP = 10;
        resultadoVd.innerHTML = " ";
        id = Number(vendedoresSL.value - 1);
        var total = 0;
        var pagoNeto;
        pagoNeto = precioJoya * Number(datos[4][id]);

        if (datos[3][id] == 'VIP') {
            total = pagoNeto + (pagoNeto / 100) * extraVIP;
        } else {
            total = pagoNeto;
        }

        datos[5][id] = total;
        resultadoVd.innerHTML = "El monto a pagar a " + datos[1][id] + " " + datos[2][id] + ' ' + "es de " + total;
    }

    registrarBtn.onclick = function registrarBtnOnClick() {
        ingresarJoyas();
        tablaVendedores();
        if (cantJoyasTxt.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Por favor revisar el campo solicitado y llenarlo con un numero',
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Registro realizado",
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    function borrarfila(e) {
        if (!e.target.classList.contains("deleteBtn")) {
            return;
        }
        const btn = e.target;
        btn.closest("tr").remove();
    }


    function restablecer() {
        var id = Number(vendedoresSL.value - 1);
        var cant = 0;
        datos[4][id] = cantJoyasTxt
    }


    pagoBtn.onclick = function pagoBtn() {
        pagoVendedores();
    }
    mayorVendedorBtn.onclick = function mayorVendedorBtnOnclick() {
        mayorVendedor();
    }

    menorVendedorBtn.onclick = function menorVendedorBtnOnclick() {
        menorVendedor();
    }

    vRegularBtn.onclick = function vRegularBtnOnclick() {
        vRegular();
    }

    totalJoyasBtn.onclick = function totalJoyasBtnOnclick() {
        totalJoyasVendidas();
    }

    tabla.addEventListener("click", borrarfila);
}