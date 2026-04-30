//#region -------------------------------A-------------------------------
function calcTotal(prices){
    let total = 0;
    for(let i =0; i <= prices.length; i++){ //let i = 1? why skip index 0 ?
        total += prices[i]; // original had a typo here price instead of prices
    }
    return total.toFixed(2) //returns a string nor a number
}
//#endregion
//#region B
let highScore = 0;
let players = [];

function updateScores(name,points){
    players.push(name, points);  //this does not include points added ,points to fix it.

    if(points > highScore)
        highScore = points;

    return name + "now has " + points; // += 10 is a syntax error here 
}

console.log(updateScores("Tony",40));
console.log(updateScores("Tony",50));
console.log(updateScores("Rony",150));
console.log(players);
console.log(highScore);
//#endregion
//#region C
let presentCount = 0        //no const here as this number changes
const defaultStatus = {present:false};

function registerAttendance(students){
    return students.map((student)=>{
        if(!student.status){
            student.status = defaultStatus;
        }
        if((student.status.present)){ //having this say = true, set everyone to be present using it without fixes the bug.
            presentCount ++;
            return student.name + " is present";  // Original location had everyone listed as present and we know that happens once a blue moon so has to be a bug.
        }else{
            return student.name + " is absent"; // added a absent message.
        }

        
    })};

    const students = [
        { name: "Ava"},
        { name: "Noah", status: { present: false }},
        { name: "Mia", status: { present: true}},
    ];

    console.log(registerAttendance(students));
    console.log(presentCount);
    console.log(students);
    
//#endregion