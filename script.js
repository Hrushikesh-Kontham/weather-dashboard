const apiKey = 'https://dog.ceo/dog-api/'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) return alert("Please enter a city");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].main}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon"/>
      `;
      document.getElementById('weatherResult').innerHTML = weather;
    })
    .catch(() => {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">City not found.</p>`;
    });
}
