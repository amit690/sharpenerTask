function handleFormSubmit(event) {
    event.preventDefault();
  
    const userInputs = document.querySelectorAll('form input');
    let userDetails = {};
  
    userInputs.forEach(input => {
      userDetails[input.name] = input.value;
    });
  
    let userDetailsString = JSON.stringify(userDetails);
    localStorage.setItem("User Details", userDetailsString);
  
  }
  module.exports=handleFormSubmit;
  