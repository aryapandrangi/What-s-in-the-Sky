document.getElementById('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const city = document.getElementById('city').value;
    const resultDiv = document.getElementById('result');

        const response = await axios.get(`/weather?city=${city}`);
        const data = response.data;

        if (data.error) {
            resultDiv.innerHTML = `<p>${data.error}</p>`;
        } else {
            resultDiv.innerHTML = `
                <h2>${data.name}</h2>
                <h3 style="color:#005A9C">Temperature: ${data.main.temp} °C</h3>
                <h3 style="color:#555555">Weather: ${data.weather[0].description}</h3>
            `;
        }
});
