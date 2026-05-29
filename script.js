import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* ================= IMAGE SLIDER ================= */

let slideIndex = 0;

const slides = document.querySelectorAll(".slides");

function showSlides() {
    if (slides.length > 0) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].classList.add("active");
    }
}

if (slides.length > 0) {
    showSlides();
    setInterval(showSlides, 3000);
}

/* ================= BOOK POPUP ================= */

const bookBtn = document.getElementById("bookBtn");
const popup = document.getElementById("popup");

if (bookBtn && popup) {

    bookBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });
}

/* ================= CLOSE POPUP ================= */

function closePopup() {

    if (popup) {
        popup.style.display = "none";
    }
}

window.closePopup = closePopup;

/* ================= CONTACT FORM ================= */

const contactForm = document.querySelector("#contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you for contacting HostEase Tourism!");

        contactForm.reset();
    });
}

/* ================= HEADER SCROLL EFFECT ================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (header) {

        if (window.scrollY > 50) {
            header.style.background = "rgba(0,0,0,0.9)";
        } else {
            header.style.background = "rgba(0,0,0,0.6)";
        }
    }
});

/* ================= BOOKING FORM ================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Your tour booking has been confirmed!");

        bookingForm.reset();
    });
}

/* ================= LOGIN FORM ================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        } catch (error) {

            alert(error.message);
        }
    });
}

/* ================= SIGNUP FORM ================= */

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        try {

            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Signup Successful!");

            signupForm.reset();

            window.location.href = "login.html";

        } catch (error) {

            alert(error.message);
        }
    });
}

/* ================= LOGOUT BUTTON ================= */

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (event) {

        event.preventDefault();

        alert("Logged out successfully!");

        window.location.href = "login.html";
    });
}

/* ================= SEARCH FUNCTION ================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let name = card.getAttribute("data-name");

            if (name && name.toLowerCase().includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

/* ================= CARD HOVER EFFECT ================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

/* ================= PAYMENT FORM ================= */

const paymentForm = document.getElementById("paymentForm");

if (paymentForm) {

    paymentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Payment Successful!");

        paymentForm.reset();

        window.location.href = "dashboard.html";
    });
}