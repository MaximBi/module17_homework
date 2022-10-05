export function definePrime(num) {
    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime ? `${num} is prime number` : `${num} is not prime number`;
    } else if (num > 1000 || num < 1) {
        result = "Data is not correct";
    }
    return result;
}