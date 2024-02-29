const nextBTN = document.querySelector(".btn-next");
const multiStep= document.querySelector(".multi-step")
const multiStepChild = multiStep.children;
multiStep.addEventListener("click", (e) => {
  if (e.target.className === "btn-next") {
    for (let i = 0; i < multiStepChild.length; i++) {
      if (multiStepChild[i].id === "step1") {
        multiStepChild[i].style.display = "none";
        multiStepChild[i + 1].style.display = "block";
        const selectProgressBar = document.querySelector("#step2 > .progress-bar > .progress-bar-slide");
        selectProgressBar.style.width = "66.66%";
      }
    }
  } else if (e.target.className === "btn-next-2") {
    for (let i = 0; i < multiStepChild.length; i++) {
      if (multiStepChild[i].id === "step2") {
        multiStepChild[i].style.display = "none";
        multiStepChild[i + 1].style.display = "block";
        const selectProgressBar = document.querySelector("#step3 > .progress-bar > .progress-bar-slide");
        selectProgressBar.style.width = "100%";
      }
    }
  } else if (e.target.className === "btn-previous-2") {
    for (let i = 0; i < multiStepChild.length; i++) {
      if (multiStepChild[i].id === "step2") {
        multiStepChild[i].style.display = "none";
        multiStepChild[i - 1].style.display = "block";
        const selectProgressBar = document.querySelector("#step1 > .progress-bar > .progress-bar-slide");
        selectProgressBar.style.width = "33.33%";
      }
    }
  } else if (e.target.className === "btn-previous-3") {
    for (let i = 0; i < multiStepChild.length; i++) {
      if (multiStepChild[i].id === "step3") {
        multiStepChild[i].style.display = "none";
        multiStepChild[i - 1].style.display = "block";
        const selectProgressBar = document.querySelector("#step1 > .progress-bar > .progress-bar-slide");
        selectProgressBar.style.width = "66.66%";
      }
    }
  }
});