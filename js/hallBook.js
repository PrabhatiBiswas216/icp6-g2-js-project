// Sample event data (replace with your own data)
const events = [
    { id: 1, name: 'Marriage', capacity: 500 },
    { id: 2, name: 'Birthday', capacity: 100 },
    { id: 3, name: 'Seminar', capacity: 100 },
    { id: 3, name: 'Other', capacity: 100 }
];

// Populate event options in the select element
const eventSelect = document.getElementById('event');
events.forEach(event => {
    const option = document.createElement('option');
    option.value = event.id;
    option.textContent = `${event.name} (Capacity: ${event.capacity})`;
    eventSelect.appendChild(option);
});

function bookEvent() {
    const name = document.getElementById('name').value;
    const eventId = document.getElementById('event').value;
    const tickets = document.getElementById('tickets').value;
    const contacts = document.getElementById('contact').value;


    if (name && eventId && tickets&&contacts) {
        const selectedEvent = events.find(event => event.id == eventId);
        const bookingStatus = document.getElementById('bookingStatus');
        
        if (selectedEvent && tickets <= selectedEvent.capacity) {
            bookingStatus.innerHTML = `<p>Booking successful!</p>
                                       <p>Name: ${name}</p>
                                       <p>Event: ${selectedEvent.name}</p>
                                       <p>Tickets: ${tickets}</p>
                                       <p>Contact: ${contacts}</p>`;
        } else {
            bookingStatus.innerHTML = '<p>Event or ticket capacity exceeded. Please try again.</p>';
        }
    } else {
        alert('Please fill in all the fields.');
    }
}
