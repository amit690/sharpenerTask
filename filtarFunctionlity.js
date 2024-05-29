const form = document.querySelector('form');
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Fruit Description';
const submitButton = form.querySelector('button[type="submit"]');
form.insertBefore(descriptionInput, submitButton);

const unlist = document.querySelector('ul.fruits');
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');
  const descriptionToAdd = document.getElementById('description');
  const newLi = document.createElement('li');
  newLi.className = 'fruit';
  newLi.innerHTML = `${fruitToAdd.value} <p><i>${descriptionToAdd.value}</i></p><button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;
  unlist.appendChild(newLi);
  fruitToAdd.value = ''; 
  descriptionToAdd.value = ''; 
});
const filterInput = document.getElementById('filter');
filterInput.addEventListener('keyup', function() {
  const filterValue = filterInput.value.trim().toLowerCase();
  const fruits = document.querySelectorAll('ul.fruits li');
  fruits.forEach(function(fruit) {
    const fruitName = fruit.childNodes[0].nodeValue.trim().toLowerCase();
    const fruitDescriptionElement = fruit.querySelector('p i');
    const fruitDescription = fruitDescriptionElement ? fruitDescriptionElement.innerText.trim().toLowerCase() : '';
    const isVisible = fruitName.includes(filterValue) || fruitDescription.includes(filterValue);
    fruit.style.display = isVisible ? '' : 'none';
  });
});