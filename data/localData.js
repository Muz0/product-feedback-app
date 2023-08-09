const data = [
  {
    id: 1,
    upvote_count: 112,
    title: "Add tags for solutions",
    description: "Easier to search for...",
    category: "Enhancement",
    state: "suggestion",
    comments: [
      {
        id: 1,
        name: "John Doe",
        userName: "@jonathandoecom",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam perspiciatis aliquid atque sequi, ad hic vero totam nulla voluptatibus ipsa rerum ut voluptates corporis quia. Repellat asperiores libero voluptatibus.",

        replies: [],
      },
      {
        id: 2,
        name: "Rolls Royce",
        userName: "@rollsroyce_uk",
        text: "ad hic vero totam nulla voluptatibus ipsa rerum ut voluptates corporis quia. Repellat asperiores libero voluptatibus.",
        replies: [
          {
            id: 1,
            name: "John Doe",
            userName: "@jonathandoecom",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam perspiciatis aliquid atque sequi, ad hic vero totam nulla voluptatibus ipsa rerum ut voluptates corporis quia. Repellat asperiores libero voluptatibus.",
            replies: []
          },
          {
            id: 2,
            name: "Rolls Royce",
            userName: "@rollsroyce_uk",
            text: "ad hic vero totam nulla voluptatibus ipsa rerum ut voluptates corporis quia. Repellat asperiores libero voluptatibus.",
            replies: [
              {
                id: 2,
                name: "Rolls Royce",
                userName: "@rollsroyce_uk",
                text: "ad hic atibus.",
                replies: []
              }
            ]
          }
        ]
      },
    ],
    get comment_count() {
      return this.comments.length;
    },
  },
  {
    id: 4,
    upvote_count: 99,
    title: "Add a dark theme option",
    description:
      "It would help people with light sensitivities and who prefer dark mode...",
    category: "Feature",
    state: "planed",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },
  {
    id: 3,
    upvote_count: 65,
    title: "Q&A within the challenge hubs",
    description: "Challenge-specific Q&A would make for easy reference...",
    category: "Feature",
    state: "in-progress",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },

  {
    id: 10,
    upvote_count: 67,
    title: "Enhancement in live state",
    description: "This is a live enhancement...",
    category: "Enhancement",
    state: "live",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },
  {
    id: 2,
    upvote_count: 99,
    title: "Add a dark theme option",
    description:
      "It would help people with light sensitivities and who prefer dark mode...",
    category: "Feature",
    state: "live",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },

  {
    id: 11,
    upvote_count: 48,
    title: "UI in suggestion state",
    description: "This is a UI suggestion...",
    category: "UI",
    state: "suggestion",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },

  {
    id: 20,
    upvote_count: 95,
    title: "UI in live state",
    description: "This is a live UI update...",
    category: "UI",
    state: "live",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },

  {
    id: 21,
    upvote_count: 70,
    title: "UX in suggestion state",
    description: "This is a UX suggestion...",
    category: "UX",
    state: "suggestion",
    comments: [
      {
        id: 1,
        name: "John Doe",
        userName: "@jonathandoecom",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam perspiciatis aliquid atque sequi, ad hic vero totam nulla voluptatibus ipsa rerum ut voluptates corporis quia. Repellat asperiores libero voluptatibus.",

        replies: [],
      },
    ],
    get comment_count() {
      return this.comments.length;
    },
  },

  {
    id: 30,
    upvote_count: 88,
    title: "UX in live state",
    description: "This is a live UX feature...",
    category: "UX",
    state: "live",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },

  {
    id: 31,
    upvote_count: 54,
    title: "Bug in suggestion state",
    description: "This is a bug suggestion...",
    category: "Bug",
    state: "suggestion",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },

  {
    id: 40,
    upvote_count: 102,
    title: "Bug in live state",
    description: "This is a live bug fix...",
    category: "Bug",
    state: "live",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },

  {
    id: 41,
    upvote_count: 60,
    title: "Feature in suggestion state",
    description: "This is a feature suggestion...",
    category: "Feature",
    state: "suggestion",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },

  {
    id: 50,
    upvote_count: 76,
    title: "Feature in live state",
    description: "This is a live feature update...",
    category: "Feature",
    state: "live",
    comments: [],
    get comment_count() {
      return this.comments.length;
    },
  },
];

// window.localStorage.setItem("data", JSON.stringify(data));

function theFirstLoadOnly() {
  if (window.localStorage.getItem("data") === null) {
    window.localStorage.setItem("data", JSON.stringify(data));
  }
}

theFirstLoadOnly();
