const user = {name: "Sara", score: 10};
const backup = {...user};  // replaced const backup = user; to make a clone instead of a reference.

backup.score = 25;

console.log(user.score);
console.log(backup.score);

// 1: 25
// 2: Backup holds a reference and not a copy so any changes done to either backup or user will have the same result
// 3: Backup hold a reference to the same object so both will result in score = 25;
// 4: ideally when working on features like these you want to make clones as with multiple references any changes made to the original can cause an abundance  of bugs and hard to track issues