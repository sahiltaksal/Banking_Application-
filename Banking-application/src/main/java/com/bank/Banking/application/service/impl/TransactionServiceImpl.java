package com.bank.Banking.application.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bank.Banking.application.dto.TransactionDto;
import com.bank.Banking.application.entity.Transaction;
import com.bank.Banking.application.entity.TransactionRepository;
import com.bank.Banking.application.mapper.TransactionMapper;
import com.bank.Banking.application.service.TransactionService;

@Service
public class TransactionServiceImpl
        implements TransactionService {

    private TransactionRepository transactionRepository;

    public TransactionServiceImpl(
            TransactionRepository transactionRepository) {

        this.transactionRepository =
                transactionRepository;
    }

    @Override
    public List<TransactionDto>
    getTransactionsByAccountId(Long accountId) {

        List<Transaction> transactions =
                transactionRepository
                .findByAccountId(accountId);

        return transactions.stream()
                .map(TransactionMapper
                        ::mapToTransactionDto)
                .collect(Collectors.toList());
    }
}