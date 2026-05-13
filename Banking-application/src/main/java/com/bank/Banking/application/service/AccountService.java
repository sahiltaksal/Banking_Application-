package com.bank.Banking.application.service;

import com.bank.Banking.application.dto.Accountdto;
import com.bank.Banking.application.entity.Account;

public interface AccountService {
	Accountdto createAccount(Accountdto account);
	
	Accountdto getAccountdtoById(Long id);
	
	Accountdto deposit(Long id,double balance);
	
	Accountdto withdraw(Long id,double balance);
	
}
 

  

