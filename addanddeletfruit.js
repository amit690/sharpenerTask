const lists = document.getElementsByClassName('fruit');
for (let i = 0; i < lists.length; i++) {
  const editbtn = document.createElement('button');
  const btntext = document.createTextNode("Edit");
  editbtn.appendChild(btntext);
  editbtn.className = "edit-btn";
  lists[i].appendChild(editbtn);
}

// Select the form and ul elements
const form = document.querySelector('form');
const unlist = document.querySelector('ul.fruits');

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');
  newLi.className = 'fruit';
  newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>';
  unlist.appendChild(newLi);
  fruitToAdd.value = ''; // Clear the input field
});

// Handle click events on the list
unlist.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const fruitToDelete = event.target.parentElement;
    unlist.removeChild(fruitToDelete);
  } 
});