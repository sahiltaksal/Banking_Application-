package com.bank.Banking.application.dto;

import java.time.LocalDateTime;

public class TransactionDto {

    private Long id;
    private String transactionType;
    private double amount;
    private Long accountId;
    private LocalDateTime createdAt;

    public TransactionDto() {
    }

    public TransactionDto(Long id, String transactionType, double amount,
                          Long accountId, LocalDateTime createdAt) {
        this.id = id;
        this.transactionType = transactionType;
        this.amount = amount;
        this.accountId = accountId;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}