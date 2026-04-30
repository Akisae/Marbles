let points = 5;

function addPoints(score) { //change the name of this variable
   return score + points; // it now adds the new points to the global variable.
}

console.log(addPoints(2)); // 12 2 + 10
console.log(points); // 5 as the only change to points happens in a function and this calls for the global variable.

//1: 12
//2: 5
//3: the global value wont change since we called for a change inside a function and that uses a separate local variable.
//4: it means that the value inside has the same name as a variable outside, in this scenario we have the points variable that the function uses thats local, and we have the global value points that cannot be accessed directly.
//5: rewritten the code above.