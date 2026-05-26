package com.bank.Banking.application.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bank.Banking.application.dto.TransactionDto;
import com.bank.Banking.application.service.TransactionService;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:5173")
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(
            TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/{accountId}")
    public ResponseEntity<List<TransactionDto>>
    getTransactionsByAccountId(
            @PathVariable Long accountId) {

        return ResponseEntity.ok(
                transactionService
                        .getTransactionsByAccountId(accountId)
        );
    }
}