// 🌗 Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ❓ FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// ✅ Form Validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

// Utility: Show error message
function showError(input, errorElement, message) {
  errorElement.textContent = message;
  input.style.borderColor = 'red';
}

// Utility: Clear error
function clearError(input, errorElement) {
  errorElement.textContent = '';
  input.style.borderColor = '';
}

// Utility: Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Submit event
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    showError(nameInput, nameError, 'Full name is required.');
    valid = false;
  } else {
    clearError(nameInput, nameError);
  }

  // Email validation
  if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Enter a valid email address.');
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    showError(passwordInput, passwordError, 'Password must be at least 6 characters.');
    valid = false;
  } else {
    clearError(passwordInput, passwordError);
  }

  // Final feedback
  if (valid) {
    formMessage.textContent = 'Thank you! We’ll be in touch soon.';
    formMessage.style.color = 'green';
    form.reset();
  } else {
    formMessage.textContent = 'Please fix the highlighted errors.';
    formMessage.style.color = 'red';
  }
});
