// import Data from "./data.js";

const Data = JSON.parse(window.localStorage.getItem("data"));

const container = document.getElementById("all-suggs");
let currentFilter = "All"; // Keeping track of the current filter
let currentSort = "Most Upvotes"; // Keeping track of the current sort

let suggestionsOnly = Data.filter((item) => item.state === "suggestion");

let numOfSuggestions = suggestionsOnly.length;
document.getElementById("sugg-count").innerHTML =
  numOfSuggestions + " Suggestions";

// Function to toggle the dropdown
function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown-container");
  dropdown.classList.toggle("hide");
}




// Function to sort Data
function sortData(DataArray, sortBy) {
  switch (sortBy) {
    case "Most Upvotes":
      return DataArray.sort((a, b) => b.upvote_count - a.upvote_count);
    case "Least Upvotes":
      return DataArray.sort((a, b) => a.upvote_count - b.upvote_count);
    case "Most Comments":
      return DataArray.sort((a, b) => b.comment_count - a.comment_count);
    case "Least Comments":
      return DataArray.sort((a, b) => a.comment_count - b.comment_count);
  }
}

// Function to filter and sort Data
function filterAndSortData() {
  let filteredData = Data;

  // Filter Data based on the 'suggestion' state
  filteredData = Data.filter((suggestion) => suggestion.state === "suggestion");

  if (currentFilter !== "All") {
    filteredData = filteredData.filter(
      (suggestion) => suggestion.category === currentFilter
    );
  }

  const sortedData = sortData(filteredData, currentSort);
  renderData(sortedData);
}

// Function to render Data
function renderData(DataToRender) {
  // Create a fragment
  const fragment = document.createDocumentFragment();

  DataToRender.forEach((suggestion) => {
    const html = `<button class="suggestion-component" id=${suggestion.id}>
  <div class="upvote">
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 6l4-4 4 4"
        stroke="#4661E6"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      ></path>
    </svg>
    <h4 class="header4">${suggestion.upvote_count}</h4>
  </div>
  <div class="tit-desc-cat">
    <h3 class="header3 sug-title">${suggestion.title}</h3>
    <p class="body1 sug-desc">${suggestion.description}</p>
    <div><div class="non-tag header4">${suggestion.category}</div></div>
  </div>
  <div class="comments-n-num">
    <svg
      width="18"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
        fill="#CDD2EE"
        fill-rule="nonzero"
      ></path>
    </svg>
    <h3 class="header3">${suggestion.comment_count}</h3>
  </div>
</button>
`;
    // how to add id into buttons properties?

    // Create a temporary container for the HTML
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = html;

    // Append the first (and only) child of the temporary container to the fragment
    fragment.appendChild(tempContainer.firstChild);
  });

  // Clear existing Data
  container.innerHTML = "";

  // Append the fragment to the container
  container.appendChild(fragment);

  // Add event listeners to the buttons
  addEventListenersToButtons();
  addEventListenerToAddFeedback();
}

// Event listener for filter buttons
document.querySelectorAll("#tags-container .tag").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document
      .querySelectorAll("#tags-container .tag")
      .forEach((btn) => btn.classList.remove("tag-active"));

    // Add active class to clicked button
    this.classList.add("tag-active");

    currentFilter = this.value;
    filterAndSortData();
  });
});

// Onclick event to handle the dropdown visibility
document.querySelector(".sort-by").addEventListener("click", toggleDropdown);


// Event listener for dropdown buttons
document.querySelectorAll(".dropdown-text").forEach((button) => {
  button.addEventListener("click", function () {
    const sortBy = this.value;
    document.getElementById("sort-text").innerText = sortBy;
    toggleDropdown();
    currentSort = sortBy;
    filterAndSortData();
  });
});

// Initial rendering
filterAndSortData();

// add event listeners to buttons

function addEventListenersToButtons() {
  document.querySelectorAll(".suggestion-component").forEach((button) => {
    button.addEventListener("click", function () {
      const id = this.id; // Get the id attribute of the clicked button
      window.location.href = "comments.html?id=" + id; // Navigate to the comments page with the id as a query parameter
    });
  });
}

function addEventListenerToAddFeedback() {
  document.getElementById("header-btn").addEventListener("click", function () {
    window.location.href = "./add-feedback.html";
  });
}