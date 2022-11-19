/* let counter = document.querySelector(".counter");

let count = 1;

setInterval(() => {
  if (count < 75) {
    count++;
    counter.innerText = count;
  }
}, 60);
 */

let count = document.querySelectorAll(".counter");
let time = 300;

count.forEach((counter) => {
  let updateCount = () => {
    let target = counter.getAttribute("data-target");
    let anCount = counter.innerText;
    let increment = target / time;

    if (anCount < target) {
      counter.innerText = Math.ceil(anCount + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

let healthCondition = document.querySelector(".health");

setTimeout(() => {
  healthCondition.innerText = "Congratulation, You are fit.";
}, 2000);
