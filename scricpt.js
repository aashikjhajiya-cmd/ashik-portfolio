const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    links.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

        formMessage.style.display = "block";
        formMessage.textContent = "Please fill all fields.";

        return;
    }


    const myEmail = "your-email@example.com";

    const mailSubject =
        encodeURIComponent(subject + " - Portfolio Contact");

    const mailBody =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    window.location.href =
        "mailto:" +
        myEmail +
        "?subject=" +
        mailSubject +
        "&body=" +
        mailBody;


    formMessage.style.display = "block";
    formMessage.textContent =
        "Opening your email application...";

});


document.getElementById("year").textContent =
    new Date().getFullYear();
