package com.retail.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Purchase {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	//@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
	private Date dateOfPurchase;
	private String billNo;
	private Double totalAmount;
	
//  @OneToMany(targetEntity = Purchase.class, mappedBy = "company", fetch = FetchType.LAZY)
  //@JsonManagedReference
    @OneToMany(targetEntity = Item.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "purchase_id")
    //@JoinColumn(name = "purchase_id", referencedColumnName = "id")
    //@JsonIgnoreProperties("purchase")
	private List<Item> items;
	
	public List<Item> getItems() {
		return items;
	}
	public void setItems(List<Item> items) {
		this.items = items;
	}
	@ManyToOne(targetEntity = Company.class, fetch = FetchType.EAGER)
	@JoinColumn(name = "company_id")
	//@JsonBackReference
	@JsonIgnoreProperties("purchases")
	private Company company;
	
	public Purchase() {
		super();
	}
		
	public Purchase(int id, Date dateOfPurchase, String billNo, Double totalAmount, List<Item> items, Company company) {
		super();
		this.id = id;
		this.dateOfPurchase = dateOfPurchase;
		this.billNo = billNo;
		this.totalAmount = totalAmount;
		this.items = items;
		this.company = company;
	}
	public Company getCompany() {
		return company;
	}
	public void setCompany(Company company) {
		this.company = company;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDateOfPurchase() {
		return dateOfPurchase;
	}
	public void setDateOfPurchase(Date dateOfPurchase) {
		this.dateOfPurchase = dateOfPurchase;
	}
	public String getBillNo() {
		return billNo;
	}
	public void setBillNo(String billNo) {
		this.billNo = billNo;
	}
	public Double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}
	@Override
	public String toString() {
		return "Purchase [id=" + id + ", dateOfPurchase=" + dateOfPurchase + ", billNo=" + billNo + ", totalAmount="
				+ totalAmount + ", items=" + items + ", company=" + company + "]";
	}

	
	
	

}
