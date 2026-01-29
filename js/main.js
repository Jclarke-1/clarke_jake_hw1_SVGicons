console.log("JS file connected");

// const orangesvg = document.querySelector("#Orange");
// console.log(orangesvg);

// function logID() {
//     console.log("User Clicked On:", this.id)
// }

// orangesvg.addEventListener("click", logID);

const orangesvg = document.querySelector("#Orange");
const grapefruitsvg = document.querySelector("#grapefruit");
const passionfruitsvg = document.querySelector("#passionfruit");
const pineapplesvg = document.querySelector("#pineapple");
const strawberrysvg = document.querySelector("#strawberry");
const watermelonsvg = document.querySelector("#Watermelon");

function logID() {
    console.log(this.id);
}

orangesvg.addEventListener("click", logID);
grapefruitsvg.addEventListener("click", logID);
passionfruitsvg.addEventListener("click", logID);
pineapplesvg.addEventListener("click", logID);
strawberrysvg.addEventListener("click", logID);
watermelonsvg.addEventListener("click", logID);