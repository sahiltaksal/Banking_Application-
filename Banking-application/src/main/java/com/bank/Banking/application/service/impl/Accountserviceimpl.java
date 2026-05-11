package com.bank.Banking.application.service.impl;

import org.springframework.stereotype.Service;

import com.bank.Banking.application.dto.Accountdto;
import com.bank.Banking.application.entity.AccountRepository;
import com.bank.Banking.application.service.AccountService;
@Service
public class Accountserviceimpl  implements AccountService {
	
	private AccountRepository accountRepository;
	

	public Accountserviceimpl(AccountRepository accountRepository) {
		super();
		this.accountRepository = accountRepository;
	}


	@Override
	public Accountdto createAccount(Accountdto account) {
		// TODO Auto-generated method stub
		return null;
	}

}
