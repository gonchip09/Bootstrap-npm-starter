// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const form = e.target;
  const formData = new FormData(form);
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');

  btnText.textContent = "Enviando...";

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  })
  .then(() => {
    btnText.style.display = 'none'; 
    submitBtn.classList.add('success-state'); 
    
    form.reset();
  })
  .catch((error) => {
    console.error('Error al enviar:', error);
    btnText.textContent = "Error al enviar";
  });
});
