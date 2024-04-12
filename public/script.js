const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  //handle the event here
  addTask(form.elements.taskName.value, form.elements.taskType.value, form.elements.taskRate.value, form.elements.taskTime.value, form.elements.taskClient.value);
  // console.log(taskList);
})

function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML =`<p><strong>${task.name}</strong><br>${task.type}</p>`;
  tasklist.appendChild(item);
  form.reset();
  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task
  // Listen for when the delete button is clicked
  delButton.addEventListener("click", function(event) {
    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will delete the right element
    
    // Filter out the element corresponding with the list item and store the new task list
    taskList = taskList.filter( task => task.id != item.getAttribute('data-id') )
  
    // Make sure the deletion worked by logging out the whole array
    // console.log(taskList)
  })
}



// Create an object called 'task'
  // Populate the properties based on the provided data model
// Create a function called 'addTask'
  // Give the function input parameters for: name, type, rate, time, client
  // Paste your object definition from above in the function
  // Replace the property values with the input paramaters
  // Add the object to the taskList array

class Task {
  constructor(name ,type, id, date, rate, time, client) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.date = date;
    this.rate = rate;
    this.time = time;
    this.client = client;
  }
}

taskList = [];

function addTask(name, type, rate, time, client) {
  var newTask = new Task(name, type, Date.now(), new Date().toISOString(), rate, time, client);
  taskList.push(newTask);
  displayTask(newTask);
}

addTask("Initial Sketches", "Concept Ideation", 30, 2, "Google");
// addTask("Home page design", "Wireframe Design", 45, 5, "Atlassian");
// addTask("Backend dev", "Application Coding", 80, 12, "Windows");
// addTask("Database testing", "Testing/Debugging", 60, 15, "Amazon");
// addTask("User research", "Pitch deck", 50, 38, "Woolworths");

// console.log(taskList);

// Call the function with test values for the input paramaters



// Log the array to the console.