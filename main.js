"use strict";

// Item add event
const addBtn = document.querySelector(".item-add");
const itemContainer = document.querySelector(".item-container");
const itemInput = document.querySelector('#item-input');
addBtn.addEventListener("click", (event)=> {
    const target = event.target;
    const itemTitle = itemInput.value;
    console.log(itemTitle);
    if(itemTitle !== ''){
        item(itemTitle);
        itemInput.value = '';
    }
    
})

function item(itemTitle) {
    const itemList = document.createElement('li');
    const deleteBtn = document.createElement('button');
    itemList.setAttribute('id', 'item');
    itemList.innerText = itemTitle;
    deleteBtn.setAttribute('class', 'item-delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    itemList.appendChild(deleteBtn);
    itemContainer.appendChild(itemList);

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
