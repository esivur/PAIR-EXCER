//easy 1
function splitOddAndEven(numbers) {
    let odd = [];
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
      } else {

        odd.push(numbers[i]);
      }
    }

    const returnObject = {
      odd,
      even,
    };

    return returnObject;
  }

  console.log(splitOddAndEven([2,4,7,11,15,16]));

  // easy 2  
  function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
    function sortPrime(primeArray) {
      let prime = [];
      let notPrime= [];
  
      for (let number of primeArray) {
        if(isPrime(number)){
          prime.push(number);
          
        }else {
          notPrime.push(number);
        }
      } 
       // create an object with the prime and not prime array in it
      const returnObject = {
        notPrime,
        prime,
      };
  
      return returnObject;
    }
    console.log(sortPrime([25,100,, 3, 7]));




  // medium 1 
  var findVowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){
        if(letter === vowels[i]){
            return ("This is a vowel");
         }
    }

    return ("This is not a vowel");

};
console.log(findVowel("o"));
console.log(findVowel("p"));

// medium 2
function compare (a, b) {
    y = a.split("").sort();
    z = b.split("").sort();
    for (i=0; i<y.length; i++) {
      if(y.length===z.length) {
        if (y[i]===z[i]){
          console.log(a + " and " + b + "are anagrams!");
          break;
        }
        else {
          console.log(a + " and " + b + " aren't anagrams.");
          break;
        }
      }
      else {
        console.log(a + " has a different amount of letters than " + b);
      }
      break;
    }
  }
  
  compare("arc", "car");
  
  compare("pencil", "papers");

// medium 3



// medium 4
  class car{
    constructor(make,model,year,mileage){
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
    }
  
    driveToWork(){
      console.log(`Old Mileage: ${this.mileage}`)
      this.mileage += 33;
      console.log(`New Milage: ${this.mileage}`)
    }
  
  
    driveAroundTheWorld(){
      console.log(`Old Mileage: ${this.mileage}`)
      this.mileage += 24000;
      console.log(`New Milage: ${this.mileage}`)
    }
  
    runErrands(){
      console.log(`Old Mileage: ${this.mileage}`)
      this.mileage += 30;
      console.log(`New Milage: ${this.mileage}`)
    }
  }
  let c1 =new car("Toyota", "MR2", "1992", 381);
c1.driveAroundTheWorld();

c1.runErrands();

c1.driveToWork();