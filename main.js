"use strict";

// Item add event
const addBtn = document.querySelector(".item-add");
const itemContainer = document.querySelector(".item-container");
const itemInput = document.querySelector('#item-input');
addBtn.addEventListener("click", ()=> {
    addItem();
})

itemInput.addEventListener('keyup', (event)=>{
    if(event.keyCode === 13) {
        addItem();
    }
})

function addItem() {
    const itemTitle = itemInput.value;
    if(itemTitle !== ''){
        item(itemTitle);
        itemInput.value = '';
    }
}

function item(itemTitle) {
    const itemList = document.createElement('li');
    const deleteBtn = document.createElement('button');
    itemList.setAttribute('id', 'item');
    itemList.innerText = itemTitle;
    deleteBtn.setAttribute('class', 'item-delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    itemList.appendChild(deleteBtn);
    itemContainer.appendChild(itemList);

    itemList.addEventListener("click", (event) => {
        const target = event.target;
        if(target.classList.contains("item-cancel")){
            target.classList.remove("item-cancel");
        }
        else {target.classList.add("item-cancel")}
    })
    deleteBtn.addEventListener("click", (event) => {
        const target = event.target;
        if(target.classList.contains("item-delete")){
            target.parentNode.remove();
        }
        else {
            target.parentNode.parentNode.remove();
        }
    })
}
