const colors = ["green", "red", "rgba(133,122,200)", "#f15025","blue","yellow","violet"];

const btn = document.getElementById("btn")//Get reference of click Me button using DOM


const changecolor = ()=>{
    const Color = document.querySelector(".color")//get reference of class name color
    const Num = Math.random()*10         //generating random number
    const Random_Num = Math.round(Num)
    console.log(Random_Num)

    if(Random_Num <= colors.length-1)     //if random number is smaller than array length in this case  6 then this will happen
    {
        const Colour_Name = colors[Random_Num] //storing data of colors array in colour name using Randomnum because random number is acting as a index number in this and this will give us random element of an array.
        document.body.style.background = Colour_Name //changing background colour
        Color.innerHTML = `${colors[Random_Num]}`//geeting element name in span tag.

    }
    else{//if random number is greater than array length.
        const new_num = Math.round(Random_Num/colors.length-1);//then we just divide it by 3 to make it smaller than array length.
        document.body.style.background = colors[new_num]//changing background colour
        Color.innerHTML = `${colors[new_num]}`//geeting element name in span tag.
    }
}
changecolor();//calling function because we need random colour when we load our page.
btn.addEventListener('click',changecolor)//Onclick event listner

//Code By - Sameer Singh
//Email - s690558576@gmail.com