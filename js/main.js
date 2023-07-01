
// Home Page
  var video = document.getElementById("myVideo");

  var btn = document.getElementById("myBtn");
  
  function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }


// Fu Food
var modal = document.getElementById("modal1");
var span = document.getElementsByClassName("close")[0];
var dishTitles = document.getElementsByClassName("dish-title");
var modalTitle = document.querySelector(".modal-title");
var modalImage = document.querySelector(".modal-image");
var modalDescription = document.querySelector(".modal-description");
  
// open the modal
function openModal(title, imageSrc, description) {
    modalTitle.textContent = title; 
    modalDescription.textContent = description;
    modal.style.display = "block";
}
  
for (var i = 0; i < dishTitles.length; i++) {
    dishTitles[i].addEventListener("click", function() {
    var title = this.textContent;
    var imageSrc = this.nextElementSibling.src;
    var description = this.nextElementSibling.nextElementSibling.textContent;
    openModal(title, imageSrc, description);
    });
}
  
span.onclick = function() {
    modal.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == modal) 
    {modal.style.display = "none";}
}