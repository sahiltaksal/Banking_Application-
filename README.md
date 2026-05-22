# Banking Application

A Spring Boot REST API based Banking Application that allows users to manage bank accounts, perform transactions, and track transaction history.

## Features

### Account Management
- Create Account
- Get Account By ID
- Get All Accounts
- Delete Account

### Transactions
- Deposit Money
- Withdraw Money
- Transfer Funds Between Accounts
- View Transaction History

### Exception Handling
- Global Exception Handling using `@ControllerAdvice`
- Custom Exception (`AccountException`)
- Proper Error Responses

### Database Integration
- MySQL Database
- Spring Data JPA
- Hibernate ORM

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Maven
- Lombok
- REST APIs
- Postman
- Git & GitHub

## Project Structure

```text
src/main/java/com/bank/Banking/application

├── controller
│   └── AccountController
│
├── dto
│   ├── AccountDto
│   ├── TransferFundDto
│   └── TransactionDto
│
├── entity
│   ├── Account
│   ├── Transaction
│   ├── AccountRepository
│   └── TransactionRepository
│
├── mapper
│   ├── AccountMapper
│   └── TransactionMapper
│
├── service
│   ├── AccountService
│   └── impl
│       └── Accountserviceimpl
│
├── exception
│   ├── AccountException
│   ├── ErrorDetails
│   └── GlobalExceptionHandler
│
└── BankingApplication
```

## API Endpoints

### Create Account

```http
POST /api/accounts
```

Request Body:

```json
{
    "accountHolderName":"Sahil",
    "balance":10000
}
```

---

### Get Account By ID

```http
GET /api/accounts/{id}
```

Example:

```http
GET /api/accounts/1
```

---

### Get All Accounts

```http
GET /api/accounts
```

---

### Deposit Money

```http
PUT /api/accounts/{id}/deposit
```

Request Body:

```json
{
    "amount":5000
}
```

---

### Withdraw Money

```http
PUT /api/accounts/{id}/withdraw
```

Request Body:

```json
{
    "amount":2000
}
```

---

### Transfer Funds

```http
POST /api/accounts/transfer
```

Request Body:

```json
{
    "fromAccountId":1,
    "toAccountId":2,
    "amount":3000
}
```

---

### Delete Account

```http
DELETE /api/accounts/{id}
```

---

### Get Transaction History

```http
GET /api/accounts/{id}/transactions
```

Example:

```http
GET /api/accounts/1/transactions
```

Response:

```json
[
  {
    "id":1,
    "transactionType":"DEPOSIT",
    "amount":5000,
    "accountId":1
  },
  {
    "id":2,
    "transactionType":"WITHDRAW",
    "amount":2000,
    "accountId":1
  }
]
```

## Database Configuration

Configure MySQL in:

```properties
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/banking_application
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## Running the Project

Clone Repository:

```bash
git clone https://github.com/sahiltaksal/Banking_Application-.git
```

Move into project:

```bash
cd Banking_Application-
```

Run application:

```bash
mvn spring-boot:run
```

Application starts at:

```text
http://localhost:8080
```

## Future Enhancements

- Thymeleaf Frontend
- Login & Authentication
- Spring Security + JWT
- Swagger Documentation
- PDF Bank Statement
- Email Notifications
- Docker Deployment
- Admin Dashboard

## Author

**Sahil Taksal**

GitHub: https://github.com/sahiltaksal
