package com.calarcasi.store.entities;

import com.calarcasi.store.entities.AbsEntity;
import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: CartLine
 *
 */
@Entity

public class CartLine extends AbsEntity implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private Product product;
	private int quantity;
	private String estado;
	
	@Column(name="ORDER_ID")
	private Long order;
	
	
	private static final long serialVersionUID = 1L;

	public CartLine() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Long getOrder() {
		return order;
	}

	public void setOrder(Long order) {
		this.order = order;
	}
   
	
}
