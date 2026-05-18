package com.bank.Banking.application.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String transactionType;
    private double amount;
    private Long accountId;
    private LocalDateTime createdAt;

    public Transaction() {
    }

    public Transaction(String transactionType, double amount, Long accountId, LocalDateTime createdAt) {
        this.transactionType = transactionType;
        this.amount = amount;
        this.accountId = accountId;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
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