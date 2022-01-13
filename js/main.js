"use strict"

const addBtn = document.querySelector(".add-btn");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    
    const text = input.value;


    const p = document.createElement("p");
    const li = document.createElement("li");

    p.textContent = text;
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
})


function addDeleteBtn(){   
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);    
});
    if(input.value.length !== 0){
        return deleteBtn;
    }
    
};