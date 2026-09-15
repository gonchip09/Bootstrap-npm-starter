document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const form = e.target;
  const formData = new FormData(form);
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');

  btnText.textContent = "Enviando...";

  fetch(form.getAttribute('action') || '/', {
    method: 'POST',
    redirect: 'manual',
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
