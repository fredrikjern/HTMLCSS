let button = document.getElementById("btn");
let ghost = document.getElementById("ghostId");

function randomNumber() {
    let random = Math.floor(Math.random() * 10) + 1;
    return random
}
function animation() {
  let random = randomNumber();
  console.log("random (animation körs) :" + random);
  let a = parseInt(getComputedStyle(ghost).top.replace(/[^\d.-]/g, ""));
  console.log(a + " AAAAA");
  if ((a + random) < 300) {
    ghost.style.top = `${((a + random) / 300) * 100}%`; 
    ghost.style.left = `${((a + random) / 300) * 100}%`;
    console.log(("(a + random) / 300) * 100): "(a + random) / 300) * 100) +
          "  inne i IFen";
    console.log("a+random iff: " + (a + random));
    } else {
      ghost.style.top = `${((a - random * 5) / 600) * 100}%`;
      console.log("a = " + a);
      console.log("random = " + random);
      console.log(((a - random * 5) / 300) * 100+ " : a-random*5 ");
      console.log("nu försökte jag smita");
      console.log(a - random + "a-random");
    }
}
button.addEventListener("click", () => {
    let i = 0;
    while (i <= 10) {
        animation();
        setTimeout(() => {
          animation();
        }, 2500*i);
        i++;
    }

});
