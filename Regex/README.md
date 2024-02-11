# Mastercard Number Validator

## Overview

This JavaScript program includes a function `validateMastercard` to validate a Mastercard credit card number and a helper function `luhnCheck` to perform the Luhn algorithm check.

## Functionality

### 1. `validateMastercard(cardNumber)`

This function takes a string `cardNumber` as input and returns `true` if the input matches the Mastercard format and passes the Luhn algorithm check; otherwise, it returns `false`.

#### Parameters:

- `cardNumber`: A string representing the credit card number to be validated.

#### Return Value:

- `true` if the input matches the Mastercard format and passes the Luhn algorithm check; otherwise, `false`.

### 2. `luhnCheck(cardNumber)`

This function performs the Luhn algorithm check on the given credit card number.

#### Parameters:

- `cardNumber`: A string representing the credit card number to be checked using the Luhn algorithm.

#### Return Value:

- `true` if the Luhn algorithm check passes; otherwise, `false`.

## Usage

To use the `validateMastercard` function to validate a Mastercard credit card number, you can call it with the credit card number as the argument. For example:

```javascript
const cardNumber = "5453796758777878";

if (validateMastercard(cardNumber)) {
    console.log("Valid Mastercard card number.");
} else {
    console.log("Invalid card number.");
}
