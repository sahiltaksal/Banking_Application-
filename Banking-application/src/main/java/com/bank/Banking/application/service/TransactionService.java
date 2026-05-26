package com.bank.Banking.application.service;

import java.util.List;

import com.bank.Banking.application.dto.TransactionDto;

public interface TransactionService {

    List<TransactionDto>
    getTransactionsByAccountId(Long accountId);

}