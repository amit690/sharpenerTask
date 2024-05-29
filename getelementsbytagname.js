const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontStyle = 'italic'; 
    if (listItems[i].textContent === 'Mango') {
        listItems[i].style.color = 'blue';  
    }
}