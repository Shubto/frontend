function checkPalindrome(number) {
    // Convert the number to a string
    let strNumber = number.toString().trim();

    // Check if the input is a valid number
    if (isNaN(strNumber) || strNumber === "") {
        return "Please enter a valid number.";
    }

    // Reverse the string
    let reversedStr = strNumber.split('').reverse().join('');

    // Check if the original string and the reversed string are the same
    if (strNumber === reversedStr) {
        return number + " is a palindrome number.";
    } else {
        return number + " is not a palindrome number.";
    }
}

// Example usage:
console.log(checkPalindrome(121)); // Output: 121 is a palindrome number.
console.log(checkPalindrome(123)); // Output: 123 is not a palindrome number.
console.log(checkPalindrome("  1221  ")); // Output: 1221 is a palindrome number.
console.log(checkPalindrome("abc")); // Output: Please enter a valid number.
