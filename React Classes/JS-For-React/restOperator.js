// rest operator
// used when you have a large number of arguments
function test(firstArgument, secondArgument, ...otherArguments) {
  console.log(firstArgument);
  console.log(secondArgument);
  console.log(otherArguments);
}

test("peter", "niketh", "ram", "laxman");
