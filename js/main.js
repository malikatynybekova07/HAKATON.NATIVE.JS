
const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

  searchIcon.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchInput.focus();
  searchIcon.style.display = "none";
});

  searchInput.addEventListener("input", () => {
  searchResults.innerHTML = "Результаты поиска будут здесь.";
  searchResults.style.display = "block";
});

  searchInput.addEventListener("blur", () => {
  searchInput.style.display = "none";
  searchIcon.style.display = "block";
  searchResults.style.display = "none";
});


function readMore() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var btn = document.getElementById("btn");

  if(dots.style.display === "none") {
    dots.style.display="inline";
  
    more.style.display="none";
  }else {
    dots.style.display="none";
    btn.innerHTML="Скрыть";
    more.style.display="inline";
  }
  }







 



  // JavaScript for opening and closing modals
  const modalRegister = document.getElementById("modalRegister");
  const modalLogin = document.getElementById("modalLogin");
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");

  registerButton.addEventListener("click", () => {
    modalRegister.style.display = "block";
  });

  loginButton.addEventListener("click", () => {
    modalLogin.style.display = "block";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modalRegister) {
      modalRegister.style.display = "none";
    }
    if (event.target === modalLogin) {
      modalLogin.style.display = "none";
    }
  });

  // Form submission example
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle registration form submission here
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle login form submission here
  });


 
  const wrapper = document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector
  ('.register-link');
  const btnPopup = document.querySelector(".btnLogin-popup");


  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  });

  loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
  });

   btnPopup.addEventListener("click", () => {
     wrapper.classList.add("active-popup");
   });


