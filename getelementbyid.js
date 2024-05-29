document.getElementById('main-heading').textContent = 'Fruit World';
        
document.getElementById('main-heading').style.color = 'orange';

document.getElementById('header').style.backgroundColor = 'green';

document.getElementById('header').style.borderBottom = '2px solid orange';

document.getElementById('basket-heading').style.color = 'green';

const thanksDiv = document.getElementById('thanks');
const thanksParagraph = document.createElement('p');
thanksParagraph.textContent = 'Please visit us again';
thanksDiv.appendChild(thanksParagraph);