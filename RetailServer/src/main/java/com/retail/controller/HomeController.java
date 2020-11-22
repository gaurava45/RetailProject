package com.retail.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.retail.entity.Company;
import com.retail.entity.Purchase;
import com.retail.repo.CompanyRepository;
import com.retail.repo.PurchaseRepository;

@RestController
@CrossOrigin
public class HomeController {
	
	@Autowired
	CompanyRepository companyRepo;
	@Autowired
	PurchaseRepository purchaseRepo;
	
	@PostMapping("/company/create")
	public void createCompany(@RequestBody Company company) {
		companyRepo.save(company);
	}
	
	@GetMapping("/company/all")
    public List<Company> getAllCompanies(){
        List<Company> companies = this.companyRepo.findAll();

        return companies;
    }
	
	@PostMapping("/purchase/create")
	public void createPurchase(@RequestBody Purchase purchase) {
		System.out.println(purchase);
		purchaseRepo.save(purchase);
	}
	
	@GetMapping("/purchase/all")
    public List<Purchase> getAllPurchases(){
        List<Purchase> purchases = this.purchaseRepo.findAll();

        return purchases;
    }
	
	/*
	 * @GetMapping("/company/sorted/{field}") public List<Company>
	 * getCompanySorted(@PathVariable String field){ return
	 * companyRepo.findAll(Sort.by(field)); }
	 */
	/**
	@GetMapping("/purchase/get/{companyId}")
	public List<Purchase> getPurchaseByCompanyId(@PathVariable int companyId){
		return purchaseRepo.getPurchaseByCompanyId(companyId);
	}**/
	
	@GetMapping("/company/get/{companyId}")
	public Company findCompanyById(@PathVariable int companyId) {
		return companyRepo.findById(companyId);
	}
	
	@GetMapping("/purchase/get/{purchaseId}")
	public Purchase findPurchaseById(@PathVariable int purchaseId) {
		return purchaseRepo.findById(purchaseId);
	}
	
	@GetMapping("/company/sorted/name")
	public List<Company> getSortedByCompanyName() {
		return companyRepo.getSortedByCompanyName();
		//return companyRepo.findAll();
	}

	@PutMapping("/purchase")
    public void update(@RequestBody Purchase purchase){
		System.out.println(purchase);
		purchaseRepo.save(purchase);
    }
    
    @DeleteMapping("/purchase/{id}")
    public void delete(@PathVariable("id") int id) {
    	System.out.println("delete " + id);
    	purchaseRepo.deleteById(id);
    }
	
	/*
	 * public List<User> findByMultiCondition(String profession, int age){ return
	 * companyRepo.findByProfessionAndAge(profession, age); }
	 * 
	 * public List<User> getUsersIgnoreCase(String profession){ return
	 * companyRepo.findByProfessionIgnoreCase(profession); }
	 */
	
	/*
	 * public Page<User> getPaginatedUser(){ return repo.findAll(new PageRequest(0,
	 * 3)); }
	 */

}
