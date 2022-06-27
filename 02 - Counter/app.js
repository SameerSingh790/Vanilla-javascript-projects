//Buttons
{/* <button class="btn decrease">decrease</button>
          <button class="btn reset">reset</button>
          <button class="btn increase">increase</button> */}

//Output field
{/* <span id="value">0</span> */}

const BTNS = document.querySelectorAll(".btn")
let num = 0;
BTNS.forEach((btn)=>{
   btn.addEventListener('click',()=>{
    if(btn.textContent == "increase"){
        console.log(++num)
        document.getElementById("value").innerHTML = +num

    }else if(btn.textContent == "decrease"){
        // console.log(--num)
        const result = --num
        document.getElementById("value").innerHTML = result;

    }else if(btn.textContent == "reset"){
        console.log(num = 0)
        document.getElementById("value").innerHTML = num;
    }
   })
})

// code by sameer singh
// email s690558576@gmail.com
