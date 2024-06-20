// var a = 'lion';
// var b = 'cheeta';
// a = 'elephant';
// console.log(a)

// // let a = 'king';

// console.log(b);
// // let b = 'prince';
// let c = 'queen';

// function jk() {
// 	let z = 'Deer';
// 	console.log(z);
// }
// jk();

// function go() {
// 	return ":P";
//   }
// function f(a = go()) {
// 	console.log('kjskdfjk')
// 	console.log(a);

//   }

//   f()
// function test() {
//     {
//       let a = 10;
//       const b = 5;
// 	  console.log(a, b);
//     }

//     try{
//       console.log("We will get error when we try to access a  b")
//       console.log(a, b);
//     } catch(e) {
//       console.log(e.message);
// 	//   console.log(window.e.message);
//     }
// }
// test();

// const vehicleOne = {
// 	brand: 'Ford',
// 	model: 'Mustang',
// 	type: 'car',
// 	built: ' Alluminium',
// 	made: 'General Auto',
// 	year: 2021,
// 	color: 'red',
// 	registration: {
// 	  city: 'Houston',
// 	  state: 'Texas',
// 	  country: 'USA'
// 	}
//   }

//   const result = 'my' + ' ' + vehicleOne.type + ' ' +  'Name is' +  ' ' + vehicleOne.brand +  ' ' + vehicleOne.model +  ' ' + vehicleOne.year +  " " +vehicleOne.registration.country;
//   console.log(result)

// function result({brand,model,type,year,color,registration:{city,state,country}}){

// 	const outPut = 'my '+ brand + ' new ' + model + type + "  which was launched in  " + year + " colored " + color + "registred in  " + city + ' '+state  + ' '+ country;
// 	console.log(outPut);

// }

// result(vehicleOne);

// const vehicleTwo = {
// 	brand: 'Tesla',
// 	model: 'S3',
// 	type: 'car',
// 	made: 'General Motors',
// 	year: 2021,
// 	color: 'Black',
// 	registration: {
// 	  city: 'Guntur',
// 	  state: 'Andhra Pradesh',
// 	  country: 'India'
// 	}
//   }

// console.log(this);

// const  {brand,model} = vehicleOne;
//   const vehicleThree = {...vehicleOne, ...vehicleTwo}
//   const   {brand,model} = vehicleOne;
//   console.log(vehicleThree);
//   console.log(brand,model);

//  var x;
//  let y;
// const z;

// function getPerson() {
//     return person = {
// 		firstName: 'John',
// 		lastName: 'Doe',
// 		middleName: 'C.',
// 		currentAge: 28
// 	};
// }

// let { firstName, lastName } = getPerson() || {};

// console.log(firstName, lastName);

// Class Components*****************************************
// const counter = {
//     count: 0,
//     next() {
//         return ++this.count;
//     },
//     current() {
//         return this.count;
//     }
// };

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.current());

// const concat = (separator) => {
//     let args = Array.prototype.slice.call(arguments, 1);
//     return args.join(separator);
// }

// function concat(separator) {
//     let args = Array.prototype.slice.call(arguments, 1);
//     return args.join(separator);
// }
// console.log(concat(1,2,3,4,5));

// const greeting = document.querySelector('#greeting');
// const username = document.querySelector('#username');
// username.addEventListener('keyup', () => {
//   greeting.textContent = 'Hello ' + this.value;
// });

// let r = foo();
// console.log(r());
// var x = 10;
// function foo() {
// var y = 20;
// function bar() {
// var z = 30;
// return x + y + z;
// }

// return bar;
// }

// function User() {
// (this.name = 'John Doe'),
// (this.sayUser = function () {
// console.log(this.name);
// function innerFunction() {
// console.log(this.name);
// }
// innerFunction();
// });
// }
// let name = new User();
// name.sayUser();

// const parent = {
//   mom_name: "Samantha Quinn",
//   mother: function () {
//     return `${this.mom_name} is my mother.`;
//   },
// };
// console.log(parent.mother());

// ad code
// let sum = 0;
// for (let i = 0; i <= 9; i++, sum += i);
// console.log(sum);

// const obj1 = {
// 	name: 'venkatesh',
// 	age: 25
//   };

//   const {
// 	name: fName,
// 	age: pAge
//   } = obj1;

// console.log(pAge,fName);
// console.log(obj1)

// function isTruthy(val){
//     if(val){
//         console.log(val + ' is Truthy');
//     }else{
//         console.log(val + ' is falsy');
//     }
// }

// console.log(isTruthy (true))
// console.log(isTruthy ({}))
// console.log(isTruthy ([]))
// console.log(isTruthy (42))
// console.log(isTruthy ("0"))
// console.log(isTruthy ("false"))
// console.log(isTruthy (new Date()))
// console.log(isTruthy (-42))
// console.log(isTruthy (12n))
// console.log(isTruthy (3.14))
// console.log(isTruthy (-3.14))
// console.log(isTruthy (Infinity))
// console.log(isTruthy (-Infinity))

// let arr1 = [2, 3, 4, 5, 7];

// // let arr2 = arr1.unshift(1,8);
// let arr2 = arr1.unshift(1)

// console.log(arr2);


// function arrange(){
// 	let arr1 = [2,3,4,5,7];
// 	let arr3 = arr1.unshift(arr1.pop());
// 	console.log(arr3);
// 	return arr3;
// }
// arrange();

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}
