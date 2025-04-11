const buttonsEl = document.querySelectorAll("button")

const inputField = document.getElementById("result")


for(let i=0;i<buttonsEl.length;i++){
    buttonsEl[i].addEventListener("click", ()=>{
       const buttonVlaue = buttonsEl[i].textContent;
       if(buttonVlaue=== "C"){
        clearResult()
       }
       else if(buttonVlaue==="="){
        calculate();
       }
       else{
        appendValue(buttonVlaue)
       }
       
    })
}
function clearResult(){
inputField.value = "";
}
function calculate(){
inputField.value = eval(inputField.value)

}
function appendValue(buttonVlaue){
  inputField.value += buttonVlaue
}