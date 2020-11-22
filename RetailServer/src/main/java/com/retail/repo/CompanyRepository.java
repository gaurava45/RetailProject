package com.retail.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.retail.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer>{
	
	//Optional<Company> findByUsername(String uname);
	
	/*public List<User> findByProfession(String profession);
	
	public long countByAge(int age);
	
	public List<User> deleteByName(String name);
	
	public List<User> findByProfessionAndAge(String profession, int age);
	
	public List<User> findByProfessionIgnoreCase(String profession);*/
	
	/*
	 * @Modifying
	 * 
	 * @Query("select u from User u") public List<User> getUserCustomQuery();
	 */
	
	public Company findById(int id);
	
	@Query("select new Company(c.id, c.name) from Company c order by c.name") 
	public List<Company> getSortedByCompanyName();

}
