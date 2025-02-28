document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.remove();
        document.getElementById("form-response").innerText = "Thank you for reaching out!";
      } else {
        response.json().then(data => {
          if (data.errors) {
            document.getElementById("form-response").innerText = data.errors.map(error => error.message).join(", ");
          } else {
            document.getElementById("form-response").innerText = "Oops! There was a problem submitting your form.";
          }
        });
      }
    }).catch(error => {
      document.getElementById("form-response").innerText = "Oops! There was a problem submitting your form.";
    });
  });
  