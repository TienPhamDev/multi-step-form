const nextBTN = document.querySelector(".btn-next");
const multiStep = document.querySelector(".multi-step");
const inputName = document.querySelector("#step1 > form > input");
const inputEmail = document.querySelector("#step2 > form > input");
const inputPhone = document.querySelector("#step3 > form >input");
const warningName = document.querySelector("#step1 > h4");
const warningEmail = document.querySelector("#step2 > h4");
const warningPhone = document.querySelector("#step3 > h4");
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
    if (inputName.value === "") {
      warningName.classList.remove("hidden");
    } else {
      warningName.classList.add("hidden");
      nextStep(multiStepChild, "step1", "step2", "66.66%");
    }
  } else if (e.target.className === "btn-next-2") {
    if (inputEmail.value === "") {
      warningEmail.classList.remove("hidden");
    }else {
      warningEmail.classList.add("hidden");
      nextStep(multiStepChild, "step2", "step3", "100%");
    }
    
  } else if (e.target.className=== "btn-submit"){
    if (inputPhone.value === "") {
      warningPhone.classList.remove("hidden");
    }
  }
    else if (e.target.className === "btn-previous-2") {
    if (inputEmail.value !== "") {
      warningEmail.classList.add("hidden");
    }  
    prevStep(multiStepChild, "step2", "step1", "33.33%");
    
  } else if (e.target.className === "btn-previous-3") {
    if (inputEmail.value !== "") {
      warningPhone.classList.add("hidden");
    } 
    prevStep(multiStepChild, "step3", "step2", "66.66%");
  } 
  
});