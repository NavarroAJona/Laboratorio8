class DataTable {
    constructor(dataOrigin, context) {
        this.dataOrigin = dataOrigin;
        this.context = context;
    }
    fillContext() {
        fetch(this.dataOrigin)
            .then(response => {
                return response.json();
            })
            .then(data => {
                var body = document.getElementById("ProductsContext");
                let tabla = document.createElement("table");
                var tbbody = document.createElement("tbody");
                let row = '';
                let columna = document.createElement("tr");
                var celda = document.createElement("td");
                //Queme esta parte del codigo para que se viera bonito
                //Es una decision de clean code vs que la tabla se muestre bonita
                var textoCelda = document.createTextNode("ID");
                celda.appendChild(textoCelda);
                columna.appendChild(celda);
                tbbody.appendChild(columna);
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(" Precio ");
                celda.appendChild(textoCelda);
                columna.appendChild(celda);
                tbbody.appendChild(columna);
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(" Nombre ");
                celda.appendChild(textoCelda);
                columna.appendChild(celda);
                tbbody.appendChild(columna); var celda = document.createElement("td");
                var textoCelda = document.createTextNode(" Cantidad ");
                celda.appendChild(textoCelda);
                columna.appendChild(celda);
                tbbody.appendChild(columna);
                row = '';
                for (const object of data) {
                    let columna = document.createElement("tr");
                    for (const key in object) {
                        row += `${object[key]} `
                        var celda = document.createElement("td");
                        var textoCelda = document.createTextNode(row);
                        celda.appendChild(textoCelda);
                        columna.appendChild(celda);
                        tbbody.appendChild(columna);
                        row = '';
                    }
                }
                tabla.appendChild(tbbody);
                body.appendChild(tabla);
                tabla.setAttribute("border", "2");

            })
            .catch(error => {
                console.log(error);
            })
    }
}

