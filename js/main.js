
/* ==============================
   TASTE THEORY - MAIN JAVASCRIPT
============================== */

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("formMessage");

        message.textContent =
            `Thank you, ${name}! Your demo form was submitted successfully.`;

        contactForm.reset();

    });

}


// RESERVATION FORM

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    const bookingDate = document.getElementById("bookingDate");

    // Prevent selecting past dates

    const today = new Date();
    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    bookingDate.min = localDate;

    reservationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const date = bookingDate.value;
        const time = document.getElementById("bookingTime").value;
        const guests = document.getElementById("guests").value;

        const message = document.getElementById("reservationMessage");

        message.textContent =
            `Thank you, ${name}! Your demo reservation request for ${guests} guest(s) on ${date} at ${time} has been received.`;

        reservationForm.reset();

        bookingDate.min = localDate;

    });

}

/* ==============================
   ACTIVE NAVIGATION
============================== */

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});
