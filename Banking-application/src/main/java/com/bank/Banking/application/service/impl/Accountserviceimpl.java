package com.bank.Banking.application.service.impl;

import java.text.Collator;
import com.bank.Banking.application.entity.TransactionRepository;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bank.Banking.application.dto.Accountdto;
import com.bank.Banking.application.dto.TransferFundDto;
import com.bank.Banking.application.entity.Account;
import com.bank.Banking.application.entity.AccountRepository;
import com.bank.Banking.application.exception.AccountException;
import com.bank.Banking.application.mapper.AccountMapper;
import com.bank.Banking.application.service.AccountService;
import com.bank.Banking.application.entity.Transaction;
@Service
public class Accountserviceimpl  implements AccountService {
	
	private AccountRepository accountRepository;
	private TransactionRepository transactionRepository;
	

	public Accountserviceimpl(AccountRepository accountRepository,
            TransactionRepository transactionRepository) {
super();
this.accountRepository = accountRepository;
this.transactionRepository = transactionRepository;
}


	@Override
	public Accountdto createAccount(Accountdto accountdto) {
	Account account = AccountMapper.maptoAccount(accountdto);
	Account savedAccount= accountRepository.save(account);
	
	
		return  AccountMapper.maptoAccountdto(savedAccount);
	}


	@Override
	public Accountdto getAccountdtoById(Long id) {
		Account account= accountRepository.findById(id).orElseThrow(()-> new AccountException("Account does not exists"));
		 return  AccountMapper.maptoAccountdto(account);
	}


	@Override
	public Accountdto deposit(Long id, double amount) {
		Account account= accountRepository.findById(id).orElseThrow(()-> new AccountException("Account does not exists"));
		
		 
		 double total= account.getBalance()+amount;
		 
		 account.setBalance(total);
		 Account savedAccount = accountRepository.save(account);
		 Transaction transaction = new Transaction(
			        "DEPOSIT",
			        amount,
			        id,
			        java.time.LocalDateTime.now()
			);

			transactionRepository.save(transaction);
		 return  AccountMapper.maptoAccountdto(savedAccount);
		
	}


	@Override
	public Accountdto withdraw(Long id, double amount) {
		
		Account account= accountRepository.findById(id).orElseThrow(()-> new AccountException("Account does not exists"));
		
		if (account.getBalance()< amount) {
			
			throw new RuntimeException("insufficient balance");
			
			
		}
		
		double total= account.getBalance()-amount;
		account.setBalance(total);
		 Account savedAccount = accountRepository.save(account);
		 Transaction transaction = new Transaction(
			        "WITHDRAW",
			        amount,
			        id,
			        java.time.LocalDateTime.now()
			);

			transactionRepository.save(transaction);
		
		return AccountMapper.maptoAccountdto(savedAccount);
	}


	@Override
	public List<Accountdto> getAllAccounts() {
	
		
		List<Account> accounts=  accountRepository.findAll();
		return	accounts.stream().map((account)-> AccountMapper.maptoAccountdto(account))
		.collect(Collectors.toList());
			
		
		
	}


	@Override
	public void deleteAccount(Long id) {
	
	Account	  account= accountRepository.findById(id).orElseThrow(()-> new AccountException("Account does not exists"));
		 
		accountRepository.deleteById(id);
	}


	@Override
	public void transferFunds(TransferFundDto transferFundDto) {

	    Account fromAccount = accountRepository
	            .findById(transferFundDto.getFromAccountId())
	            .orElseThrow(() ->
	                    new RuntimeException("From Account does not exist"));

	    Account toAccount = accountRepository
	            .findById(transferFundDto.getToAccountId())
	            .orElseThrow(() ->
	                    new RuntimeException("To Account does not exist"));

	    if (fromAccount.getBalance() < transferFundDto.getAmount()) {
	        throw new RuntimeException("Insufficient balance");
	    }

	    // deduct money
	    fromAccount.setBalance(
	            fromAccount.getBalance() - transferFundDto.getAmount());

	    // add money
	    toAccount.setBalance(
	            toAccount.getBalance() + transferFundDto.getAmount());

	    accountRepository.save(fromAccount);
	    accountRepository.save(toAccount);
	    
	    Transaction transaction = new Transaction(
	            "TRANSFER",
	            transferFundDto.getAmount(),
	            transferFundDto.getFromAccountId(),
	            java.time.LocalDateTime.now()
	    );

	    transactionRepository.save(transaction);
	}


	@Override
	public Accountdto updateAccount(
	        Long id,
	        Accountdto accountdto) {

	    Account account =
	            accountRepository.findById(id)
	            .orElseThrow(() ->
	                    new AccountException("Account does not exist"));

	    account.setAccountHoldername(
	            accountdto.accountHolderName());

	    account.setBalance(
	            accountdto.balance());

	    Account savedAccount =
	            accountRepository.save(account);

	    return AccountMapper.maptoAccountdto(savedAccount);
	}
	

}
