console.log("JS file connected");

const orangesvg = document.querySelector("#Orange");
console.log(orangesvg);

function logID() {
    console.log("User Clicked On:", this.id)
}

orangesvg.addEventListener("click", logID);