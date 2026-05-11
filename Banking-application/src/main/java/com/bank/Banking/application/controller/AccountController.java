package com.bank.Banking.application.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bank.Banking.application.dto.Accountdto;
import com.bank.Banking.application.service.AccountService;

public class AccountController {
	
	private AccountService accountService;

	public AccountController(AccountService accountService) {
		super();
		this.accountService = accountService;
	}
	
	public ResponseEntity<Accountdto> addAccount (@RequestBody Accountdto accountdto){
		
		return new ResponseEntity<>(accountService.createAccount(accountdto),HttpStatus.CREATED);
	}

}
