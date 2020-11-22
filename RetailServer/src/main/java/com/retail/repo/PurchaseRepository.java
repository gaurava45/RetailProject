package com.retail.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.retail.entity.Company;
import com.retail.entity.Purchase;

public interface PurchaseRepository extends JpaRepository<Purchase, Integer>{
	
	//Optional<Company> findByUsername(String uname);
	
	/*
	 * @Query("select p from Purchase p JOIN p.company c where c.id = :companyId")
	 * public List<Purchase> getPurchaseByCompanyId(@Param("companyId") int
	 * companyId);
	 */
	
	public Purchase findById(int id);

}
