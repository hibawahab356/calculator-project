let btns = document.querySelectorAll(".box")
let userInput = document.querySelector("#data")



for(let i = 0;i<btns.length; i++) {
btns[i].addEventListener("click",(event)=>{
  
userInput.value += event.target.innerText



})
    }



    // result 


    let result = document.querySelector("#result")
    result.addEventListener("click" ,()=>{
      
        let output = (eval(userInput.value))
        userInput.value = output;
   

    })

    // clear

    let clear = document.querySelector("#btn")
    btn.addEventListener("click" ,()=>{
      userInput.value = " "
    })