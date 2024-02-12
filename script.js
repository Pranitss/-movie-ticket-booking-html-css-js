document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movieList');
    const movieNameInput = document.getElementById('movieName');
    const numTicketsInput = document.getElementById('numTickets');
    const bookingForm = document.getElementById('bookingForm');
  
    movieList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        const selectedMovie = event.target.textContent;
        movieNameInput.value = selectedMovie;
      }
    });
  
    bookingForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const movieName = movieNameInput.value;
      const numTickets = numTicketsInput.value;
      alert(`Booking confirmed for ${numTickets} ticket(s) for ${movieName}`);
      // Here you would typically send booking details to a server for processing
      // and handle the response accordingly.
    });
  });
  