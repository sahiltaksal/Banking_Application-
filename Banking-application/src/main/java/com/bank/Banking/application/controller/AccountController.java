package com.bank.Banking.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
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
	@PostMapping
	public ResponseEntity<Accountdto> addAccount (@RequestBody Accountdto accountdto){
		
		return new ResponseEntity<>(accountService.createAccount(accountdto),HttpStatus.CREATED);
	}

}
