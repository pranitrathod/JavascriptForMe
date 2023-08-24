// let answer=10
// const num=document.getElementById("input-number");
// answer=answer+num.value;
// console.log("NUMBER IS = ",num.value);
// function demo(answer)
// {
//     outputResult(answer," ");
//     console.log(answer);
// }
// num.addEventListener('click',demo(answer));


const a=document.getElementById("input-number");
let ans=0;
function demo()
{
    if (isNaN(a.value)) {
        console.log("Invalid input");
        return;
    }
    result=ans+parseFloat(a.value);
    if (isNaN(ans)) {
        console.log("Invalid input");
        return;
    }
    outputResult(ans," ");
}
a.addEventListener("input",demo);