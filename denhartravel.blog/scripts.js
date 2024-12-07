// Get modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

// Function to open modal with destination details
function openModal(event) {
    const card = event.currentTarget;
    modalTitle.textContent = card.getAttribute("data-name");
    modalDescription.textContent = card.getAttribute("data-description");
    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    modal.style.display = "none";
}

// Add event listeners to destination cards
const destinationCards = document.querySelectorAll(".destination-card");
destinationCards.forEach(card => {
    card.addEventListener("click", openModal);
});

// Add event listener for close button
closeButton.addEventListener("click", closeModal);

// Close modal when clicking anywhere outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});