function handleFormSubmit(event) {
    event.preventDefault();
    const userInputs = document.querySelectorAll('form input');
    let userDetails = {};
    for (let i = 0; i < userInputs.length; i++) {
        userDetails[userInputs[i].name] = userInputs[i].value;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userDetails);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers(users);
}

function displayUsers(users) {
    const userList = document.querySelector('ul');
    userList.innerHTML = '';
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteUser(index);
        });
        listItem.appendChild(deleteButton);
        userList.appendChild(listItem);    
    }
}

function deleteUser(index) {
    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Remove the user at the specified index
    users.splice(index, 1);

    // Store the updated users array back in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Update the displayed user list
    displayUsers(users);
}