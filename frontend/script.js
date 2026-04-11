document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("city").value.trim();
  
  if (city === "") {
    alert("Anna kaupungin nimi!");
    return;
  }

  fetch(`http://localhost:3000/weather?city=${city}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Kaupunkia ei löytynyt");
      }
      return response.json();
    })
    .then(data => {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Lämpötila: ${data.main.temp}°C</p>
        <p>Kuvaus: ${data.weather[0].description}</p>
        <p>Tuuli: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById("result").innerText = error.message;
    });
});