function fibonacci(num) {
	if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    // Initialize the first two Fibonacci numbers
    let a = 0, b = 1;

    // Compute Fibonacci numbers using iterative approach
    for (let i = 2; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;

}

module.exports = fibonacci;
