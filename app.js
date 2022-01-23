const btn = document.querySelector(".genstring");
const copyBtn = document.querySelector(".copystring");
const clearBtn = document.querySelector(".clearstring");
const output = document.querySelector(".output");
const firstInput = document.querySelector("#input1");
const secondInput = document.querySelector("#input2");
const thirdInput = document.querySelector("#input3");

let val1, val2, val3;
btn.addEventListener("click", () => {
  val1 = firstInput.value;
  val2 = secondInput.value;
  val3 = thirdInput.value;

  str = `What I did: ${val1}\nWhat I will do: ${val2}\nBlockers: ${val3}`;

  output.innerHTML = str;
});

copyBtn.addEventListener("click", () => {
  output.select();
  navigator.clipboard.writeText(output.value);
});

clearBtn.addEventListener('click',()=>{
    firstInput.value=""
    secondInput.value="";
    thirdInput.value="";
    output.value="";

})
