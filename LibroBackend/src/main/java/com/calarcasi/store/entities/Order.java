package com.calarcasi.store.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the order database table.
 * 
 */
@Entity
@Table(name="ORDEN")
@NamedQuery(name=Order.AllOrders, query="SELECT o FROM Order o")
public class Order implements Serializable {
	private static final long serialVersionUID = 1L;
	
	public final static String AllOrders = "Order.findAll";

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(updatable=false)
	private Long id;

	private String address;

	private String city;

	private String country;

	private String name;

	private boolean shipped;

	private String state;

	private String zip;
	
	@Embedded
	private Cart cart;

	public Order() {
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return this.city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return this.country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZip() {
		return this.zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public boolean isShipped() {
		return shipped;
	}

	public void setShipped(boolean shipped) {
		this.shipped = shipped;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}
	
	

}