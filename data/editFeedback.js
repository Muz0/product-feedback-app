const Data = JSON.parse(window.localStorage.getItem("data"));

function populateForm() {
  const id = getIdFromUrl();
  const content = getSingleContentById(id);

  if (content) {
    let header = document.querySelector(".header1");
    header.innerHTML = `Editing "${content.title}"`;

    let title = document.querySelector(".fb-title-input");

    title.innerHTML = content.title;
    title.value = content.title;

    let category = document.querySelector(".fb-select-trigger");
    category.innerHTML = content.category;
    category.value = content.category;

    let description = document.querySelector(".fb-detail-input");
    description.innerHTML = content.description;
    description.value = content.description;
  }
}

document.addEventListener("DOMContentLoaded", populateForm);

function toggleDropdown(event) {
  const options = event.currentTarget.querySelector(".options");
  options.classList.toggle("open");
}

const dropdowns = document.querySelectorAll(".fb-dropdown-wrapper");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", toggleDropdown);
});

function saveChanges() {
  const id = getIdFromUrl();
  const content = getSingleContentById(id);

  if (content) {
    const title = document.querySelector(".fb-title-input").value;
    const category = document.querySelector(".fb-select-trigger").value;
    const description = document.querySelector(".fb-detail-input").value;

    content.title = title;
    content.category = category;
    content.description = description;
  }

  Data.forEach((item) => {
    if (item.id === id) {
      item.title = title;
      item.category = category;
      item.description = description;
    }
  });
 
  // window.localStorage.setItem("data", JSON.stringify(Data));


  // window.location.href = "./index.html";
}

function deleteContent() {
  const id = getIdFromUrl();
  const index = Data.findIndex((item) => item.id === id);
  if (index !== -1) {
    Data.splice(index, 1);
  }
  window.location.href = "./index.html";
}

const saveButton = document.querySelector(".modal-add");
saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  saveChanges();
});

const deleteButton = document.querySelector(".modal-delete");
deleteButton.addEventListener("click", (event) => {
  event.preventDefault();
  deleteContent();
});

function getIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return Number(urlParams.get("id"));
}

function getSingleContentById(id) {
  return Data.find((item) => item.id === id);
}
