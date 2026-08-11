let n = 17;
let prime = true;

if (n < 2) {
    prime = false;
}

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        prime = false;
        break;
    }
}

console.log(prime ? "Prime" : "Not Prime");
