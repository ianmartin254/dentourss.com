document.getElementById('book-button').addEventListener('click', function() {
    const checkinDate = document.getElementById('checkin-date').value;
    const confirmationMessage = document.getElementById('confirmation-message');

    if (checkinDate) {
        confirmationMessage.textContent = `Booking confirmed we will get back to you using your Email or phone number  for ${checkinDate}!`;
        confirmationMessage.classList.remove('hidden');
    } else {
        confirmationMessage.textContent = 'Please select a check-in date.';
        confirmationMessage.classList.remove('hidden');
    }
});