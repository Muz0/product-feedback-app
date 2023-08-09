console.log("Roadmap.js");

// import Data from "./data.js";

const Data = JSON.parse(window.localStorage.getItem("data"));

let planned = Data.filter((item) => item.state === "planned");
let inProgress = Data.filter((item) => item.state === "in-progress");
let live = Data.filter((item) => item.state === "live");

function createCardContent(item, state) {
  let card = document.createElement("div");
  card.className = `req-card req-card-${state}`;

  let cardContent = `
    <div class="req-card-top-color req-card-top-${state}"></div>
    <div class="req-card-title">
      <div class="${state}-dot dot"></div>
      <p class="body1">${state.charAt(0).toUpperCase() + state.slice(1)}</p>
    </div>
    <button class="req-card-button title-bold header3">
      ${item.title}
    </button>
    <p class="body1 title-small">
      ${item.description}
    </p>
    <div class="non-tag header4">Feature</div>
    <div class="req-card-bottom">
      <button class="req-card-upvote">
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"></path>
        </svg>
        <h4 class="header4">
          ${item.upvote_count}
        </h4>
      </button>
      <div class="comments-n-num">
        <h3 class="header3">
        <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"></path>
    </svg>
          ${item.comment_count}
        </h3>
      </div>
    </div>
  `;

  card.innerHTML = cardContent;
  return card;
}



function createHeaderAndCards(columnElement, data, status, subTitle) {
  let headerElement = document.createElement("div");
  headerElement.className = "req-cards-title";
  headerElement.innerHTML = `
    <h3 class="title-bold header3">${
      status.charAt(0).toUpperCase() + status.slice(1)
    } (${data.length})</h3>
    <p class="title-small body1">${subTitle}</p>
  `;
  
  // columnElement.innerHTML = "";
  columnElement.appendChild(headerElement);
  data.forEach((item) => {
    columnElement.appendChild(createCardContent(item, status));
  });
}


let main = document.getElementById("roadmap-reqs");

let firstColumn = document.getElementById("req-cards-cont-0");
createHeaderAndCards(firstColumn, planned, "planned", "Ideas for upcoming features");

let secondColumn = document.getElementById("req-cards-cont-1");
createHeaderAndCards(secondColumn, inProgress, "in-progress", "Currently being developed");

let thirdColumn = document.getElementById("req-cards-cont-2");
createHeaderAndCards(thirdColumn, live, "live", "Released features");

function addEventListenerToAddFeedback() {
  document.getElementById("add-feedback-btn").addEventListener("click", function () {
    window.location.href = "./add-feedback.html";
  });
}

addEventListenerToAddFeedback();
