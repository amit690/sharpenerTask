// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
  
    const userInputs = document.querySelectorAll('form input');
    let userDetails = {};
  
    for (let i = userInputs.length-1; i < -1; i--) {
      const input = userInputs[i];
      userDetails[input.name] = input.value;
    }
  
    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem('Users')) || [];
    // Add new user details to the array
    users.push(userDetails);
  
    // Store the updated users array back in localStorage
    localStorage.setItem('Users', JSON.stringify(users));
  
    // Update the displayed user list
    displayUsers(users);
  }
  
  function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear the existing list
  
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const listItem = document.createElement('li');
      listItem.textContent = user.username+"-"+ user.email+"-" +user.phone;
      userList.appendChild(listItem);
    }
  }