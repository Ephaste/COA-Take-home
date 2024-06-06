function transformString(str) {
    const length = str.length;
    
    if (length % 15 === 0) {
        // If length is divisible both 3 and 5 sting is reversed then characters are changed into codes
        str = str.split('').reverse().join('');
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        // If length is divisible by 5, replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If length is divisible by 3, reverse the string
        return str.split('').reverse().join('');
    } else {
        // Otherwise, return the string as is
        return str;
    }
}

// Example usage
console.log(transformString("abcdefghilkmnop"));   //112 111 110 109 107 108 105 104 103 102 101 100 99 98 97 Both operations
console.log(transformString("abcde")); //97 98 99 100 101 => Changed into codes  
console.log(transformString("abc"));   //transformation