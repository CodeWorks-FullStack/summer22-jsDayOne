// console.log('hello from the script file')
// NOTE throw a console log in at the top to make sure it's linked

// DATA TYPES PRIMITIVE
let string = "Hellow"
let string2 = 'I can do this.'
let string3 = `this is another string`

let number = 3
let number2 = -4
let number3 = 0.999999999999

let boolean = true
let boolean2 = false
// NOTE undefined is unknown nothing
let unknown = undefined
// NOTE null is known nothing
let nothing = null

let x = number
x++
console.log('x', x);

// REFERENCE TYPE keep a reference of the original they are tied too
// NOTE arrays store data by a position (INDEX)
let arr = ['hello arr', 5]
console.log(arr[0])

// NOTE objs store data by a 'KEY : VALUE' pair. NOT BY ORDER, there is no order here!
let obj = {this: "hello obj", that: 5}
console.log(obj.this);

let newArr = arr
newArr.push('dude')
console.log('newArr', newArr);

// OPERATORS
// Adding +  /  +=
// Subtracting -  / -=
// Multiplying *  / *=
// Division /  /  /=
// Modulus %  /  %=  (does division and returns remainder  5 % 3 => 2)

// just doing simple math
let a = 5
console.log(a + 5);
console.log(a);
// declaring b and doing math ( b = b + 5)
let b = 5
console.log(b += 5);
console.log(b);

// COMPARISON OPERATORS
// equality ==
// strict equality ===  (checks value and data type)
// NOT equal !=
// greater than >  /  >=
// less than <  /  <=
// OR ||
// AND &&

// FUNCTIONS
function doSomething(){
  console.log('the function ran');
}

function returnSomething(){
  return a + b
}

console.log( returnSomething() );

doSomething()

// SECTION end of examples / start of 'app'

let secretCode = '🦍🦎👨‍🔧🍄🦎🦎🦍'

let yourCode = ''


function gorilla(){
  yourCode += '🦍'
  console.log(yourCode);
  let codeElement = document.getElementById('your-code')
  codeElement.innerText = yourCode
  console.log(codeElement);
}

function monkey(){
  yourCode += '🐒'
  let codeElement = document.getElementById('your-code')
  codeElement.innerText = yourCode
  console.log(yourCode);
}

function plumber(){
  yourCode+= '👨‍🔧'
  let codeElement = document.getElementById('your-code')
  codeElement.innerText = yourCode
  console.log(yourCode);
}

function lizard(){
  yourCode += '🦎'
  let codeElement = document.getElementById('your-code')
  codeElement.innerText = yourCode
  console.log(yourCode);
}

function submit(){
  console.warn('secret', secretCode == yourCode)
  if(secretCode == yourCode){
    window.alert('Hey you are pretty cool!')
    let secretElm = document.getElementById('secret')
    console.log(secretElm);
    secretElm.innerHTML = '<img class="img-fluid" src="https://steamuserimages-a.akamaihd.net/ugc/1660106043876484839/861607B8A7FBFBC7D0EB45AA7DA9C0159E542ED3/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="">'
  } else {
    window.alert('Nope thats wrong, bowser is a dragon turtle, look it up nerd.')
    window.close()
  }
}

function clearCode(){
  // NOTE debugger stops the code so you can run it line by line and watch it evaluate
  // debugger
  yourCode = ''
  let codeElement = document.getElementById('your-code')
  codeElement.innerText = yourCode
}

// SECTION FUNCTIONS WITH PARAMETERS
function addCode(char){
  debugger
  yourCode += char
  let codeElement = document.getElementById('your-code')
  codeElement.innerText = yourCode
  console.log(yourCode);
}





