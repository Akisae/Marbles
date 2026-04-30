//#region Old code
let a = "red";  // needs renaming to either Light
let b = 0;      // b is a timer and needs renaming.  

function x() {  // terrible function name.
  if (a == "red") {
    console.log("STOP");
    b = b + 1;

    if (b > 2) {
      a = "green";
      b = 0;
    }
  } else {
    if (a == "green") {
      console.log("GO");
      b = b + 1;

      if (b > 3) {
        a = "yellow";
        b = 0;
      }
    } else {
      if (a == "yellow") {
        console.log("SLOW");
        b = b + 1;

        if (b > 0) {
          a = "red";
          b = 0;
        }
      } else {
        console.log("BROKEN");
        a = "red";
        b = 0;
      }
    }
  }
}
//#endregion
//#region New Code
//less messy code
//All CAPS AS WE WONT CHANGE THE VALUES!
const STATES = { // a was changed to this to improve clarity
  RED: "red",
  GREEN: "green",
  YELLOW: "yellow",
};
//All CAPS AS WE WONT CHANGE THE VALUES!
const DURATIONS = { // values for b / timer.
  red: 3,
  green: 4,
  yellow: 1,
};
//All CAPS AS WE WONT CHANGE THE VALUES!
const MESSAGES = { //simulating the red -> green -> yellow -> red with messages.
  red: "STOP",
  green: "GO",
  yellow: "SLOW",
};

let currentState = STATES.RED;
let timer = 0;  // this was b.

function updateTrafficLight() {
  console.log(MESSAGES[currentState]);

  timer++;

  if (timer >= DURATIONS[currentState]) {
    currentState = getNextState(currentState);
    timer = 0;
  }
}

function getNextState(state) {
  switch (state) {
    case STATES.RED:
      return STATES.GREEN;
    case STATES.GREEN:
      return STATES.YELLOW;
    case STATES.YELLOW:
      return STATES.RED;
    default:
      return STATES.RED;
  }
}


for (let i = 0; i < 8; i++) {
  updateTrafficLight();
} //simulation of lights.
//#endregion