function handleSubmit(event) {
    event.preventDefault();
  
    const formData = {
      Imie: document.getElementById('imie').value,
      Nazwisko: document.getElementById('nazwisko').value,
      Data: document.getElementById('data').value,
      "Czy jesteś trzeźwy?": document.getElementById('pijany').checked ? 'Tak' : 'Nie',
      "Potwierdzenie przetważania danych": document.getElementById('pd').checked ? 'Zgoda udzielona' : 'Brak zgody',
      "Wybrane miejsce": document.getElementById('miejsce').value,
    };
  
    
    const queryString = Object.entries(formData).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
    const redirectUrl = `wynik.html?${queryString}`;
    window.location.href = redirectUrl;
  }