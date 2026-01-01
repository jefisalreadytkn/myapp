const PIN_CODE = "1234"; // CHANGE THIS

const lock = document.getElementById("lockscreen");
const load = document.getElementById("loading");
const frame = document.getElementById("appframe");

function unlock() {
  const entered = document.getElementById("pin").value;

  if (entered === PIN_CODE) {
    lock.classList.remove("active");
    load.classList.add("active");

    setTimeout(() => {
      load.classList.remove("active");
      frame.style.display = "block";
    }, 1500);
  } else {
    alert("Wrong PIN");
  }
}
