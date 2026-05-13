# Banking Management System

A Spring Boot based Banking Management System project built using Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, and REST APIs.

## Project Overview

This project is designed to manage basic banking operations such as creating accounts, viewing account details, depositing money, and withdrawing money.

It follows a layered architecture using:

* Controller Layer
* Service Layer
* Repository Layer
* DTO Layer
* Mapper Layer
* Entity Layer

This helps maintain clean code structure and makes the project easier to scale and maintain.

---

## Tech Stack

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* MySQL
* Maven
* Postman
* Git & GitHub

---

## Features Completed Till Now

### Account Management

* Create Account (POST API)
* Get Account By ID (GET API)
* Deposit Money
* Withdraw Money
* Insufficient Balance Validation

---

## API Endpoints

### 1. Create Account

**POST** `/api/accounts`

### Request Body

```json
{
  "accountHolderName": "Sahil",
  "balance": 20000
}
```

---

### 2. Get Account By ID

**GET** `/api/accounts/{id}`

Example:

```text
/api/accounts/1
```

---

### 3. Deposit Money

**PUT** `/api/accounts/{id}/deposit`

---

### 4. Withdraw Money

**PUT** `/api/accounts/{id}/withdraw`

Includes insufficient balance check.

---

## Project Structure

```text
src/main/java
 └── com.bank.Banking.application
      ├── controller
      ├── dto
      ├── entity
      ├── mapper
      ├── service
      └── service.impl
```

---

## Database Configuration

Configured using MySQL in `application.properties`

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/banking_application
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## Learning Highlights

This project helped in understanding:

* REST API development
* DTO vs Entity
* Mapper usage
* Service Layer business logic
* Repository and JPA operations
* Exception handling basics
* GitHub project management

---

## Upcoming Features

* Delete Account
* Transfer Money
* Transaction History
* Global Exception Handling
* Validation
* JWT Authentication
* Swagger Documentation

---

