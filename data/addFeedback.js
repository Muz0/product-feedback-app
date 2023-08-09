"use strict";

// Retrieve data from local storage
const retrievedData = JSON.parse(window.localStorage.getItem("data"));
if (!retrievedData) {
  console.error("No data found in local storage");
}

// Function to add new feedback
const addNewFeedback = () => {
  // Get the form values
  const title = document.querySelector(".fb-title-input").value;
  const categoryDropdown = document.querySelector(".fb-select-trigger");
  const category = categoryDropdown.textContent || categoryDropdown.innerText;
  const description = document.querySelector(".fb-detail-input").value;

  // Create a new feedback object
  const newFeedback = {
    id: retrievedData.length + 1,
    upvote_count: 0,
    title: title,
    description: description,
    category: category,
    state: "suggestion",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  };

  // Add to retrieved data array
  retrievedData.push(newFeedback);

  // Save updated data to local storage
  window.localStorage.setItem("data", JSON.stringify(retrievedData));

  // Reset the form
  document.querySelector(".modal-content").reset();

  // check if the feedback is added to the data
  // console.log(retrievedData);

  // throw me back to the home page
  event.preventDefault();
  window.location.href = "./index.html";
};

// Add an event listener to the "Add Feedback" button
document.querySelector(".modal-add").addEventListener("click", addNewFeedback);

// Function to toggle dropdown
const toggleDropdown = () => {
  const options = document.querySelector(".fb-dropdown");
  options.classList.toggle("open"); // Assuming you have a 'hide' class to hide/show elements
};

// Add event listener to dropdown trigger
document
  .querySelector(".fb-select-trigger")
  .addEventListener("click", toggleDropdown);

// Function to select an option from dropdown
const selectOption = (event) => {
  const option = event.target;
  const selectedValue = option.textContent || option.innerText;
  document.querySelector(".fb-select-trigger").textContent = selectedValue;
  toggleDropdown(); // Close the dropdown
};

// Add event listener to each option in the dropdown
const options = document.querySelectorAll(".option");
options.forEach((option) => option.addEventListener("click", selectOption));



// Attach this function to a button or other element that should trigger the navigation
const backButton = document.querySelector('.goback-grey');
backButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = './index.html';
});

