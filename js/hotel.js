
  
function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const persons = document.getElementById('persons').value;
// You can perform further validation and processing here
 alert(`Booking Confirmed!\nName: ${name}\nEmail: ${email}\nPersons: ${persons}`);
}
function toggleFaq(faqId) {
  let faqAnswer = document.getElementById(faqId);
  if (faqAnswer.style.display === 'block') {
      faqAnswer.style.display = 'none';
  } else {
      faqAnswer.style.display = 'block';
  }
}
// room card using chargpt
function bookRoom() {
  alert('Room booked successfully! Enjoy your stay.');
}
// services
function submitForm() {
  // You can implement the form submission logic here
  alert('Request submitted successfully!');
}
// faq
document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question');
 questions.forEach(question => {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;
  if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});
// hotel booking
function submitBooking() {
  // Get form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let  checkIn = document.getElementById('checkIn').value;
  let  checkOut = document.getElementById('checkOut').value;
  let  roomType = document.getElementById('roomType').value;
 // Validate form data (add your validation logic here)
 // Display confirmation message
  let  confirmationMessage = `Booking Confirmed!
      Name: ${name}
      Email: ${email}
      Check-in Date: ${checkIn}
      Check-out Date: ${checkOut}
      Room Type: ${roomType}`;
 document.getElementById('confirmation').innerHTML = confirmationMessage;
}// back to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// booking js
