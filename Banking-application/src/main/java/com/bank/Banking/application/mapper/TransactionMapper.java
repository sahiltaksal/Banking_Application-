package com.bank.Banking.application.mapper;

import com.bank.Banking.application.dto.TransactionDto;
import com.bank.Banking.application.entity.Transaction;

public class TransactionMapper {

    public static TransactionDto mapToTransactionDto(Transaction transaction) {
        return new TransactionDto(
                transaction.getId(),
                transaction.getTransactionType(),
                transaction.getAmount(),
                transaction.getAccountId(),
                transaction.getCreatedAt()
        );
    }

    public static Transaction mapToTransaction(TransactionDto transactionDto) {
        return new Transaction(
                transactionDto.getTransactionType(),
                transactionDto.getAmount(),
                transactionDto.getAccountId(),
                transactionDto.getCreatedAt()
        );
    }
}