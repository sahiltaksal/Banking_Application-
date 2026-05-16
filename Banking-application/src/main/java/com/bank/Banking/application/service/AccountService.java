package com.bank.Banking.application.service;

import java.util.List;

import com.bank.Banking.application.dto.Accountdto;
import com.bank.Banking.application.dto.TransferFundDto;
import com.bank.Banking.application.entity.Account;

public interface AccountService {
	Accountdto createAccount(Accountdto account);
	
	Accountdto getAccountdtoById(Long id);
	
	Accountdto deposit(Long id,double balance);
	
	Accountdto withdraw(Long id,double balance);
	
	List<Accountdto> getAllAccounts();
	
	void deleteAccount(Long id);
	
	void transferFunds(TransferFundDto transferFundDto);
	
}
 

  

