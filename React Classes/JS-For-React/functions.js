/********Function 1**********/
function addTraditional(a, b) {
  return a + b;
}
console.log(addTraditional(2, 3));

/*********Function 2*****************/
const addTraditional2 = function (a, b) {
  return a + b;
};
console.log(addTraditional2(3, 4));

/**********One Line Arrow Function**********************/

const add = (a, b) => a + b;
console.log(add(2, 3));

const subtract = (a, b) => {
  console.log("Subtraction function");
  return a - b;
};
console.log(subtract(10, 4));

/**********Mostly used modern use case***********************/

ids = [1, 2, 3, 4];

ids.forEach((id) => {
  id++;
  console.log(id);
});

/**********Functions as declarations or expressions*********************/

test(); // we cannot call a function that gets created by an expression before it is initialized or declared

// we get an error
const test = () => {
  console.log(test);
};
