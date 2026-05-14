package com.bank.Banking.application.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bank.Banking.application.dto.Accountdto;
import com.bank.Banking.application.service.AccountService;
@RestController
@RequestMapping("/api/accounts")
public class AccountController {
	@Autowired
	private AccountService accountService;

	public AccountController(AccountService accountService) {
		super();
		this.accountService = accountService;
	}
	
	
	
	//add account REST API
	
	@PostMapping
	public ResponseEntity<Accountdto> addAccount (@RequestBody Accountdto accountdto){
		
		return new ResponseEntity<>(accountService.createAccount(accountdto),HttpStatus.CREATED);
	}
	
	//Get account REST API
	@GetMapping("/{id}")
	
    public ResponseEntity<Accountdto> getAccountById(@PathVariable Long id){
    	
    	Accountdto accountdto= accountService.getAccountdtoById(id);
    	
		return ResponseEntity.ok(accountdto);
    	
    }
	
    @PutMapping("/{id}/deposit")
    public  ResponseEntity<Accountdto> deposit( @PathVariable Long id,@RequestBody Map<String,Double>request){
    	
    	
    	double amount =request.get("amount");
    	
    	Accountdto accountdto= accountService.deposit(id,amount);
    	
		return ResponseEntity.ok(accountdto);
    	
    }
    
    
    //withdraw RREST API
    @PutMapping("/{id}/withdraw")
    public ResponseEntity<Accountdto> withdraw(@PathVariable Long id,@RequestBody Map<String, Double>request){
    	
    	double amount=request.get("amount");
    	Accountdto accountdto =accountService.withdraw(id, amount);
    	
		return ResponseEntity.ok(accountdto);
    	
    }
	
    
    //Get All Accounts REST API
    @GetMapping
    public ResponseEntity<List<Accountdto> > getAllAccounts(){
    	
   List<Accountdto> accounts = 	accountService.getAllAccounts();
		return ResponseEntity.ok(accounts);
    	
    
    }
    
	

}
