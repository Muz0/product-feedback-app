// import Data from "./data.js";

const Data = JSON.parse(window.localStorage.getItem("data"));

function getIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return Number(urlParams.get("id"));
}

function getSingleContentById(id) {
  return Data.find((item) => item.id === id);
}

function renderContent() {
  const id = getIdFromUrl();
  const content = getSingleContentById(id);

  if (content) {
    let intoHeader = document.getElementById("comments-header");

    let mainData = `
    <div class="suggestion-component active-sugg">
                <div class="upvote">
                  <svg width="10" height="7" xmlns="http:
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
                  <svg width="18" height="16" xmlns="http:
                    <path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"></path>
                  </svg>
                  <h3 class="header3">${content.comment_count}</h3>
                </div>
              </div>`;

    intoHeader.insertAdjacentHTML("beforeend", mainData);

    let intoComments = document.getElementById("coms-cont");
    if (content.comments.length === 1) {
      document.getElementById("num-of-coms").innerHTML =
        content.comments.length + " Comment";
    } else {
      document.getElementById("num-of-coms").innerHTML =
        content.comments.length + " Comments";
    }

    const renderReplies = (replies, container) => {
      replies.forEach((reply) => {
        let repliesData = `
          <div class="reply-container">
            <div class="pic-cont">
              <!-- <img class="pic" src="user-images/image-george.jpg" alt="prof-pic"> -->
            </div>
            <div class="hide"></div>
            <div class="comment-top">
              <h4 class="header4 name">${reply.name}</h4>
              <div class="username-n-reply">
                <p class="body2 username">${reply.userName}</p>
                <button class="header4 reply">Reply</button>
              </div>
            </div>
            <div id="comment-bot">
              <p class="comment-text body2">
                ${reply.text}
              </p>
            </div>
            <div class="reply-container" id="reply-container${reply.id}"></div>
          </div>`;
        container.insertAdjacentHTML("beforeend", repliesData);
        let replyContainer =
          container.lastElementChild.querySelector(".reply-container");
        if (reply.replies.length > 0) {
          renderReplies(reply.replies, replyContainer);
        }
      });
    };

    content.comments.forEach((comment) => {
      let commentsData = `
        <div class="comment-container">
          <!-- comment details here -->
          <div class="comment-container">
               <div class="pic-cont">
                 <!-- <img class="pic" src="user-images/image-george.jpg" alt="prof-pic"> -->
               </div>
               <div class="hide"></div>
               <div class="comment-top">
                 <h4 class="header4 name">${comment.name}</h4>
                 <div class="username-n-reply">
                   <p class="body2 username">${comment.userName}</p>
                   <button class="header4 reply">Reply</button>
                 </div>
               </div>
               <div id="comment-bot">
                 <p class="comment-text body2">
                  ${comment.text}
                 </p>
               </div>
                 <div class="reply-container" id="reply-container"></div>
              </div>`;
      intoComments.insertAdjacentHTML("beforeend", commentsData);
      let replyContainer =
        intoComments.lastElementChild.querySelector(".reply-container");
      renderReplies(comment.replies, replyContainer);
    });
  } else {
    console.error("Content not found for ID:", id);
  }
}

window.onload = renderContent;

// a part to handle add comment:

function addComment() {
  // Get the ID of the URL
  const id = getIdFromUrl();

  // Find the object with that ID
  const content = getSingleContentById(id);

  if (!content) {
    console.error("Content not found for ID:", id);
    return;
  }

  // Get the data from the form
  const userComment = document.getElementById("comment-input").value;

  // Validate the comment
  if (userComment.trim() === "") {
    alert("Comment cannot be empty!");
    return;
  }

  // Add the comment to the object
  const newComment = {
    // Assuming the comment structure is something like this
    name: "User Name", // Replace with actual user name
    userName: "username", // Replace with actual username
    text: userComment,
    replies: []
  };
  
  content.comments.push(newComment);
  console.log(content);
  // Update the local storage
  // window.localStorage.setItem("data", JSON.stringify(Data));

  // Re-run the page render function
  // renderContent();
}

