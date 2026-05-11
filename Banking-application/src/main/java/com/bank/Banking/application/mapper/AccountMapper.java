package com.bank.Banking.application.mapper;

import com.bank.Banking.application.dto.Accountdto;
import com.bank.Banking.application.entity.Account;

public class AccountMapper {

    public static Account maptoAccount(Accountdto accountdto) {

        Account account = new Account(
        		accountdto.getId(),
        		accountdto.getAccountHolderName(),
        		accountdto.getBalance()
        		);
    
        
      return account;
    }
    
    public static Accountdto maptoAccountdto(Account account) {
    	Accountdto accountdto=new Accountdto(
    			account.getId(),
    			account.getAccountHoldername(),
    			account.getBalance()
    			);
    	
    	return accountdto;
    	
    	
    }
    
}
