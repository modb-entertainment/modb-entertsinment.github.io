document.addEventListener("DOMContentLoaded", function() {
  // --- Tab Switching ---
  const tabs = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.gallery-section');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all buttons
      tabs.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');
      
      // Hide all sections
      sections.forEach(section => section.classList.remove('active'));
      // Show the section corresponding to the data-tab attribute
      const activeSection = document.getElementById(tab.dataset.tab);
      if(activeSection) {
        activeSection.classList.add('active');
      }
    });
  });
  
  // --- Video Play Button Functionality ---
  document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('video');
    const playButton = container.querySelector('.play-button');
  
    // When play button is clicked, play the video and show controls
    playButton.addEventListener('click', () => {
      video.play();
      video.setAttribute('controls', 'controls');
      playButton.style.display = 'none';
    });
  
    // When video is paused or ended, show the play button
    video.addEventListener('pause', () => {
      playButton.style.display = 'flex';
    });
    video.addEventListener('ended', () => {
      playButton.style.display = 'flex';
    });
  
    video.addEventListener('contextmenu', event => event.preventDefault());
  });
  
  // --- Modal for Enlarged Photo ---
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");
  const closeModal = document.querySelector(".modal .close");
  
  // Open modal when a photo is clicked
  document.querySelectorAll(".photo-grid img").forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });
  
  // Close modal when the close button is clicked
  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });
});
