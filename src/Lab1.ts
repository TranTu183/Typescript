function rectangleInfo(width: number, height: number) {
    const Chuvi= (width + height) * 2;
    const Dientich = width * height;

    return {
        Chuvi,
        Dientich
    };
}


function sumNumbers(...numbers: number[]): number {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}


function countCharacter(str: string, char: string): number {
    let count = 0;

    for (let c of str) {
        if (c === char) {
            count++;
        }
    }

    return count;
}


function isPrime(n: number): boolean {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}



console.log(rectangleInfo(4, 6));    
console.log(sumNumbers(1, 2, 3, 4));  
console.log(countCharacter("hello", "l"));
console.log(isPrime(11));
