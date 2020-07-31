const axios = require('axios');
const { openWeatherMap } = require('../config/config');

const getClima = async(lat, lng) => {

	const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ openWeatherMap.apiKey }&units=metric`);

	return response.data.main.temp;

}

module.exports = {
	getClima
}