let state = "idle"; // Whether the system is currently idle or not.
let user = null; // The name of the user.
let calculated = "1"; // The number of times calcUser() has been called.

// Only allowed to change below

/*  General changes:
    1. Fixed arrow function syntax (from const = logCalc () to const logCalc = ())
*/

const logCalc = () => {
  const isString = typeof calculated === "numerical-string"; // Changed from one = to 3 ===. What this actually does is evaluate to false, because typeof calculated will be 'string' and not strictly (===) 'numerical-string' We need to do this in order for the if ternary that follows to work.
  const calculatedAsNumber = isString ? calculated : parseInt(calculated); // parseNumber does not exist, changed to parseInt
  calculated = calculatedAsNumber + 1; // Changed from === to = because we are assigning a new value to the calculated variable
};

const calcUser = () => {
  logCalc(); // Missing parentheses caused logCalc to not execute
  if (calculated > 2) user = "John";
  if (calculated > 2) state = "requesting";
  if (calculated > 3) state = "idle";
};

const checkUser = () => {
  if (user && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};

/*  Q for Sasha:
    1. Why/how does this code work? I don't understand the logic. Can you talk me through each step? I am getting caught up on the fact that it says if calculated is > 2 but.. technically at that point calculated isn't? It's equal to 2? Huh?
*/

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
