let count=0;
let a=document.getElementById("count-el")
let prevEntry= document.getElementById("prevEntry")
let increment=()=>{
    count++;
    a.innerHTML=count
} 

let save=()=>{
    let countSave= count+" - "
    let entries=prevEntry.innerText;
    prevEntry.innerHTML=entries+countSave
    a.innerHTML=0
    count=0
}