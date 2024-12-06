const addBtn = document.querySelector('.add');
const textField = document.querySelector('[name="text"]');
addBtn.addEventListener('click', () => {
    const lastItem  = document.querySelector('.my-list li:last-child');
    const cloneLastItem = lastItem.cloneNode(true);

    console.log(cloneLastItem);
    
    cloneLastItem.querySelector('b').textContent = textField.value;

    document.querySelector('.my-list').prepend (cloneLastItem); 
});
