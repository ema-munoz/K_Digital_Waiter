class fecha {
	constructor() {
		this.fecha = document.getElementById("fechas");
		this.numeroDocumento = document.getElementById("codigoDocumento");
		this.identrada = document.getElementById("idregistro");
	}
	obtencion() {
		const tiempoTranscurrido = Date.now();
		const hoy = new Date(tiempoTranscurrido);
		this.fecha.value = hoy.toLocaleDateString();
	}
	sumaNumeros() {
		if (this.numeroDocumento.value == "") {
			this.numeroDocumento.value = 1;
			this.identrada.value = parseInt(this.numeroDocumento.value);
		} else {
			this.numeroDocumento.value =
				parseInt(this.numeroDocumento.value) + 1;
			this.identrada.value = this.numeroDocumento.value;
		}
	}
}

let fechas = new fecha();
window.onload = fechas.obtencion();
window.onload = fechas.sumaNumeros();
