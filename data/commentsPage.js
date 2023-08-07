// import Data from './data.json' assert { type: "json" };
import Data from './data.js';

// Function to get the ID from the URL
function getIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return Number(urlParams.get('id')); // Convert the ID to a number
}

// Function to get the content by ID
function getSingleContentById(id) {
  return Data.find((item) => item.id === id);
}

// Function to render content
function renderContent() {
  const id = getIdFromUrl();
  const content = getSingleContentById(id);

  // console.log(content);

  if (content) {
    let intoHeader = document.getElementById("comments-header");

    // let html = "";
    // retrievedData.innerHTML = html;

    let mainData = `
    <div class="suggestion-component active-sugg">
                <div class="upvote">
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"></path>
                  </svg>
                  <h4 class="header4">${content.upvote_count}</h4>
                </div>
                <div class="tit-desc-cat">
                  <h3 class="header3 sug-title">
                    ${content.title}
                  </h3>
                  <p class="body1 sug-desc">
                    ${content.description}
                  </p>
                  <div><div class="non-tag header4">Feature</div></div>
                </div>
                <div class="comments-n-num">
                  <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"></path>
                  </svg>
                  <h3 class="header3">${content.comment_count}</h3>
                </div>
              </div>`;

    intoHeader.insertAdjacentHTML('beforeend',mainData);



    let intoComments = document.getElementById("coms-cont");
    if(content.comments.length === 1){
      document.getElementById('num-of-coms').innerHTML = content.comments.length + " Comment";
    } else{
      document.getElementById('num-of-coms').innerHTML = content.comments.length + " Comments";
    }
    for(let i=0; i<content.comments.length; i++){
      let commentsData = `
      <div class="comment-container">
              <div class="pic-cont">
                <!-- <img class="pic" src="user-images/image-george.jpg" alt="prof-pic"> -->
              </div>
              <div class="hide"></div>
              <div class="comment-top">
                <h4 class="header4 name">${content.comments[i].name}</h4>
                <div class="username-n-reply">
                  <p class="body2 username">${content.comments[i].userName}</p>
                  <button class="header4 reply">Reply</button>
                </div>
              </div>
              <div id="comment-bot">
                <p class="comment-text body2">
                  ${content.comments[i].text}
                </p>
              </div>
            </div>`;
            console.log(content.comments.text);
            intoComments.insertAdjacentHTML('beforeend',commentsData);
    }
  } else {
    console.error('Content not found for ID:', id);
  }

  
}

// Call the renderContent function when the page loads
window.onload = renderContent;

