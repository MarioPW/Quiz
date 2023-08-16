export class Series {
  constructor(number) {
    this.number = number;
  }
  // Private methods
  isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }

  //Public methods: Here, any function that generates series goes. 
  
  evenNumbers() {
    const evenList = [];
    for (let i = 2; i <= this.number; i += 2) {
      evenList.push(i);
    }
    return evenList;
  };
  divisors() {
    if (this.number < 100000000) {
    const divisorsList = [];
    for (let i = 1; i <= this.number; i++) {
      if (this.number % i === 0) {
        divisorsList.push(i);
      }
    }
    return divisorsList;
  } else {
    return ["Sorry... This number is toooo big for me..."];
  }
  };
  isPalindrome() {
    const numberString = this.number.toString();
    const reversedNumber = numberString.split('').reverse().join('');
    if(numberString === reversedNumber){
      return ["Yes! This number is palindrome!"];
      } else {
        return ["No... This number is npt palindrome."]
      }
  };
  generatePrimeSeries() {
    const primes = [];
    let num = 2;  
    while (num <= this.number) {
      if (this.isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  }
  fibonacci() {
    if (this.number < 1477) {
      let a = 1;
      let b = 0;
      const result = [];
      for (let i = 0; i < this.number; i++) {
        const c = a + b;
        a = b;
        b = c;
        result.push(c);
      }
      return result;
    } else {
      return ["Sorry... This number is toooo big for me..."];
    }
  };
  findPrimePairs() {
    const pairs = [];

    for (let i = 2; i <= this.number / 2 && pairs.length < 10; i++) {
      const num1 = i;
      const num2 = this.number - i;

      if (this.isPrime(num1) && this.isPrime(num2)) {
        pairs.push([num1, num2]);
      }
    }
    if (pairs.length == 0) {
      return [
        "There are no pairs of prime numbers that, when added, result in " +
          this.number,
      ];
    } else {
      return pairs;
    }
  }
  serie(methodName) {
    if (typeof this[methodName] === "function") {
      return this[methodName](this.number);
    } else {
      throw new Error("Invalid method name");
    }
  }
}
