function createNewElement(index) {
  var input = document.createElement('input'); // creating element
  input.placeholder = 'input box ' + (index + 1) // adding placeholder
  return input; // returing created element
}

function createInputElements() {
  // reading value from input
  var numberOfElement = document.getElementById('numberOfElement').value;
  
  // getting input container
  var container = document.getElementById('input-container');
  container.innerHTML = '';

  for(var i = 0; i < numberOfElement; i++){
    var createdElement = createNewElement(i);
    container.appendChild(createdElement);
  }
}