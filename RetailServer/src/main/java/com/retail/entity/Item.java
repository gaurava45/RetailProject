package com.retail.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String description;
	private String codeOfItem;
	private Double quantity;
	private Double rateNet;
	private Double amount;
	private Double gstTax;
	
	@ManyToOne(targetEntity = Purchase.class, fetch = FetchType.LAZY)
	//@JoinColumn(name = "purchase_id")
	//@JsonBackReference
	@JsonIgnoreProperties("items")
	private Purchase purchase;
	
	public Item(int id, String description, String codeOfItem, Double quantity, Double rateNet, Double amount,
			Double gstTax, Purchase purchase) {
		super();
		this.id = id;
		this.description = description;
		this.codeOfItem = codeOfItem;
		this.quantity = quantity;
		this.rateNet = rateNet;
		this.amount = amount;
		this.gstTax = gstTax;
		this.purchase = purchase;
	}
	public Item() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCodeOfItem() {
		return codeOfItem;
	}
	public void setCodeOfItem(String codeOfItem) {
		this.codeOfItem = codeOfItem;
	}	
	public Double getQuantity() {
		return quantity;
	}
	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}
	public Double getRateNet() {
		return rateNet;
	}
	public void setRateNet(Double rateNet) {
		this.rateNet = rateNet;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public Double getGstTax() {
		return gstTax;
	}
	public void setGstTax(Double gstTax) {
		this.gstTax = gstTax;
	}
	public Purchase getPurchase() {
		return purchase;
	}
	public void setPurchase(Purchase purchase) {
		this.purchase = purchase;
	}
	@Override
	public String toString() {
		return "Item [id=" + id + ", description=" + description + ", codeOfItem=" + codeOfItem + ", quantity="
				+ quantity + ", rateNet=" + rateNet + ", amount=" + amount + ", gstTax=" + gstTax + ", purchase="
				+ purchase + "]";
	}

	
	
	

}
