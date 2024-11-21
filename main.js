const toggleButton = document.getElementById("toggle-dark-mode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.classList.remove("fa-moon");
    toggleButton.classList.add("fa-sun");
  } else {
    toggleButton.classList.remove("fa-sun");
    toggleButton.classList.add("fa-moon");
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let scrollTopBtn = document.getElementById("scrollTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function animateCounter() {
  const counters = document.querySelectorAll("h3[data-target]");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    if (count < target) {
      const increment = target / 200;
      const delay = 300;

      setTimeout(() => {
        const updateCounter = () => {
          const currentCount = +counter.innerText;

          if (currentCount < target) {
            counter.innerText = Math.ceil(currentCount + increment);
            setTimeout(updateCounter, 15);
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();
      }, delay);
    } else {
      counter.innerText = target;
    }
  });
}

const section = document.querySelector(".Happy-Gifting");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter();
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(section);
// lazy loading
window.onload = function () {
  const images = document.querySelectorAll("img");

  images.forEach(function (img) {
    img.setAttribute("loading", "lazy");
  });
};

// login

function validateForm() {
  const email = document.getElementById("email").value;
  const userName = document.getElementById("userName").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  let text = "";

  // Reset error messages
  error.innerHTML = "";

  // Check if fields are empty
  if (!userName) {
    text += "PLEASE ENTER A VALID USERNAME <br>";
  }
  if (!email) {
    text += "PLEASE ENTER A VALID EMAIL<br>";
  }
  if (!phone) {
    text += "PLEASE ENTER A VALID PHONE NUMBER<br>";
  }
  if (!password) {
    text += "PLEASE ENTER A VALID PASSWORD<br>";
  }

  // Validate username length
  if (userName.length < 5) {
    text += "PLEASE ENTER A USERNAME WITH AT LEAST (5LETTERS)<br>";
  }

  // Validate email format
  if (email.indexOf("@") === -1 || email.length < 10) {
    text += "PLEASE ENTER A VALID EMAIL<br>";
  }

  // Validate phone number
  if (isNaN(phone) || phone.length < 11) {
    text += "PLEASE ENTER A VALID PHONE NUMBER(11 )<br>";
  }

  // Validate password
  if (password.length < 6) {
    text += " PLEASE ENTER A PASSWORD WITH AT LEAST (6LETTERS)<br>";
  }

  if (text !== "") {
    error.innerHTML = text;
    return false;
  }

  // Proceed with form submission
  return true;
}
