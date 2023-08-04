const todoinput = document.getElementById('todoinput');
const addtodobtn = document.getElementById('addtodobtn');
const todoitems = document.getElementById('todoitems');

addtodobtn.addEventListener('click',addTask);
todoinput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        addTask();
    }
});
function addTask(){
    const taskinput = todoinput.value.trim();
    if(taskinput !== ''){
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskinput}<i class="fa-solid fa-trash"></i>`;
        todoitems.appendChild(listItem);
        todoinput.value = '';
        listItem.querySelector('.fa-trash').addEventListener('click',()=>{
            todoitems.removeChild(listItem);
        })
    }

};
