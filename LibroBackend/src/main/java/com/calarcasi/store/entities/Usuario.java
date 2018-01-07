package com.calarcasi.store.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

/**
 * Entity implementation class for Entity: Product
 *
 */
@Entity
@NamedQueries({
		@NamedQuery(name = Usuario.AllUsuarios, query = "SELECT a FROM Usuario a "),
		@NamedQuery(name = Usuario.UsuarioByEmail, query = "SELECT a FROM Usuario a where a.correo = :email ")
})
public class Usuario extends AbsEntity implements Serializable {

	public final static String AllUsuarios = "Usuario.getAllUsuarios";
	public final static String UsuarioByEmail = "Usuario.getUsuarioByEmail";
	
	
	@Id
	private Long id;
	private String name;
	
	private String correo;	
	private String estado;
	
	private static final long serialVersionUID = 1L;

	public Usuario() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
   
}
