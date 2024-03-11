getColor = ()=>{
   
const math = Math.floor( Math.random() * 16777215);
const getCode = "#" + math.toString(16)
document.body.style.backgroundColor = getCode;
console.log(math, getCode)

}


document.querySelector('#btn').addEventListener('click',
   getColor
)








// randomColor = () =>{

// const math = Math.floor(Math.random() * 16777215);
// const color = "#" + math.toString(16)
// document.body.style.backgroundColor = color;
// console.log(math, color);


// }
// document.querySelector('#btn').addEventListener('click',
//     randomColor()

//     )



