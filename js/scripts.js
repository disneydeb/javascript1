

// var myFunc = function() {
//   console.log('You fired your anonymous function');
// };
//
// myFunc();
//
// function myMagicFunction(a1, a2,) {
//
// };
// myMagicFunction();
//
//
// var todos = [];
// var todoOne = prompt("what do you want to do this weekend?");
// var todoTwo = prompt("What else do you want to do this weekend?");
// var todoThree = prompt("What is a third thing you want to do this weekend?");
//
// todos.push(todoOne, todoTwo, todoThree);
//
// var todoWithDays = [];
// for(let i = 0; i < todos.length; i++) {
//   var due = prompt('What day do you want to ge ${todos[i]} done?', 'Please use this format: day/month/year;');
//   due = new Date(due);
//   todoWithDays.push([todos[i], due]);
// }
//
// var sortedWithIndices = [];
// let j = 0;
// var now = new Date().getTime(); //Converts JS Date object to ms
// while (j < todosWithDays.length) {
//   let oneDay = 24 * 60 * 60 * 1000;//hours*minutes*seconds*milleseconds
//   var diffDays = Math.round((todosWithDays [j] [1].getTime() - now)/oneDay);
//   sortedWithIndices.pursh([diffDays, todosWithDays[j]]);
//   j++
// }
//
// sortedWithIndices.sort();
//
// console.log(sortedWithIndices[sortedWithIndices.length - 1][1], 'will take the longest');
//
// let n = 0;
//
// do{
//   if(n != sortedWithIndices.length - 1) {
//     sortedWithIndices[n][1].push("done");
//   }
// n++
// } while(n < sortedWithIndices.length);
//
// let alertArr = [];
// for(let i = 0; i < sortedWithIndices.length; i++) {
//   if(sortedWithIndices[i][1].indexOf('done') !== -1) {
//     alertArr.push(sortedWithIndices[i][1]);
//    }
//   }
// const dogAge = prompt("How od is your dog?", 4)
//
// function dogYears(age) {
//   parseInt(age);
//   if(isNaN(age)) {
    //if the user gives me a non-number...
//   dogYear(promp('Nah, for real...NUMBER', '10'));
// } else {
//   alert(age *= 7);  //this is this age = age * 7
//   }
// }
// dogYears(dogAge);

// //method
// var myString = "lalala"
// myString.toUpperCase(); //.toUpperCase() is the method myString is the object



//This is the lifetime supply problem
// function calcLifetimeSupply(age, perDay) {
//  return (80 - age) * (365 * perDay);
//  }
//
//   var supplyOf = prompt("What do you want a lifetime supply of?", 'hamburgers');
//   var age = prompt("How old are you?");
//   var daily = prompt("How much do you use per day?");
//   var lifeTime = calcLifetimeSupply(age, daily);
//  alert(`you will need ${lifeTime} ${supplyOf} to last until you're 80.`);

//this is the dog year problem
// function getDogAge(humanYears){
//   var dogAge = (humanYears * 7);
//   return dogAge;
// }
//
// var humanYears = prompt("How old is your dog in human years?");
// var dogYears = getDogAge(humanYears);
// alert(`Your dog is ${dogYears} in dog years`);


//
// var num = prompt("Give me a number");
//
// function sqr(n) {
//   if(!isNaN(parseInt(n))){
//     console.log(Math.pow(n, 2));
//     return Math.pow(n, 2);
//   } else {
//     alert(NaN);
//     var  newNum = prompt('Give me a different number');
//     sqr(newNum);
//   }
// }
//
// sqr(num);
//
// var stringy = prompt('give me a sentence');
// function takeAString(s) {
//   s = s.toString();
//   let newStr = s.charAt(0).toUpperCase() = s.slice(1);
//   if(s.charAt(s.length -1) === '.') {
//     console.log(newStr);
//   } else {
//     newStr += '.';
//   }
// }
//
// function flipHalves(a) {
//   var index = Math.round(a.length / 2);
//   return a.substring(index) + a.slice(0, index);
// }
//
// function isPalindrome(s) {
//   var reverse = s.split('').reverse().join('');
//   if(s === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// var  getElementByTagName;
// var  getElementByClassName;
// var  getElementById;
// var  querySelector;
// var  querySelectorAll;

// for (let i = 0; i <=100; i++) {
//   if(i % 3 === 0 && i % 5 ===0) {
//   console.log('FizzBuzz');
//   } else if(i % 3 ===0){
//     console.log('Fizz');
//   else if(i % 3 ===0){
//
//   } else if(i %  5 ===0) {
//     console.log('Buzz');
  // }

// const orderForm = document.forms.order;
//
// var submitBtn = orderForm.submit;
//
// document.addEventListener('submit',
// function(e) {
//   e.preventDefault();
  //validation, verification
// })

var checkScope = function() {
  alert('Hi, ${this.name}, we have your girlscout cookies');
    console.log(this);
}
var name = 'Peter';
//
// function wrapLog() {
//     logThis();
// }
// wrapLog();

var obj = {
  a: checkScope
}

obj.a();

var user = {
  a: checkScope,
  name: 'Ryeker',
  password:  "kewlkidd08",
  lastLogin: new Date ()
}

user.a();
