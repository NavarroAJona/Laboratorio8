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
                var datosTabla = data;
                var tabla = new Tabulator("#ProductsContext", {
                    data: datosTabla,
                    autoColumns: true,
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
}

