const Data = JSON.parse(window.localStorage.getItem("data"));


const states = ['suggestion', 'live', 'planned', 'in-progress'];

function countStates(data) {
  return data.reduce((counts, item) => {
    counts[item.state] = (counts[item.state] || 0) + 1;
    return counts;
  }, {});
}

function renderRoadmap() {
  const stateCounts = countStates(Data);
  const roadmapContainer = document.getElementById('roadmap-container');

  // Clear existing content
  roadmapContainer.innerHTML = "";

  // Add the title section
  const titleDiv = document.createElement('div');
  titleDiv.id = 'rm-title';
  titleDiv.innerHTML = `
    <h3 class="header3">Roadmap</h3>
    <a class="view-btn header4" href="/roadmap.html">View</a>
  `;
  roadmapContainer.appendChild(titleDiv);

  // Add the list section
  const listDiv = document.createElement('div');
  listDiv.id = 'rm-list';

  // You can customize these based on the states you have
  const statesToRender = ['planned', 'in-progress', 'live']; // Define the states here
  statesToRender.forEach((state) => {
    const listItem = document.createElement('div');
    listItem.className = 'rm-list-item';
    listItem.innerHTML = `
      <div class="dot ${state}-dot"></div>
      <p class="body1">${state.charAt(0).toUpperCase() + state.slice(1)}</p>
      <h3 class="rm-num header3">${stateCounts[state] || 0}</h3>
    `;
    listDiv.appendChild(listItem);
  });

  roadmapContainer.appendChild(listDiv);

  console.log('Rendered roadmap');
}

// Initial rendering
document.addEventListener('DOMContentLoaded', () => {
  renderRoadmap();
});
