const nextBTN = document.querySelector(".btn-next");
const multiStep= document.querySelector(".multi-step")
const multiStepChild = multiStep.children;
nextBTN.addEventListener("click", () => {
  for (let i = 0; i < multiStepChild.length;i++){
    console.log(multiStepChild[i]);
    
    if (multiStepChild[i].id === "step1") {
      multiStepChild[i].style = "display: none;";
      multiStepChild[i + 1].style = "display: block;";
      const selectProgressBar = document.querySelector(".progress-bar-slide");
      
    }
  }
 });