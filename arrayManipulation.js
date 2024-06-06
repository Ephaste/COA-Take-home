function manipulation(arr, target) {
    let sum = 0;
    let start = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        //If sum is bigger than target and we do have elements more than one in tha array
        while (sum > target && start <= i) {
            sum -= arr[start];
            start++;
        }
        
        // Check if we have found the target sum
        if (sum === target) {
            return true;
        }
    }
    
    return false;
}

// Example usage
let arr = [4, 2, 7, 1, 9, 7,5];
let target = 6;
console.log(manipulation(arr, target));  // Output: true
