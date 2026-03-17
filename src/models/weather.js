class Weather {
  constructor(data) {
    this.temperature = data.main.temp;
    this.humidity = data.main.humidity;
    this.windSpeed = data.wind.speed;
  }
}
module.exports = Weather;