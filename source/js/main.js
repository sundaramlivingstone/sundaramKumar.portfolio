//
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu");
  const cancelIcon = document.querySelector(".cancel");
  const navbar = document.querySelector(".navbar");
  const navMenu = document.getElementById("nav-menu");

  menuIcon.addEventListener("click", function () {
    navbar.classList.add("active");
    menuIcon.style.display = "none";
    cancelIcon.style.display = "block";
  });

  cancelIcon.addEventListener("click", function () {
    navbar.classList.remove("active");
    cancelIcon.style.display = "none";
    menuIcon.style.display = "block";
  });
});

//
document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("element");
  const words = ["Web Developer", "Photographer", "Artificial Intelligence"];
  let currentIndex = 0;
  let currentWord = "";
  let isDeleting = false;
  let typeSpeed = 150;

  function type() {
    const fullWord = words[currentIndex];
    console.log(
      `CurrentIndex: ${currentIndex}, FullWord: ${fullWord}, CurrentWord: ${currentWord}, isDeleting: ${isDeleting}`
    );

    if (isDeleting) {
      currentWord = fullWord.substring(0, currentWord.length - 1);
    } else {
      currentWord = fullWord.substring(0, currentWord.length + 1);
    }

    element.innerHTML = currentWord;

    if (!isDeleting && currentWord === fullWord) {
      setTimeout(() => {
        isDeleting = true;
        console.log("Word completed: ", fullWord);
        type();
      }, 1000);
    } else if (isDeleting && currentWord === "") {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % words.length;
      console.log("Moving to next word: ", words[currentIndex]);
      type();
    } else {
      const adjustedSpeed = isDeleting ? typeSpeed / 2 : typeSpeed;
      setTimeout(type, adjustedSpeed);
    }
  }

  type();
});

// nav bar icons toggle bar and cnacle

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.add("open");
    menuIcon.style.display = "none";
  });

  closeIcon.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuIcon.style.display = "block";
  });
});

// download certificate

// contact sectioon

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Contact: ${contact.value}<br> Message: ${message.value}`;

  Email.send({
    // SecureToken: "fab0d596-4e93-466c-9fc5-83e0dd6d384c",
    Host: "smtp.elasticemail.com",
    Username: "sundaramlivingstone@gmail.com",
    Password: "EF0DC67762751A9138765C7D8FC502A346E0",
    To: "sundaramlivingstone@gmail.com",
    From: "sundaramlivingstone@gmail.com",
    Subject: "Portfolio New Message",
    Body: bodyMessage,
  }).then((response) => {
    if (response == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".contact-form-control");
  let allValid = true;

  for (const item of items) {
    if (item.value.trim() === "") {
      item.classList.add("error");
      item.parentElement.querySelector(".error-text").style.display = "block";
      allValid = false;
    } else {
      item.classList.remove("error");
      item.parentElement.querySelector(".error-text").style.display = "none";
    }

    item.addEventListener("keyup", () => {
      if (item.value.trim() !== "") {
        item.classList.remove("error");
        item.parentElement.querySelector(".error-text").style.display = "none";
      } else {
        item.classList.add("error");
        item.parentElement.querySelector(".error-text").style.display = "block";
      }
    });
  }

  return allValid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkInputs()) {
    sendEmail();

    form.reset();
    return false;
  }
});
