const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }

  setTimeout(function () {
    dino.classList.remove("jump");
  }, 500);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft > 0 && cactusLeft < 30 && dinoTop >= 140) {
    alert("GAME OVER!!");
  }
});
