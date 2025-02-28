// Show drop-down comments on service hover
function showServiceComments(element, service) {
  const commentsData = {
    "Music Production": [
      "Great sound quality!",
      "Loved the mixing and mastering."
    ],
    "Video Editing": [
      "Sharp cuts and transitions!",
      "Super cinematic feel."
    ],
    "Photography": [
      "Amazing lighting and composition.",
      "Captured every moment perfectly!"
    ],
    "Podcast Recording": [
      "Crystal clear audio!",
      "The recording booth is top-notch."
    ]
  };
  
  let commentsDiv = element.querySelector('.service-comments');
  if (!commentsDiv) {
    commentsDiv = document.createElement('div');
    commentsDiv.className = 'service-comments';
    element.appendChild(commentsDiv);
  }
  let commentsHTML = "<h3>What people say:</h3><ul>" +
    (commentsData[service] || []).map(comment => `<li>${comment}</li>`).join('') +
    "</ul>";
  commentsDiv.innerHTML = commentsHTML;
  void commentsDiv.offsetWidth;
  commentsDiv.classList.add('show');
}

function hideServiceComments(element) {
  const commentsDiv = element.querySelector('.service-comments');
  if (commentsDiv) {
    commentsDiv.classList.remove('show');
  }
}
