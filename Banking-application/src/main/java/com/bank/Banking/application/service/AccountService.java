package com.bank.Banking.application.service;

import com.bank.Banking.application.dto.Accountdto;
import com.bank.Banking.application.entity.Account;

public interface AccountService {
	Accountdto createAccount(Accountdto account);

}
