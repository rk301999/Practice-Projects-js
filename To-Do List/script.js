const inputBox = document.querySelector("#input-box");
const li = document.querySelector("#list-container");
const btn = document.querySelector(".row button");

const saveData=()=>{
    sessionStorage.setItem("data",li.innerHTML);
}

// console.log(inputBox.value , "asdaokdmsd");
btn.addEventListener("click",()=>{
    const newLi = document.createElement("li");
    newLi.innerHTML = inputBox.value;
    li.appendChild(newLi);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newLi.appendChild(span);
    inputBox.value = "";
    saveData();
})

li.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

window.addEventListener("DOMContentLoaded",()=>{
    li.innerHTML = sessionStorage.getItem("data");
})



