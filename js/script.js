const nextBTN = document.querySelector(".btn-next");
const multiStep= document.querySelector(".multi-step")
const multiStepChild = multiStep.children;
function nextStep(multiStep,StepId,nextStepID,changeProgress) {
  for (let i = 0; i < multiStep.length; i++) {
    if (multiStep[i].id === StepId) {
      multiStep[i].style.display = "none";
      multiStep[i + 1].style.display = "block";
      const selectProgressBar = document.querySelector(`#${nextStepID} > .progress-bar > .progress-bar-slide`);
      selectProgressBar.style.width = changeProgress;
    }
  }
};
function prevStep(multiStep,StepId,prevStepID,changeProgress) {
  for (let i = 0; i < multiStep.length; i++) {
    if (multiStep[i].id === StepId) {
      multiStep[i].style.display = "none";
      multiStep[i - 1].style.display = "block";
      const selectProgressBar = document.querySelector(`#${prevStepID} > .progress-bar > .progress-bar-slide`);
      selectProgressBar.style.width = changeProgress;
    }
  }
 };
multiStep.addEventListener("click", (e) => {
  if (e.target.className === "btn-next") {
    nextStep(multiStepChild,"step1","step2","66.66%");
  } else if (e.target.className === "btn-next-2") {
    nextStep(multiStepChild,"step2","step3","100%");
  } else if (e.target.className === "btn-previous-2") {
    prevStep(multiStepChild,"step2","step1","33.33%");
  } else if (e.target.className === "btn-previous-3") {
    prevStep(multiStepChild,"step3","step1","66.66%");
  }
});