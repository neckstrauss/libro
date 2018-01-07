package com.calarcasi.store.entities;

import java.util.List;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Embeddable @Access(AccessType.FIELD)
public class Cart {

	@Column(name="ITEM_COUNT")
	private Integer itemCount;
	
	@Column(name="CART_PRICE")
	private Float cartPrice;
	
	@OneToMany(cascade=CascadeType.PERSIST, orphanRemoval = true)
	@JoinColumn(name="ORDER_ID")
	private List<CartLine> lines;
	

	public Integer getItemCount() {
		return itemCount;
	}

	public void setItemCount(Integer itemCount) {
		this.itemCount = itemCount;
	}

	public Float getCartPrice() {
		return cartPrice;
	}

	public void setCartPrice(Float cartPrice) {
		this.cartPrice = cartPrice;
	}

	public Cart() {
		super();
	}

	public List<CartLine> getLines() {
		return lines;
	}

	public void setLines(List<CartLine> lines) {
		this.lines = lines;
	}

	
	
	
}
