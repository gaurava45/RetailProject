package com.retail.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
//@Table(name = "tbl_company")
public class Company {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String email;
	private String phone;
	private String address;
	
	private String gstn;
	
    private String bankAccNo;
    private String bankName;
    private String bankIFSC;
    
//    @OneToMany(targetEntity = Purchase.class, cascade = CascadeType.ALL)
//    @JoinColumn(name = "company_id", referencedColumnName = "id")
    @OneToMany(targetEntity = Purchase.class, mappedBy = "company", fetch = FetchType.LAZY)
    //@JsonManagedReference
    @JsonIgnoreProperties("company")
    private List<Purchase> purchases;
    
	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Company(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public Company(int id, String name, String email, String phone, String address, String gstn, String bankAccNo,
			String bankName, String bankIFSC, List<Purchase> purchases) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.gstn = gstn;
		this.bankAccNo = bankAccNo;
		this.bankName = bankName;
		this.bankIFSC = bankIFSC;
		this.purchases = purchases;
	}

	public List<Purchase> getPurchases() {
		return purchases;
	}
	public void setPurchases(List<Purchase> purchases) {
		this.purchases = purchases;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGstn() {
		return gstn;
	}
	public void setGstn(String gstn) {
		this.gstn = gstn;
	}
	public String getBankAccNo() {
		return bankAccNo;
	}
	public void setBankAccNo(String bankAccNo) {
		this.bankAccNo = bankAccNo;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getBankIFSC() {
		return bankIFSC;
	}
	public void setBankIFSC(String bankIFSC) {
		this.bankIFSC = bankIFSC;
	}
	@Override
	public String toString() {
		return "Company [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", address="
				+ address + ", gstn=" + gstn + ", bankAccNo=" + bankAccNo + ", bankName=" + bankName + ", bankIFSC="
				+ bankIFSC + "]";
	}
    
    
	

}
