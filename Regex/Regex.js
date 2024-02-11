function validateMastercard(cardNumber) {
    // Regular expression for Mastercard
    const mastercardRegex = /^5[1-5][0-9]{14}$/;

    // Check if the input matches Mastercard format
    if (!mastercardRegex.test(cardNumber)) {
        return false;
    }

    // Validate card number using Luhnalgorithm
    if (!luhnCheck(cardNumber)) {
        return false;
    }

    return true;
}

function luhnCheck(cardNumber) {
    let sum = 0;
    let doubleUp = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = +cardNumber[i];

        if (doubleUp) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        doubleUp = !doubleUp;
    }

    console.log("Sum:", sum);
    return sum % 10 === 0;
}

//Validate Credit card number
const cardNumber = "5453796758777878";
if (validateMastercard(cardNumber)) {
    console.log("Valid Mastercard card number.");
} else {
    console.log("Invalid card number.");
}