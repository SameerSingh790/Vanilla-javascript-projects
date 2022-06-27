{/* <span class="color">#f1f5f8</span> */}
//Using Hex color Colours is going to be generated randomly.

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const BTN = document.getElementById("btn")//Get reference of click Me button using DOM

//Function Definition
const ChangeColor = ()=>{
    
    let arr = ["#"];//Array in which Random items Of hex array will going to store.
    for(let i=0;i<=5;i++){//we use i<=5 because length of out hex code is only 6 and # we already added.
         const num = Math.random()*hex.length;//getting random Data index number between 0 to length of an array.
         const Random_Num = Math.floor(num);
         arr.push(hex[Random_Num]);//pushing random data of hex array into arr array.
       }
    const Result = arr.join("")//converting array into string using join because we don't need any comma between our string.
    console.log(Result)//output - #B45C7F (example)
    
    document.body.style.background = Result;//changing the colour using DOM
    document.querySelector(".color").innerHTML = Result;//changing data at every click inside span tag.
}
BTN.addEventListener('click',ChangeColor)//Onclick event listner 

ChangeColor();//calling function because we need random colour when we load our page.

//Code By - Sameer Singh
//Email - s690558576@gmail.com