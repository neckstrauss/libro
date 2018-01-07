package com.calarcasi.store.entities;


public class Resultado<Entidad> {

	private String mensaje;
	private Entidad objeto;

	public Resultado(String mensaje, Entidad objeto) {
		super();
		this.mensaje = mensaje;
		this.objeto = objeto;
	}

	public String getMensaje() {
		return mensaje;
	}

	public Entidad getObjeto() {
		return objeto;
	}

	public String toString(){
		return mensaje+"\"\\n\""+objeto.toString();
	}
	
}
